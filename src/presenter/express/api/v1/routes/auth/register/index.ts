import { toCamel, toSnake } from 'convert-keys';
import { CREATED } from 'http-status-codes';
import _pick from 'ramda/src/pick';
import validateData from 'rulr/validateData';
import { v4 as uuid } from 'uuid';
import User from '../../../../../../../types/items/User';
import generateToken from '../../../../../../../utils/helpers/auth/generateToken';
import getVisibleUserProperties from '../../../../../../../utils/helpers/model/getVisibleUserProperties';
import getVerifyEmailUrl from '../../../../../../../utils/helpers/url/getVerifyEmailUrl';
import Config from '../../../../../presenterFactory/Config';
import catchErrors from '../../../../../utils/errors/catchErrors';
import rules, { schema } from '../../../../../utils/schemas/auth/register';

export default (config: Config) =>
  catchErrors(config, async (req, res) => {
    const payload: any = _pick(Object.keys(schema), req.body);

    const { password_confirmation, ...data } = validateData(rules)(payload);
    const {
      bio,
      dateOfBirth,
      email,
      firstName,
      gender,
      lastName,
      password,
    } = toCamel(data);

    const { appConfig, translator } = config;

    const translations = translator({ req });

    const verifyToken = uuid();

    const link = getVerifyEmailUrl({
      config: appConfig.http.client,
      email,
      token: verifyToken,
    });

    const mailOptions = {
      from: appConfig.repo.mail.from,
      html: translations.verifyYourEmailHtml(link),
      subject: translations.verifyYourEmailSubject(),
      text: translations.verifyYourEmailText(link),
      to: email,
    };
    
    // @TODO: https://stackoverflow.com/questions/23798281/should-an-api-service-send-the-user-activation-email-or-the-client-application
    
    const user = await config.service.auth.register({
      bio,
      dateOfBirth,
      email,
      firstName,
      gender,
      lastName,
      mailOptions,
      password,
      verifyToken,
    });

    const visibleUserData: Partial<User> = getVisibleUserProperties(user);

    const token: string = generateToken({
      config: config.appConfig.auth.jwt,
      data: visibleUserData,
    });

    const responseData = toSnake({
      token,
      user: visibleUserData,
    });

    res.status(CREATED).json(responseData);
  });

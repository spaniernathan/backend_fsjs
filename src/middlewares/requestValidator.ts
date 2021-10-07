import { AnySchema, ValidationOptions } from 'joi';
import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

export interface IValidation {
    options?: ValidationOptions
    body?: AnySchema;
    headers?: AnySchema;
    query?: AnySchema;
    cookies?: AnySchema;
    params?: AnySchema;
}

export const validate = (settings: IValidation) => {
  let errors: any = [];
  return (req: Request, res: Response, next: NextFunction) => {
    const bodyResult = settings?.body?.validate(settings.body, {
      allowUnknown: false,
      ...settings.options,
    });
    if (bodyResult?.error) {
      errors = errors.concat(bodyResult.error.details);
    }

    const headersResult = settings?.headers?.validate(settings.headers, {
      allowUnknown: false,
      ...settings.options,
    });
    if (headersResult?.error) {
      errors = errors.concat(headersResult.error.details);
    }

    const paramsResult = settings?.params?.validate(settings.params, {
      allowUnknown: false,
      ...settings.options,
    });
    if (paramsResult?.error) {
      errors = errors.concat(paramsResult.error.details);
    }

    const queryResult = settings?.query?.validate(settings.query, {
      allowUnknown: false,
      ...settings.options,
    });
    if (queryResult?.error) {
      errors = errors.concat(queryResult.error.details);
    }

    const cookiesResult = settings?.cookies?.validate(settings.cookies, {
      allowUnknown: false,
      ...settings.options,
    });
    if (cookiesResult?.error) {
      errors = errors.concat(cookiesResult.error.details);
    }

    if (errors.length) {
      logger.info({
        errors,
        isJoi: true,
      });
      return next({
        isJoi: true,
        errors,
      });
    }

    return next();
  };
};

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Transaction } from 'sequelize';
import sequelize from '../db/connect';
import logger from '../logger';

const safeTransactionRollback = async (transaction: Transaction) => {
  try {
    if (transaction) await transaction.rollback();
  } catch (errorRollback: any) {
    logger.error('Failed to rollback transaction', { error: errorRollback.toString() });
  }
};

const restDecorator = async (
  req: Request,
  res: Response,
  handler: (request: Request, response: Response, transaction: Transaction) => any,
) => {
  const transaction = await sequelize.transaction();
  try {
    const handlerResponse = await handler(req, res, transaction);

    if (transaction) {
      if (handlerResponse.statusCode >= 400) await transaction.rollback();
      else await transaction.commit();
    }
    return handlerResponse;
  } catch (e: any) {
    logger.error('Error during request handler', { error: e.toString() });
    await safeTransactionRollback(transaction);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export default restDecorator;

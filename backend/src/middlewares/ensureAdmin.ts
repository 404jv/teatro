import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { HttpError } from "../errors/HttpError";
import { AdminsRepository } from "../repositories/AdminsRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const id = request.user_id;

  const adminsRepository = getCustomRepository(AdminsRepository);
  const admin = await adminsRepository.findOne(id);

  if (!admin) {
    throw new HttpError({
      message: 'User is not admin',
      statusCode: 401
    });
  }

  return next();
}

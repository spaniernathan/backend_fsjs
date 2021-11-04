import { omit } from 'lodash';
import { User } from '../db/models';

export const createUser = async (input: User) => {
  try {
    return await User.create({
      ...input,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const findUserByUuid = async (uuid: string) => {
  try {
    return await User.findOne({
      where: { uuid },
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return null;
    }
    return omit(user, 'password');
  } catch (error: any) {
    throw new Error(error);
  }
};

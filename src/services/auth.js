import bcrypt from 'bcrypt';
import { ContactCollection } from '../db/models/authContacts.js';
import createHttpError from 'http-errors';

export const registerContact = async (payload) => {
  const user = await ContactCollection.findOne({
    email: payload.email,
  });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await ContactCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};

export const loginContact = async (payload) => {
  const user = await ContactCollection.findOne({
    email: payload.email,
  });
  if (!user) {
    throw createHttpError(401, 'Contact not found');
  }

  const isEqual = await bcrypt.compare(payload.password, user.password);
  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }
};

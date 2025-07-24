import { loginContact, registerContact } from '../services/auth.js';

export const registerContactController = async (req, res, next) => {
  const contact = await registerContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: contact,
  });
};

export const loginContactController = async (req, res, next) => {
  await loginContact(req.body);
};

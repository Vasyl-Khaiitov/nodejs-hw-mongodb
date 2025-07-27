import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  loginContactSchema,
  registerContactSchema,
} from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginContactController,
  logoutUserController,
  refreshUsersSessionController,
  registerContactController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerContactSchema),
  ctrlWrapper(registerContactController),
);
router.post(
  '/login',
  validateBody(loginContactSchema),
  ctrlWrapper(loginContactController),
);
router.post('/logout', ctrlWrapper(logoutUserController));
router.post('/refresh', ctrlWrapper(refreshUsersSessionController));

export default router;

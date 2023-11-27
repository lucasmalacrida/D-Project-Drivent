import Joi from 'joi';
import { BookingSchema } from '@/protocols';

export const bookingSchema = Joi.object<BookingSchema>({
  roomId: Joi.number().integer().min(1).required(),
});
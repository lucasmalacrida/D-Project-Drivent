import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';
import { bookingService } from '@/services';
import httpStatus from 'http-status';

export async function getBooking(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

    const booking = await bookingService.getBooking(userId);

    return res.status(httpStatus.OK).send({ id: booking.id, Room: booking.Room });
}

export async function postBooking(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const roomId = Number(req.body.roomId);

    const booking = await bookingService.postBooking(userId, roomId);

    return res.status(httpStatus.OK).send({ bookingId: booking.id });
}

export async function putBookingById(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const roomId = Number(req.body.roomId);

    const booking = await bookingService.putBookingById(userId, roomId);

    return res.status(httpStatus.OK).send({ bookingId: booking.id });
}
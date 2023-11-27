import { prisma } from '@/config';
import { CreateBooking } from '@/protocols';

export function createBooking({ roomId, userId }: CreateBooking) {
    return prisma.booking.create({
        data: { userId, roomId }
    });
}
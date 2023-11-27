import { CreateBooking, UpdateBooking } from '@/protocols';
import { prisma } from '@/config';

async function findByUserId(userId: number) {
    return prisma.booking.findFirst({
        where: { userId },
        include: { Room: true },
    });
}

async function createBooking({ roomId, userId }: CreateBooking) {
    return prisma.booking.create({
        data: { roomId, userId },
    });
}

async function findByRoomId(roomId: number) {
    return prisma.booking.findMany({
        where: { roomId },
        include: { Room: true },
    });
}

async function upsertBooking({ id, roomId, userId }: UpdateBooking) {
    return prisma.booking.upsert({
        where: { id },
        create: { roomId, userId },
        update: { roomId },
    });
}

export const bookingRepository = {
    createBooking,
    findByRoomId,
    findByUserId,
    upsertBooking,
};
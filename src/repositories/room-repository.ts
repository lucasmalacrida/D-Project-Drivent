import { Room } from '.prisma/client';
import { prisma } from '@/config';

async function getRoomById(roomId: number): Promise<Room> {
  return prisma.room.findFirst({
    where: { id: roomId },
  });
}

export const roomRepository = {
    getRoomById,
};
import { prisma } from '@/config';

async function getHotels() {
  return prisma.hotel.findMany();
}

async function getRoomsByHotelId(hotelId: number) {
  return prisma.hotel.findUnique({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

export const hotelRepository = {
  getHotels,
  getRoomsByHotelId,
};
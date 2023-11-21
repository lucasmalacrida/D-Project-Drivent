import { prisma } from "@/config";
import faker from "@faker-js/faker";

export async function createHotel() {
    return await prisma.hotel.create({
        data: {
            image: faker.image.imageUrl(),
            name: faker.name.middleName()
        }
    });
}

export async function createRoomByHotelId(hotelId: number) {
    return prisma.room.create({
        data: {
            name: '31415',
            capacity: 5,
            hotelId,
        }
    });
}
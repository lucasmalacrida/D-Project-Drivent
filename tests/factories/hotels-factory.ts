import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotel() {
    return prisma.hotel.create({
        data: {
            name: faker.company.companyName(),
            image: faker.image.imageUrl()
        }
    })
}

export async function createRoomWithHotelId(hotelId: number) {
    return prisma.room.create({
        data: {
            name: '31415',
            capacity: 3,
            hotelId
        }
    })
}
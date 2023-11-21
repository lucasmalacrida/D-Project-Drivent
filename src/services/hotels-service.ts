import { TicketStatus } from '@prisma/client';
import { invalidDataError, notFoundError } from '@/errors';
import { cannotListHotelsError } from '@/errors/cannot-list-hotels-error';
import { enrollmentRepository, hotelRepository, ticketsRepository } from '@/repositories';

async function validateBooking(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if (!ticket) throw notFoundError();
    if (ticket.status !== TicketStatus.PAID || ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) throw cannotListHotelsError()
}

async function getHotels(userId: number) {
    await validateBooking(userId);

    const hotels = await hotelRepository.getHotels();
    if (hotels.length === 0) throw notFoundError();

    return hotels;
}

async function getHotelsWithRooms(userId: number, hotelId: number) {
    await validateBooking(userId);

    if (!hotelId || isNaN(hotelId)) throw invalidDataError('hotelId');

    const hotelWithRooms = await hotelRepository.getRoomsByHotelId(hotelId);
    if (!hotelWithRooms) throw notFoundError();

    return hotelWithRooms;
}

export const hotelsService = {
    getHotels,
    getHotelsWithRooms,
};
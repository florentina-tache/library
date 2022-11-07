const getReturnDate = (rentDate) => new Date(rentDate.getTime() + 12096e5)// 12096e5 is 2 weeks in milliseconds

const getPenalty = (basePrice) => basePrice * 0.01;

const getTotalPrice = ({ returnDate, basePrice, penalty }) => {
    if (Date.now() < returnDate.getTime()) {
        return basePrice
    }
    const noLateDays = parseInt((Date.now() - returnDate.getTime()) / (1000 * 60 * 60 * 24), 10);
    return basePrice + penalty * noLateDays
}

export const bookFactory = (book) => {
    if (!book.isRented) return book;
    const { rentDate, basePrice } = book.rentDetails;
    const penalty = getPenalty(basePrice);
    const returnDate = getReturnDate(rentDate);
    // console.log("d", book.rentDetails)
    return {
        ...book,
        rentDetails: { ...book.rentDetails, totalPrice: getTotalPrice({ returnDate, basePrice, penalty }) },
    }
};
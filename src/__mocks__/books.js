const { v4: uuidv4 } = require('uuid');

export const books = [
    {
        id: uuidv4(),
        name: "Eloquent JavaScript, Third Edition",
        isbn: "9781593279509",
        isRented: true,
        rentDetails: {
            basePrice: 2,
            rentedBy: "Ana Popescu",
            rentDate: new Date('2022-10-05'),
        }
    },
    {
        id: uuidv4(),
        name: "Practical Modern JavaScript",
        isbn: "9781491943533",
        isRented: false,
        rentDetails: {
            basePrice: 3,
        }
    },
    {
        id: uuidv4(),
        name: "Speaking JavaScript",
        isbn: "9781449365035",
        isRented: true,
        rentDetails: {
            basePrice: 5,
            rentedBy: "Ion Stanciu",
            rentDate: new Date('2022-11-06'),
        }
    },
    {
        id: uuidv4(),
        name: "Speaking JavaScript",
        isbn: "9781449365035",
        isRented: false,
        rentDetails: {
            basePrice: 5,
        }
    },
];

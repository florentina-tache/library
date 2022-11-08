import React from "react";
import moment from "moment";

import "./Book.css";

const Book = ({ isRented, isbn, name, rentDetails }) => {
    const { basePrice, rentedBy, rentDate, totalPrice } = rentDetails;
    return (
        <div className="bookContainer">
            <div>
                <span className="label">Is rented: </span>
                {isRented.toString()}
            </div>
            <div>
                <span className="label">ISBN: </span>
                {isbn}
            </div>
            <div>
                <span className="label">Name: </span>
                {name}
            </div>
            <div>
                <span className="label">Base Price: </span>
                {basePrice}
            </div>
            {isRented && (
                <>
                    <div>
                        <span className="label">Rented by: </span>
                        {rentedBy}
                    </div>
                    <div>
                        <span className="label">Rent date: </span>
                        {moment(rentDate).format('MM/DD/YYYY')}
                    </div>
                    <div>
                        <span className="label">Total price: </span>
                        {totalPrice}
                    </div>
                </>
            )}
        </div>
    );
};

export default Book;

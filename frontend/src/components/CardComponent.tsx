import React from "react";

interface Card {
    id: string;
    name: string;
    email: string;
}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
    return (
        <div className="text-2xl font-bold text-gray-800 text-center w-full">
            <div className="text-sm text-gray-600">ID: {card.id}</div>
            <div className="text-lg font-semibold text-gray-800">{card.name}</div>
            <div className="text-md text-gray-700">{card.email}</div>
        </div>
    );
};

export default CardComponent;
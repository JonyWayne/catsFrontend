import React from "react";
import { Cat as CatType } from "../types";
import {
  formatDate,
  getCatImageUrl,
  getCatCardColor,
  catAgeInHumanYears,
} from "../utils/catUtils";
import { Calendar, User, Palette } from "lucide-react";

interface CatCardProps {
  cat: CatType;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  const { age, color, createdAt, name, id } = cat;
  const imageUrl = getCatImageUrl(cat);
  const cardColorClass = getCatCardColor(color);
  const humanYears = catAgeInHumanYears(age);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className={`h-2 ${cardColorClass.split(" ")[0]}`}></div>
      <div className="relative h-60 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name} the cat`}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 m-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium">
          ID: {id}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>

        <div className="space-y-3 mt-4">
          <div className="flex items-center text-gray-700">
            <User className="h-5 w-5 mr-2 text-purple-600" />
            <span>{age} years old</span>
            <span className="ml-1 text-sm text-gray-500">
              (~{humanYears} in human years)
            </span>
          </div>

          <div className="flex items-center text-gray-700">
            <Palette className="h-5 w-5 mr-2 text-pink-600" />
            <div className="flex items-center">
              <span>Color: {color}</span>
              <div
                className={`ml-2 w-4 h-4 rounded-full ${
                  cardColorClass.split(" ")[0]
                }`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            <span>Added on {formatDate(createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;

import React from "react";
import { Cat } from "../types";
import CatCard from "./CatCard";

interface CatListProps {
  cats: Cat[];
}

const CatList: React.FC<CatListProps> = ({ cats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CatList;

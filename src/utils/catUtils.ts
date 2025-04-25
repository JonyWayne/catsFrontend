import { Cat } from "../types";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const getCatImageUrl = (cat: Cat): string => {
  const colorMap: Record<string, string> = {
    black:
      "https://img.freepik.com/free-vector/cute-black-cat-cartoon-vector-icon-illustration_138676-6259.jpg",
    white:
      "https://img.freepik.com/free-vector/cute-white-cat-playing-yarn-ball-cartoon-vector-icon-illustration_138676-5581.jpg",
    orange:
      "https://img.freepik.com/free-vector/cute-cat-sitting-cartoon-vector-icon-illustration_138676-5553.jpg",
    gray: "https://img.freepik.com/free-vector/cute-cat-reading-book-cartoon-vector-icon-illustration_138676-5612.jpg",
    calico:
      "https://img.freepik.com/free-vector/cute-cat-sleeping-cartoon-vector-icon-illustration_138676-5607.jpg",
    tabby:
      "https://img.freepik.com/free-vector/cute-cat-waving-hand-cartoon-vector-icon-illustration_138676-5620.jpg",
    siamese:
      "https://img.freepik.com/free-vector/cute-siamese-cat-cartoon-vector-icon-illustration_138676-6265.jpg",
    string:
      "https://img.freepik.com/free-vector/cute-siamese-cat-cartoon-vector-icon-illustration_138676-6265.jpg",
    default:
      "https://img.freepik.com/free-vector/cute-cat-eating-fish-cartoon-vector-icon-illustration_138676-5604.jpg",
  };

  return colorMap[cat.color.toLowerCase()] || colorMap.default;
};

export const getCatCardColor = (color: string): string => {
  const colorMap: Record<string, string> = {
    black: "bg-gray-800 text-white",
    "green-red": "bg-gradient-to-r from-green-500 to-red-500 text-white",
    string: "bg-purple-500 text-white",
    default: "bg-blue-500 text-white",
  };

  return colorMap[color.toLowerCase()] || colorMap.default;
};

// Function to get cat age in human years (approximate calculation)
export const catAgeInHumanYears = (age: number): number => {
  if (age <= 0) return 0;
  if (age === 1) return 15;
  if (age === 2) return 24;
  return 24 + (age - 2) * 4;
};

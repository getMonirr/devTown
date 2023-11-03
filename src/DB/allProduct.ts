import img1 from "../assets/product/image-1.webp";
import img2 from "../assets/product/image-2.webp";
import img3 from "../assets/product/image-3.webp";
import img4 from "../assets/product/image-4.webp";
import img5 from "../assets/product/image-5.webp";
import img6 from "../assets/product/image-6.webp";
import img7 from "../assets/product/image-7.webp";
import img8 from "../assets/product/image-8.webp";
import img9 from "../assets/product/image-9.webp";

interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const products: product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    category: "Headphones",
    image: img1,
    price: 20,
  },
  {
    id: 2,
    title: "Apple Watch Series 6",
    description:
      "The latest Apple Watch with advanced health and fitness features.",
    category: "Electronics",
    image: img2,
    price: 120,
  },
  {
    id: 3,
    title: "Bluetooth Headset",
    description: "Bluetooth headset with crystal-clear sound quality.",
    category: "Bluetooth",
    image: img3,
    price: 70,
  },
  {
    id: 4,
    title: "Apple Watch SE",
    description: "Affordable Apple Watch for staying connected and active.",
    category: "AppleWatch",
    image: img4,
    price: 10,
  },
  {
    id: 5,
    title: "Gaming Headset",
    description:
      "Immersive gaming headset for an exceptional gaming experience.",
    category: "Headphones",
    image: img5,
    price: 750,
  },
  {
    id: 6,
    title: "Apple Watch Series 7",
    description: "The next-generation Apple Watch with a larger display.",
    category: "AppleWatchSeries",
    image: img6,
    price: 20,
  },
  {
    id: 7,
    title: "In-Ear Headphones",
    description: "Comfortable in-ear headphones for on-the-go listening.",
    category: "Headphones",
    image: img7,
    price: 30,
  },
  {
    id: 8,
    title: "Apple Watch Series 8",
    description: "The future-ready Apple Watch with innovative features.",
    category: "AppleWatchSeries",
    image: img8,
    price: 60,
  },
  {
    id: 9,
    title: "Over-Ear Headphones",
    description: "Premium over-ear headphones for audiophiles.",
    category: "Headphones",
    image: img9,
    price: 100,
  },
  {
    id: 10,
    title: "Apple Watch Series 9",
    description: "Cutting-edge Apple Watch for a connected lifestyle.",
    category: "AppleWatchSeries",
    image: img1,
    price: 80,
  },
  {
    id: 11,
    title: "Noise-Cancelling Headphones",
    description: "Headphones with active noise-cancellation technology.",
    category: "Headphones",
    image: img9,
    price: 90,
  },
  {
    id: 12,
    title: "Apple Watch Series 10",
    description: "The flagship Apple Watch with all the latest features.",
    category: "AppleWatch",
    image: img1,
    price: 100,
  },
  {
    id: 13,
    title: "Sport Earbuds",
    description: "Sweat-resistant earbuds for sports and workouts.",
    category: "Earbuds",
    image: img2,
    price: 120,
  },
  {
    id: 14,
    title: "Apple Watch Pro",
    description: "Professional-grade Apple Watch for fitness and productivity.",
    category: "AppleWatch",
    image: img3,
    price: 160,
  },
  {
    id: 15,
    title: "On-Ear Headphones",
    description: "On-ear headphones with exceptional sound quality.",
    category: "Earbuds",
    image: img4,
    price: 200,
  },
  {
    id: 16,
    title: "Apple Watch Sport",
    description: "A sporty Apple Watch for active lifestyles.",
    category: "AppleWatch",
    image: img5,
    price: 400,
  },
  {
    id: 17,
    title: "True Wireless Earbuds",
    description: "Wireless earbuds for ultimate freedom of movement.",
    category: "Earbuds",
    image: img6,
    price: 500,
  },
  {
    id: 18,
    title: "Apple Watch Mini",
    description: "Compact Apple Watch for those on the go.",
    category: "AppleWatch",
    image: img7,
    price: 600,
  },
  {
    id: 19,
    title: "DJ Headphones",
    description: "Headphones designed for professional DJs and musicians.",
    category: "Electronics",
    image: img8,
    price: 700,
  },
  {
    id: 20,
    title: "Apple Watch Lite",
    description: "A budget-friendly Apple Watch for essential features.",
    category: "Electronics",
    image: img9,
    price: 800,
  },
];

export default products;

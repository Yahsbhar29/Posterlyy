export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Abstract Geometric Design",
    description: "Vibrant geometric patterns that add a modern touch to any space. Perfect for living rooms, offices, or creative spaces.",
    price: 50,
    image: "/lovable-uploads/0b475658-5467-4835-9309-a3d539b3c0a3.png",
    category: "Abstract"
  },
  {
    id: 2,
    title: "Serene Forest View",
    description: "Peaceful forest scene that brings tranquility to your space. This high-quality print captures the beauty of nature.",
    price: 50,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    category: "Nature"
  },
  {
    id: 3,
    title: "Digital Matrix",
    description: "Inspired by the iconic Matrix movie, this poster features digital code rain effect that tech enthusiasts will love.",
    price: 50,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "Digital"
  },
  {
    id: 4,
    title: "Vibrant Floral Arrangement",
    description: "Brighten up any room with this colorful floral poster that brings life and energy to your walls.",
    price: 50,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Floral"
  },
  {
    id: 5,
    title: "Minimalist Architecture",
    description: "Clean lines and geometric shapes make this architectural poster perfect for modern interior designs.",
    price: 50,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Architecture"
  },
  {
    id: 6,
    title: "Neon City Nights",
    description: "Capture the energy of urban nightlife with this vibrant neon cityscape poster.",
    price: 50,
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
    category: "Urban"
  },
  {
    id: 7,
    title: "Motivational Typography",
    description: "Start each day inspired with this beautifully designed motivational quote poster.",
    price: 50,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    category: "Typography"
  },
  {
    id: 8,
    title: "Vintage World Map",
    description: "Detailed vintage world map that adds a touch of sophistication and adventure to your space.",
    price: 50,
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
    category: "Vintage"
  }
].map(product => ({ ...product, price: 50 }));

import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "shirts",
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    productCount: 245,
  },
  {
    id: "trousers",
    name: "Trousers",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    productCount: 180,
  },
  {
    id: "jackets",
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    productCount: 120,
  },
  {
    id: "tshirts",
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    productCount: 320,
  },
  {
    id: "jeans",
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    productCount: 156,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    productCount: 89,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Cotton Slim Fit Shirt",
    brand: "Raymond",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.5,
    reviewCount: 2847,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=1000&fit=crop",
    ],
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"],
    description: "Premium quality cotton shirt with a slim fit design. Perfect for formal and semi-formal occasions.",
    inStock: true,
  },
  {
    id: "2",
    name: "Casual Denim Jacket",
    brand: "Levi's",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.7,
    reviewCount: 1523,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop",
    category: "jackets",
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Black"],
    description: "Classic denim jacket with a modern twist. Versatile and stylish for any casual occasion.",
    inStock: true,
  },
  {
    id: "3",
    name: "Slim Fit Chinos",
    brand: "Allen Solly",
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.3,
    reviewCount: 987,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
    category: "trousers",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive"],
    description: "Comfortable slim fit chinos made from premium cotton blend. Ideal for office and casual wear.",
    inStock: true,
  },
  {
    id: "4",
    name: "Graphic Print T-Shirt",
    brand: "Roadster",
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.2,
    reviewCount: 3421,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
    category: "tshirts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    description: "Trendy graphic print t-shirt made from 100% cotton. Soft, comfortable, and stylish.",
    inStock: true,
  },
  {
    id: "5",
    name: "Stretchable Skinny Jeans",
    brand: "Wrangler",
    price: 1899,
    originalPrice: 2999,
    discount: 37,
    rating: 4.4,
    reviewCount: 2156,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
    category: "jeans",
    sizes: ["28", "30", "32", "34"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    description: "Stretchable skinny fit jeans with excellent comfort and style. Perfect for everyday wear.",
    inStock: true,
  },
  {
    id: "6",
    name: "Leather Belt",
    brand: "Woodland",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.6,
    reviewCount: 876,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
    category: "accessories",
    sizes: ["32", "34", "36", "38"],
    colors: ["Brown", "Black"],
    description: "Genuine leather belt with classic buckle design. Durable and elegant.",
    inStock: true,
  },
  {
    id: "7",
    name: "Formal White Shirt",
    brand: "Van Heusen",
    price: 1799,
    originalPrice: 2799,
    discount: 36,
    rating: 4.5,
    reviewCount: 1834,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=600&fit=crop",
    category: "shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    description: "Classic formal white shirt with wrinkle-free fabric. Perfect for business meetings.",
    inStock: true,
  },
  {
    id: "8",
    name: "Bomber Jacket",
    brand: "H&M",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    rating: 4.4,
    reviewCount: 967,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
    category: "jackets",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "Olive"],
    description: "Trendy bomber jacket with ribbed cuffs and hem. Lightweight and stylish.",
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.brand.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
};

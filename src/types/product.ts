// src/types/types.ts
export interface CategoryDetailProps {
    productsCategories: Category[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    products: Product[];
}

export interface Product {
    id: string;
    name: string;
    image: string[];
    rating: number;
    ratingText: string;
    price: number;
    rented: number;
    link: string;
    reviews: Reviews[];
}

export interface Reviews {
    id: string;
    category: string;
    data: {
        user: string;
        rating: number;
        comment: string;
    }[];
}

export interface CartItems {
    id: string;
    productId: string;
    name: string;
    image: string; // satu gambar aja cukup untuk di cart
    price: number;
    quantity: number;
    subtotal: number; // auto: price * quantity
    categoryId: string;
    categoryName: string;
  };
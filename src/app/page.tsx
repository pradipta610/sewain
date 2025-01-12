import { Category } from "@/components/category/index";
import { Product } from "@/components/product/index";

export default function Home() {
  const products = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kamera DSLR",
      rating: 4.5,
      ratingText: "Sangat Bagus",
      price: "Rp 250.000",
      rented: 20,
      link: "/"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Drone",
      rating: 4.8,
      ratingText: "Terbaik",
      price: "Rp 500.000",
      rented: 15,
      link: "/"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Laptop Gaming",
      rating: 4.3,
      ratingText: "Bagus",
      price: "Rp 1.500.000",
      rented: 10,
      link: "/"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tripod Kamera",
      rating: 4.7,
      ratingText: "Sangat Memuaskan",
      price: "Rp 100.000",
      rented: 25,
      link: "/"
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lampu Studio",
      rating: 4.6,
      ratingText: "Cerah",
      price: "Rp 200.000",
      rented: 18,
      link: "/"
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mikrofon Podcast",
      rating: 4.9,
      ratingText: "Kualitas Suara Bagus",
      price: "Rp 300.000",
      rented: 22,
      link: "/"
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Smartphone Gimbal",
      rating: 4.4,
      ratingText: "Stabil",
      price: "Rp 250.000",
      rented: 12,
      link: "/"
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Action Camera",
      rating: 4.7,
      ratingText: "Cocok untuk Outdoor",
      price: "Rp 450.000",
      rented: 19,
      link: "/"
    },
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Monitor 4K",
      rating: 4.8,
      ratingText: "Super Jernih",
      price: "Rp 800.000",
      rented: 8,
      link: "/"
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Projector",
      rating: 4.5,
      ratingText: "Tajam",
      price: "Rp 600.000",
      rented: 17,
      link: "/"
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Printer Laser",
      rating: 4.2,
      ratingText: "Ekonomis",
      price: "Rp 550.000",
      rented: 9,
      link: "/"
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tablet Desain",
      rating: 4.8,
      ratingText: "Sangat Responsif",
      price: "Rp 1.000.000",
      rented: 6,
      link: "/"
    },
  ];

  const category = [
    {
      "id": "1",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Kamera DSLR",
      "price": "Rp 250.000",
      "quantity": 20,
      "link": "/product/1"
    },
    {
      "id": "2",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Drone",
      "price": "Rp 500.000",
      "quantity": 15,
      "link": "/product/2"
    },
    {
      "id": "3",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Laptop Gaming",
      "price": "Rp 1.500.000",
      "quantity": 10,
      "link": "/product/3"
    },
    {
      "id": "4",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Tripod Kamera",
      "price": "Rp 100.000",
      "quantity": 25,
      "link": "/product/4"
    },
    {
      "id": "5",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Lampu Studio",
      "price": "Rp 200.000",
      "quantity": 18,
      "link": "/product/5"
    },
    {
      "id": "6",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Mikrofon Podcast",
      "price": "Rp 300.000",
      "quantity": 22,
      "link": "/product/6"
    },
    {
      "id": "7",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Smartphone Gimbal",
      "price": "Rp 250.000",
      "quantity": 12,
      "link": "/product/7"
    },
    {
      "id": "8",
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Action Camera",
      "price": "Rp 450.000",
      "quantity": 19,
      "link": "/product/8"
    }
  ];
  return (
    <>
      <Category categories={category} />
      <Product products={products} />
    </>
  );
}

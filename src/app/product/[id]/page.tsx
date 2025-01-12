import { ProductDetail } from "@/components/product/detail-product";

export default function Home() {
  const product = {
      id: "1",
      image: "https://via.placeholder.com/150",
      title: "Kamera DSLR",
      rating: 4.5,
      ratingText: "Sangat Bagus",
      price: "Rp 250.000",
      rented: 20,
      link: "/product/1"
  };
  return (
    <>
    <ProductDetail productdetail={product}/>
    </>
  );
}

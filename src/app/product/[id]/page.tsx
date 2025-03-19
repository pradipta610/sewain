import { ProductDetail } from "@/components/product/detail-product";
import { productsCategories } from "@/data/categoriesData";

export default function Home() {
  return (
    <>
    <ProductDetail productsCategories={productsCategories}/>
    </>
  );
}

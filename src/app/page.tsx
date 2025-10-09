import { Category } from "@/components/category/index";
import { HeroSection } from "@/components/homepage/hero-section";
import { Product } from "@/components/product/index";
import { productsCategories } from "@/data/categoriesData";

export default function Home() {

  return (
    <>
    <HeroSection/>
      <Category productsCategories={productsCategories} />
      <Product productsCategories={productsCategories} />
    </>
  );
}

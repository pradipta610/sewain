import { CategoryDetail } from "@/components/category/detail-category";
import { productsCategories } from "@/data/categoriesData";
export default function CategoriesProduct() {
  
  return (
    <>
    <CategoryDetail productsCategories={productsCategories}/>
    </>
  );
}

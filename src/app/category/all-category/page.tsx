import { AllCategory } from "@/components/category/all-category";
import { productsCategories } from "@/data/categoriesData";
export default function CategoriesProduct() {

    return (
        <>
            <AllCategory productsCategories={productsCategories} />
        </>
    );
}

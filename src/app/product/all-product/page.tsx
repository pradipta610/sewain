import { AllProduct } from "@/components/product/all-product";
import { productsCategories } from "@/data/categoriesData";

export default function Home() {
    return (
        <>
            <AllProduct productsCategories={productsCategories} />
        </>
    );
}

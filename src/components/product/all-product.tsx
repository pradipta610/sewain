// components/Product.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { CategoryDetailProps } from "@/types/product";


export function AllProduct({ productsCategories }: CategoryDetailProps) {
    const backgroundImage = productsCategories.flatMap(category => category.products).flatMap(product => product.image);
    console.log("this is image mwehehe", backgroundImage[0])
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16">
            <div className="relative w-full h-[200px] overflow-hidden rounded-lg shadow-md mb-20">
                    <Image
                        src={backgroundImage[0]}
                        alt="all category sewain"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                            All Products
                        </h2>
                    </div>
                </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {productsCategories?.flatMap(category => category.products).map(product => (
                    <Card key={product.id} className="shadow-sm hover:shadow-md transition">
                        <Link href={product.link}>
                            <CardHeader className="p-0">
                                <Image
                                    src={product.image[0]}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className="w-full h-32 object-cover rounded-t"
                                />
                            </CardHeader>
                            <CardContent className="mt-4 px-2">
                                <span className="font-medium text-gray-800">{product.name}</span>
                                <div className="flex items-center mt-2 text-sm justify-between">
                                    <span className="font-medium text-gray-800">{product.rating}</span>
                                    <span className="ml-2 text-gray-500">{product.ratingText}</span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <span className="font-semibold text-gray-800">{product.price}</span>
                                    <span>{product.rented}x disewa</span>
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

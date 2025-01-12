// components/Product.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
    products: {
        id: string;
        image: string;
        title: string;
        rating: number;
        ratingText: string;
        price: string;
        rented: number;
        link: string;
    }[];
}

export function Product({ products }: ProductProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16">
            <h2 className="mb-6 text-lg sm:text-xl lg:text-2xl font-bold">
                Rekomendasi Produk
                <Link href="/more" className="ml-4 text-sm text-red-600 hover:underline">
                    Muat Lainnya
                </Link>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {products.map((product) => (
                    <Card key={product.id} className="shadow-sm hover:shadow-md transition">
                        <Link href={product.link}>
                            <CardHeader className="p-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={100}
                                    height={100}
                                    className="w-full h-32 object-cover rounded-t"
                                />
                            </CardHeader>
                            <CardContent className="mt-4 px-2">
                                <span className="font-medium text-gray-800">{product.title}</span>
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

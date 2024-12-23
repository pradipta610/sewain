import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image";

interface CategoryProps {
    categories: {
        id: string;
        image: string;
        title: string;
        price: string;
        quantity: number;
        link: string;
    }[];
}

export function Category({ categories }: CategoryProps) {
    return (
        <>
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16">
                <h2 className="mb-6 text-lg sm:text-xl lg:text-2xl font-bold">
                    Kategori Produk Yang Ada
                    <Link href="/more" className="ml-4 text-sm text-red-600 hover:underline">
                        Muat Lainnya
                    </Link>
                </h2>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <Card key={category.id} className="shadow-sm hover:shadow-md transition rounded-lg">
                            <Link href={category.link} className="p-4 flex items-center">
                                <div className="w-1/3 h-20 overflow-hidden rounded-lg">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-32 object-cover rounded-t"
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="text-base font-semibold text-gray-800 truncate">
                                        {category.title}
                                    </div>
                                    <div className="mt-2 text-sm font-medium text-gray-800">
                                        {category.price}
                                    </div>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="block md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16">
                <h2 className="mb-6 text-lg sm:text-xl lg:text-2xl font-bold">
                    Kategori Produk Yang Ada
                    <Link href="/more" className="ml-4 text-sm text-red-600 hover:underline">
                        Muat Lainnya
                    </Link>
                </h2>
                <ScrollArea className="w-96 whitespace-nowrap rounded-md hover:shadow-md transition">
                    <div className="flex w-max space-x-4 p-0">
                        {categories.map((category) => (
                            <Card key={category.id} className="shadow-sm hover:shadow-md w-40 transition">
                                <Link href={category.link}>
                                    <CardHeader className="p-0">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className=" w-full p-0 h-24 object-cover rounded-t"
                                        />
                                    </CardHeader>
                                    <CardContent>
                                        <span className="font-medium text-gray-800">{category.title}</span>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea >
            </div >
        </>

    );
}


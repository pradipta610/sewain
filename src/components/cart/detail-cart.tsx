import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// import Link from "next/link";
import {CartItems} from "@/types/product";

export function DetailCart({ cartItems }: { cartItems: CartItems[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="shadow-sm hover:shadow-md transition">
            <CardHeader className="p-0">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-32 object-cover rounded-t"
              />
            </CardHeader>
            <CardContent className="mt-4 px-2">
              <span className="font-medium text-gray-800">{item.name}</span>
              <div className="flex items-center mt-2 text-sm justify-between">
                <span className="font-medium text-gray-800">Price: {item.price}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


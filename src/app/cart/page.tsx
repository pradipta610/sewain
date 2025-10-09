import { DetailCart } from "@/components/cart/detail-cart";
import {cartItems} from "@/data/categoriesData";

export default function Cart() {
  return (
    <>
        <DetailCart cartItems ={cartItems} />
    </>
  );
}
import React from "react";
import { getproducts } from "@/app/actions/product.action";
import ProductGridSystem from "@/components/products-comps/ProductGridSystem";
export default async function Pageproduct() {
  const { data: products } = await getproducts();

   
  
  return (
    <>
      <div className="container mx-auto w-[90%]">
        <ProductGridSystem products={products} />
      </div>
    </>
  );
}

import { getProductDetails } from "@/app/actions/product.action";
import ProductDetails from "@/components/products-comps/ProductDetails";
import React from "react";

export default async function productDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const {data :Productdetails}=await getProductDetails(id);
    console.log(Productdetails,"server id");

  return <>

    <ProductDetails Productdetails={Productdetails}/>
  </>;
}

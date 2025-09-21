import React, { use } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getCategories } from "@/app/actions/categories.action";
import { log } from "console";
import { getAllBrand } from "@/app/actions/brand.action";
export default async function Brand() {

     const response=await getAllBrand();
     console.log(response,"brand");
     

   return (
    < >
      {response?.data.data.map((bra:any) => (
        <Card key={bra._id} className="hover:shadow-xl cursor-pointer hover:text-green-500 duration-500 hover:shadow-green-300 border-0" >
          <CardContent>
            <div className="w-full relative h-[250px]">
              <Image
                src={bra.image}
                alt="image error"
                fill
                sizes="(max-width:768px) 100vw ,(max-width:1200px) 50vw , 25vw "
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold text-2xl ">{bra.name}</p>
          </CardFooter>
        </Card>
      ))}

    </>
  );
}

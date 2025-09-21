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
export default async function ProductCategories() {
  const response = await getCategories();

  console.log(response);

  return (
    < >
      {response?.data.map((cat:any) => (
        <Card key={cat._id} className="hover:shadow-lg cursor-pointer duration-500 hover:shadow-green-300 border-0" >
          <CardContent>
            <div className="w-full relative h-[250px]">
              <Image
                src={cat.image}
                alt="image error"
                fill
                sizes="(max-width:768px) 100vw ,(max-width:1200px) 50vw , 25vw "
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold hover:text-green-500 ">{cat.name}</p>
          </CardFooter>
        </Card>
      ))}

    </>
  );
}

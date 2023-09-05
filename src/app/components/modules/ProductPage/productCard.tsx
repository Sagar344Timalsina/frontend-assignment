"use client";
import { add } from "@/app/store/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";



const imageLoader = ({ src, width, quality }: any) => {
  return `https://fakestoreapi.com/${src}?w=${width}&q=${quality || 75}`
}

const ProductCard = ({ cards }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddProducts = ({ id, title, image, price }: { id: number, title: string, image: string, price: number }) => {
    dispatch(add(
      {
        id,
        title,
        price,
        image,
        quantity: 1
      }
    ));
    
  }

  console.log(cards)

  return (
    <main className="flex gap-8 flex-wrap">

      {
        cards && cards?.map((card: any) => (
          <div key={card.id} className="card bg-gray-100 h-72 w-64 rounded-lg overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-out " >
            <section onClick={() => router.push(`/products/${card.id}`)} className="w-[200px] h-[180px] mx-auto flex items-center justify-center">
              <Image
                src={card.image}
                alt="Hello"
                width={160}
                height={100}
                quality={50}

                loading="lazy"
                className=" rounded-t-lg rounded-b-md bg-blend-multiply max-h-[160px] object-contain"
              />
            </section>
            <section className="px-6 py-4">
              <div>{`${card?.title.substring(0, 20)} .....`}</div>
              <div>StarIcon</div>
              <div className="flex justify-between">
                <span>$ {card?.price}</span>
                <span onClick={() => handleAddProducts(card)}>+</span>
              </div>
            </section>
          </div>
        ))

      }
    </main>
  );
};

export default ProductCard;

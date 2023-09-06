"use client";
import { add } from "@/app/store/cartSlice";
import showNotify from "@/app/utils/notify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CardProduct = ({ cards }: any) => {
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
      },

    ));
    showNotify('success', "Successfully added to cart")

  }

  return (
    <main className="flex gap-8 flex-wrap">

      {
        cards && cards?.map((card: any) => (
          <div key={card.id} className="card bg-gray-100 h-[22rem] w-64 rounded-lg overflow-hidden cursor-pointer hover:scale-105 duration-150 ease-out " >
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
            <section className="px-6 py-4 flex flex-col gap-2">
              <div className="text-xl font-poppins h-16">{`${card?.title.substring(0, 20)} .....`}</div>
              <div className="flex gap-4 items-center" ><StarIcon className="text-yellow-500"/><span className="text-base font-poppins font-semibold">{card?.rating?.rate}</span></div>
              <div className="flex justify-between">
                <span className="font-montserrat text-lg font-semibold">$ {card?.price}</span>
                <span onClick={() => handleAddProducts(card)}><AddCircleIcon /></span>
              </div>
            </section>
          </div>
        ))

      }
    </main>
  );
}

export default CardProduct
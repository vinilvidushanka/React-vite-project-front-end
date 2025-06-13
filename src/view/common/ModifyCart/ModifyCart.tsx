import {useEffect, useState} from "react";
import type {CartItem} from "../../../model/CartItem.ts";
interface ModifyCartProps {
    data:any
}
export const itemsList:CartItem[] = [];
export function ModifyCart({data}:ModifyCartProps) {
    const [itemCount, setItemCount] = useState(1);

    /*useEffect(()=>{
        const existingItem=itemsList.find(item =>item.product.id===data.product.id)

        if (existingItem){
            existingItem.itemCount=itemCount
        }else {
            itemsList.push({product:data,itemCount:itemCount});
        }

        itemsList.push({product:data,itemCount:itemCount});
        console.log(itemsList)
    },[itemCount,data])*/
    useEffect(() => {

        const  existingItem = itemsList.find(item => item.product.id === data.product.id)

        if (existingItem) {
            existingItem.itemCount = itemCount
        }else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount
            })
        }
    }, [itemCount,data])
    console.log(itemsList)

    const decreaseItemCount = () => {
        setItemCount(preValue =>
            preValue > 1
                ? preValue - 1
                : (alert("Item count cannot be less than 1"), preValue)
        );
    };

    const increaseItemCount = () => {
        setItemCount(preValue => preValue + 1);
    };

    return (
        <div className="w-full mt-2 flex items-center justify-center gap-2 text-xs">
            <button
                className="w-6 h-6 flex items-center justify-center bg-white text-blue-00 border border-white rounded-full hover:bg-blue-950 hover:text-white transition"
                onClick={decreaseItemCount}
            >
                −
            </button>
            <span className="min-w-[24px] text-center font-semibold text-black">
                {itemCount}
            </span>
            <button
                className="w-6 h-6 flex items-center justify-center bg-white text-blue-500 border border-white rounded-full hover:bg-blue-950 hover:text-white transition"
                onClick={increaseItemCount}
            >
                +
            </button>
        </div>
    );
}


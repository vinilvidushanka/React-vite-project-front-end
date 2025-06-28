// import type {CartItem} from "../../../model/CartItem.ts";
//
// interface ShoppingCartProps{
//     itemsList:CartItem[];
// }
// export function ShoppingCart({itemsList}:ShoppingCartProps) {
//     return (
//         <div className="flex justify-center items-center px-4">
//             <div className="w-full max-w-screen-xl border border-blue-400">
//                 <table className="min-w-full border-collapse">
//                     <thead>
//                         <tr className="bg-blue-950 text-white">
//                            <th className="text-xs font-semibold border-blue-600 px-2">ID</th>
//                            <th className="text-xs font-semibold border-blue-600 px-2">Name</th>
//                            <th className="text-xs font-semibold border-blue-600 px-2">Unit Price</th>
//                            <th className="text-xs font-semibold border-blue-600 px-2">Quantity</th>
//                            <th className="text-xs font-semibold border-blue-600 px-2">Total Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             itemsList.length===0 ? (
//                                 <tr>
//                                     <td colSpan={5} className="border-blue-300 border p-2 bg-blue-100 ">
//                                         <p className="text-center text-sm text-black">No Items to display</p>
//                                     </td>
//                                 </tr>
//                             ):(
//                                 itemsList.map((item,index)=>(
//                                     <tr key={item.product.id} className={`${index % 2=== 0 ? "bg-blue-100" : "bg-blue-200"} hover:bg-blue-300 border border-blue-300`}>
//                                         <td>{item.product.id}</td>
//                                         <td>{item.product.name}</td>
//                                         <td>{item.product.price}{item.product.currency}</td>
//                                         <td>{item.itemCount}</td>
//                                         <td>{item.product.price*item.itemCount}</td>
//                                     </tr>
//                                 ))
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

/*
import type { CartItem } from "../../../model/CartItem.ts";

type CartItem = {
    product: {
        id: number;
        name: string;
        price: number;
        currency: string;
        image: string;
    };
    itemCount: number;
};

interface ShoppingCartProps {
    itemsList: CartItem[];
}

const images:Record<string, string>=import.meta.glob('../../../assets/products/!*', {eager: true , import: 'default'});

export function ShoppingCart({ itemsList }: ShoppingCartProps) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-300">
                <div className="bg-blue-950 text-white py-4 px-6 text-center text-xl font-bold">
                    Shopping Cart
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-sm text-left">
                        <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="px-4 py-3 font-semibold">ID</th>
                            <th className="px-4 py-3 font-semibold">Image</th>
                            <th className="px-4 py-3 font-semibold">Name</th>
                            <th className="px-4 py-3 font-semibold">Unit Price</th>
                            <th className="px-4 py-3 font-semibold">Quantity</th>
                            <th className="px-4 py-3 font-semibold">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            itemsList.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center px-6 py-4 text-blue-800 bg-blue-100">
                                        No Items to display
                                    </td>
                                </tr>
                            ) : (
                                itemsList.map((item, index) => (
                                    <tr
                                        key={item.product.id}
                                        className={`${
                                            index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                        } hover:bg-blue-200 transition-colors duration-200`}
                                    >
                                        <td className="px-4 py-3 border-t border-blue-200">{item.product.id}</td>
                                        <td className="px-4 py-3 border-t border-blue-200">
                                            <img
                                                className="w-16 h-16 object-cover rounded-md mx-auto"
                                                src={images[`../../../assets/products/${item.product.image}`]}
                                                alt={item.product.name}
                                            />
                                        </td>

                                        <td className="px-4 py-3 border-t border-blue-200 font-semibold">{item.product.name}</td>
                                        <td className="px-4 py-3 border-t border-blue-200">
                                            {item.product.price} {item.product.currency}
                                        </td>
                                        <td className="px-4 py-3 border-t border-blue-200">{item.itemCount}</td>
                                        <td className="px-4 py-3 border-t border-blue-200 font-medium text-blue-900">
                                            {(item.product.price * item.itemCount).toFixed(2)} {item.product.currency}
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
*/

import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

/*
type CartItemType = {
    product: {
        id: number;
        name: string;
        price: number;
        currency: string;
        image: string;
    };
    itemCount: number;
};
*/

/*interface ShoppingCartProps {
    itemsList: CartItemType[];
}*/

const images: Record<string, string> = import.meta.glob(
    "../../../assets/products/*",
    { eager: true, import: "default" }
);

export function ShoppingCart() {
    // const [cartItems, setCartItems] = useState<CartItemType[]>(itemsList);



    const {items}= useSelector((state:RootState)=> state.cart)

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden border border-blue-300">
                <div className="bg-blue-950 text-white py-4 px-6 text-center text-xl font-bold">
                    Shopping Cart
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-sm text-left">
                        <thead>
                        <tr className="bg-blue-800 text-white">
                            <th className="px-4 py-3 font-semibold">ID</th>
                            <th className="px-4 py-3 font-semibold">Image</th>
                            <th className="px-4 py-3 font-semibold">Name</th>
                            <th className="px-4 py-3 font-semibold">Unit Price</th>
                            <th className="px-4 py-3 font-semibold">Quantity</th>
                            <th className="px-4 py-3 font-semibold">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center px-6 py-4 text-blue-800 bg-blue-100">
                                    No Items to display
                                </td>
                            </tr>
                        ) : (
                            items.map((item, index) => (
                                <tr
                                    key={item.product.id}
                                    className={`${
                                        index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                                    } hover:bg-blue-200 transition-colors duration-200`}
                                >
                                    <td className="px-4 py-3 border-t border-blue-200">{item.product.id}</td>
                                    <td className="px-4 py-3 border-t border-blue-200">
                                        <img
                                            className="w-16 h-16 object-cover rounded-md mx-auto"
                                            src={images[`../../../assets/products/${item.product.image}`]}
                                            alt={item.product.name}
                                        />
                                    </td>
                                    <td className="px-4 py-3 border-t border-blue-200 font-semibold">
                                        {item.product.name}
                                    </td>
                                    <td className="px-4 py-3 border-t border-blue-200">
                                        {item.product.price} {item.product.currency}
                                    </td>
                                    <td className="px-4 py-3 border-t border-blue-200">{item.itemCount}</td>
                                    <td className="px-4 py-3 border-t border-blue-200 font-medium text-blue-900">
                                        {(item.product.price * item.itemCount).toFixed(2)} {item.product.currency}
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


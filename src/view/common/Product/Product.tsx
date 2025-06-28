import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

type ProductProps={
    data:ProductData
}

const images:Record<string, string>=import.meta.glob('../../../assets/products/*', {eager: true , import: 'default'});



export function Product({data}:ProductProps) {
    // const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const item = useSelector((state:RootState)=> state.cart.items.find(cartItem=>cartItem.product.id === data.id));
    const addToCart=() =>{
        dispatch(addItemToCart(data))
        // setIsActive(true);
    }

    let image=images [`../../../assets/products/${data.image}`]
    return (
        <div className="w-auto h-auto bg-blue-300 mr-2 mb-2 p-4 flex justify-center items-center shadow-xl rounded-xl shadow-transition-transform duration-200 hover:scale-105">
            <div>
                <img className="h-[120px] w-[120px] rounded-xl"  src={image}/>
                <div className="text-center">
                    <p className="text-sm font-semibold text-black m-3">{data.name}</p>
                    <p className="text-xs text-black mb-2">{data.price}<small className="text-xs text-black mb-2 pl-1">{data.currency}</small></p>

                    {
                        item ? (
                            <ModifyCart data={{product:data}}/>

                        ):(
                            <button className="bg-white font-bold text-blue-500 text-xs px-3 py-1 rounded-full hover:bg-blue-950 hover:text-white transition cursor-pointer" onClick={addToCart}>
                                Add to Cart
                            </button>
                        )
                    }


                </div>
            </div>

        </div>
    );
}


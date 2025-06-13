import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import * as React from "react";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";
import {ShoppingCart} from "../../pages/Shopping Cart/ShoppingCart.tsx";
import {itemsList} from "../ModifyCart/ModifyCart.tsx";
export function MainContent() {
    return (
        <section>
            <div className="flex justify-center items-center min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/shopping-cart" element={<ShoppingCart  itemsList={itemsList}/>}></Route>
                </Routes>
            </div>
        </section>


    );
}
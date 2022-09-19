import React, { useState, Suspense } from "react";
//import Overlay from "react-overlay-component";
import { CartButton } from '../Cart/CartButton';
//import { Price } from '../Price/Price';
const Overlay = React.lazy(()=>import('react-overlay-component'))
const Price = React.lazy(()=>import('../Price/Price'))


export const CartButtonOverlay = ({ product }) => {
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);

    return (
    <>
    <button className="primary" onClick={() => {
                    setOverlay(true);
                }}>
            Add To Cart
            </button>
            <Suspense fallback="Loading...">
            <Overlay isOpen={isOpen} closeOverlay={closeOverlay}>
                <h2>{product.brand}</h2>
                <p>{product.description}</p>
                <Price product={product} />
                <CartButton product={product} />
                <button
                    className="danger"
                    onClick={() => {
                        setOverlay(false);
                    }}
                >
                    Close
                </button>
            </Overlay>
            </Suspense>
    </>
  );
};


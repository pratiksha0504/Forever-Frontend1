import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

    return (
        <div className='w-full max-w-md mx-auto mt-6'>
            {/* Title */}
            <div className="text-2xl mb-4">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            {/* Totals Table */}
            <div className="w-full border border-gray-200 rounded-lg px-6 py-4 text-sm space-y-4">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{currency} {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Fee</span>
                    <span>{currency} {delivery_fee}.00</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{currency} {total}.00</span>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;

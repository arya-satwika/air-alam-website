'use client'
import { payQris } from "@/app/lib/action";
import { paySnap } from "@/app/lib/paySnap";
export default function Pay() {
    async function handlePay() {
        console.log('Initiating payment...');
        const transactionDetails = {
            gross_amount: 10000,
            order_id: "222dordder-0000"
        };
        const qrisUrl = await paySnap(transactionDetails);
        console.log('QRIS URL:', qrisUrl);
    }
    return (
        <div>   
            <h1 className="font-bold text-4xl">Pay</h1>
            <button onClick={handlePay}>Pay with QRIS</button>
        </div>
    )
}

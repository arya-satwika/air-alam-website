'use client'
import { payQris } from "@/app/lib/action";
import { paySnap } from "@/app/lib/paySnap";
import { redirect } from "next/navigation";
export default function Pay() {
    async function handlePay(formData: FormData) {
        console.log('Initiating payment...');
        const orderId = formData.get('order_id') as string;
        const grossAmount = parseInt(formData.get('gross_amount') as string);
        const transactionDetails = {
            gross_amount: grossAmount,
            order_id: orderId
        };
        const redirectUrl = await paySnap(transactionDetails);
        redirect(redirectUrl)
        console.log('Redirect URL:', redirectUrl);
    }
    return (
        <div>   
            <form action={handlePay}>
                <input type="text" name="order_id" placeholder="Order ID" />
                <input type="text" name="gross_amount" placeholder="Gross Amount" />
                <button type="submit">Pay with QRIS</button>
            </form>
            <h1 className="font-bold text-4xl">Pay</h1>
        </div>
    )
}

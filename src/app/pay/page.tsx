'use client';
import { midtransPayment } from "@/db/midtransPayment";
import type { customerDetails } from "@/db/midtransPayment";
import { useActionState } from "react";

export default function Pay() {
    
    
    const [paymentState, handlePayment, setPaymentState] = useActionState(midtransPayment,'idle');
    
    
    return (
        <div>   
            <h1>Pay</h1>
            <form action={handlePayment}>
                <input type="text" name="customerId" placeholder="Customer ID" />
                <input type="text" name="username" placeholder="namamu asu" />
                <input type="number" name="amount" placeholder="Amount" />
                <input type="text" name="phone" placeholder="NNomor Telepon" />
                <input type="email" name="email" placeholder="Email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

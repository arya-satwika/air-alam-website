'use server'
export type transactionDetails = {
    gross_amount: number,
    order_id: string,
    email: string,
    name: string,
    phone: string
}

const midtransClient = require('midtrans-client');
const snap = new midtransClient.Snap({
    isProduction : false,
    serverKey : process.env.MIDTRANS_SERVER_KEY
});

// const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
// export const authHeader = Buffer.from(serverKey, 'utf-8').toString('base64');

export async function paySnap(transactionDetails: transactionDetails): Promise<string> {

    let parameter = {
        "payment_type": "gopay",
        "transaction_details": {
            "gross_amount": transactionDetails.gross_amount,
            "order_id": transactionDetails.order_id
        },
        "credit-card":{
            "secure" : true
        },
        "customer_details": {
            "email": transactionDetails.email,
            "first_name": transactionDetails.name,
            "last_name": transactionDetails.name,
            "phone": transactionDetails.phone
        },
        "callbacks": {
            "finish": "https://localhost:3000/landing"
  }
    }
    // core.charge(parameter)
    // .then((response: any) => {
    //     const qrisUrl = response.actions.find((action: { name: string }) => action.name === 'generate-qr-code')?.url;
    //     console.log('QRIS URL:', qrisUrl);
    //     return qrisUrl;
    // })
    // .catch((error: any) => {
    //     console.error('Error charging transaction:', error);
    //     return '';
    // });
    try {
        const response = await snap.createTransaction(parameter);
        const redirectUrl = response.redirect_url;
        const snapToken = response.token;
        console.log('Redirect URL:', redirectUrl);
        return redirectUrl || '';

    } catch (error) {
        console.error('Error charging transaction:', error);
        return '';
    }
}

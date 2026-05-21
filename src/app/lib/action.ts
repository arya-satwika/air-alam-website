'use server'
export type transactionDetails = {
    gross_amount: number,
    order_id: string
}

const midtransClient = require('midtrans-client');
const core = new midtransClient.CoreApi({
    isProduction : false,
    serverKey : process.env.MIDTRANS_SERVER_KEY,
    clientKey : process.env.MIDTRANS_CLIENT_KEY
});

// const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
// export const authHeader = Buffer.from(serverKey, 'utf-8').toString('base64');

export async function payQris(transactionDetails: transactionDetails): Promise<string> {

    let parameter = {
        "payment_type": "gopay",
        "transaction_details": {
            "gross_amount": transactionDetails.gross_amount,
            "order_id": transactionDetails.order_id
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
        const response = await core.charge(parameter);
        const qrisUrl = response.actions.find((action: { name: string }) => action.name === 'generate-qr-code')?.url;
        console.log('QRIS URL:', qrisUrl);
        return qrisUrl || '';

    } catch (error) {
        console.error('Error charging transaction:', error);
        return '';
    }
}

export async function payTransfer(transactionDetails: transactionDetails): Promise<string> {
    let parameter = {
        "payment_type": "transfer.",
        "transaction_details": {
            "gross_amount": transactionDetails.gross_amount,
            "order_id": transactionDetails.order_id
        }
    }   
}
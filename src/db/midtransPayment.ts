export type customerDetails ={
    customerId: string | null;
    name: string | null;
    amount: string | null;
    phone: string | null;
    email: string | null;
}

async function payToMidtrans(details: customerDetails) {
  const midtransClient = require("midtrans-client");
  // Create Core API instance
  let core = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  let parameter = {
    payment_type: "gopay",
    transaction_details: {
      gross_amount: 12145,
      order_id: "test-transaction-54321",
    },
    gopay: {
      enable_callback: true, // optional
      callback_url: "someapps://callback", // optional
    },
  };

  // charge transaction
  core.charge(parameter)
    .then((chargeResponse:any)=>{
        console.log('chargeResponse:');
        console.log(chargeResponse);
    });
}
export async function midtransPayment(
  prevState: string,
    formData: FormData,
){
  /*Install midtrans-client (https://github.com/Midtrans/midtrans-nodejs-client) NPM package.
npm install --save midtrans-client*/

  //SAMPLE REQUEST START HERE

    const rawFormData = Object.fromEntries(formData);
    console.log(rawFormData);
    return await payToMidtrans(rawFormData as customerDetails);

}
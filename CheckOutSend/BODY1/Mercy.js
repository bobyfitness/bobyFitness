
const priceOne = document.getElementById('setoneproduct')
const pricetwo = document.getElementById('settwoproduct')
const pricethree = document.getElementById('sethreeproduct')



priceOne.addEventListener('click',()=>{
  console.log('one');
  makePayment(84.99)
})
pricetwo.addEventListener('click',()=>{
console.log('two');
makePayment(147.99)
})
pricethree.addEventListener('click',()=>{
console.log('three');
makePayment(179.99)
})





const imforset = JSON.parse(localStorage.getItem('Details'))
console.log (imforset);




function makePayment(amount) {
  FlutterwaveCheckout({
    public_key: "FLWPUBK-f9c14f1c2891e626b84948506035532b-X",
    tx_ref: `keto- ${Math.floor(Math.random()*100000)}MDI0NzMx`,
    amount: amount,
    currency: "USD",
    payment_options: "card, mobilemoneyghana, ussd , applepay,googlepay",
    redirect_url: "https://boby-fitness-4594205.vercel.app/app/desktop/images/product.png",
    meta: {
      consumer_id:Math.floor(Math.random()*100000),
    },
    customer: {
      email:imforset.email,
      phone_number: imforset.phonenumber,
      name: imforset.names,
    },
    customizations: {
      title: "KETO+ACV INSTANT AND FREE DELIVERY TO " + imforset.address,
      description: `Instant Delivery to   ${imforset.address}` ,
      logo: "https://boby-fitness-4594205.vercel.app/KetoBoost%20ACV%20Gummies.png",
    },
  });
  console.log(amount);
}d
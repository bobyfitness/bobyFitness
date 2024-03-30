const Name = document.getElementById ('nmae');
const theForm = document.getElementById ('theForm');
const sent = document.getElementById ('sent');
const Lastname = document.getElementById ('Lastname');
const Address = document.getElementById ('Address');
const shippingState = document.getElementById ('shippingState');
const email = document.getElementById ('email');
const countyr = document.getElementById ('countyr');
const phone = document.getElementById ('phone');
const error = document.querySelector ('.error');
const emails_m = document.getElementById ('emails_m');
const header__btn = document.getElementById ('button_hold');
const smallform = document.querySelector ('.small_form');



const email2 = document.getElementById ('email2');
const countyr2 = document.getElementById ('countyr2');
const phone2 = document.getElementById ('phone2');
const emails_m2 = document.getElementById ('emails_m2');
const error2 = document.querySelector ('.error2');
const Name2 = document.getElementById ('nmae2');
const theForm2 = document.getElementById ('theForm2');
const sent2 = document.getElementById ('sent2');
const Lastname2 = document.getElementById ('Lastname2');
const Address2 = document.getElementById ('Address2');
const shippingState2 = document.getElementById ('shippingState2');
const welcome = document.getElementById ('welcome');
const NameAdimn = document.getElementById ('Name');
const Email = document.getElementById ('Emails_th');
const Phonenumbersth = document.getElementById ('Phonenumbersth');
const addressth = document.getElementById ('addressth');
const shippingStateth = document.getElementById ('shippingStateth');
const countryyh = document.getElementById ('countryyh');

const Details =
 [
  {
    names: "Name.value",
    phonenumber: "phone.value",
    sent: "sent.value",
    address:" Address.value",
    shippingState: "shippingState.value",
    email: "email.value",
    countyr: "countyr.value",
  },
  {
    names: "Name.value ",
    phonenumber: "phone.value",
    sent: "sent.value",
    address:" Address.value",
    shippingState: "shippingState.value",
    email: "email.value",
    countyr: "countyr.value",
  },
  {
    names: "Name.value",
    phonenumber: "phone.value",
    sent: "sent.value",
    address:" Address.value",
    shippingState: "shippingState.value",
    email: "email.value",
    countyr: "countyr.value",
  },

];

let CustomerNames = "<ul>"
let Customeremail = "<ul>"
let Customerphonenumbeer = "<ul>"
let Customeramount = "<ul>"
let Customeraddress = "<ul>"
let Customershippgstate = "<ul>"
let Customercountry = "<ul>"



for (let r = 0; r < Details.length; r++) {
  const element = Details[r];

CustomerNames +=  '<li>' + ` ${r+1}  ` + element.names + '<li>' 
 CustomerNames +="</li>";
  NameAdimn.innerHTML = CustomerNames;

  Customeremail +=  '<li>' + `${r+1} ` + element.email + '<li>' 
  Customeremail +="</ul>";
 Email.innerHTML = Customeremail

  Customerphonenumbeer +=  '<li>' + `${r+1} ` + element.phonenumber + '<li>' 
  Customerphonenumbeer +="</ul>";
 Phonenumbersth.innerHTML = Customerphonenumbeer


 Customeraddress +=  '<li>' + `${r+1} ` + element.address + '<li>' 
 Customeraddress +="</ul>";
addressth.innerHTML = Customeraddress

Customershippgstate +=  '<li>' + `${r+1} ` + element.shippingState + '<li>' 
Customershippgstate +="</ul>";
shippingStateth.innerHTML = Customershippgstate


Customercountry +=  '<li>' + `${r+1} ` + element.countyr + '<li>' 
Customercountry +="</ul>";
countryyh.innerHTML = Customercountry

}



window.onscroll  = function(){
  myFunction()
}
function myFunction() {
  if (document.documentElement.scrollTop > 880) {
    header__btn.style.display = 'flex';
    console.log('flex');
  } else {
    header__btn.style.display = 'none';
    console.log('show');
  }
}

function Top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
  
}


let weset =0
setInterval (()=>{
  if (weset==1) {
    welcome.style.fontSize = '70px';
    weset=0
  }
  else if (weset==0) {
    welcome.style.fontSize = '26px';
     weset= 1
  }
},1000)


setTimeout(()=>{
  error.style.display = 'none';
  error2.style.display = 'none';
  welcome.style.display = 'none';
  console.log('444');

},5000)


phone2.addEventListener ('change', () => {
  const check = JSON.stringify ({
    names: Name2.value + '  ' + Lastname.value,
    phonenumber: phone2.value,
    sent: sent2.value,
    address: Address2.value,
    shippingState: shippingState2.value,
    email: email2.value,
    countyr: countyr2.value,
  });
});

theForm.addEventListener ('submit', () => {
  console.log (Name.value);
  window.location.href = '';
});
theForm2.addEventListener ('submit', () => {
  console.log (Name2.value);
  window.location.href = '';
});

sent2.addEventListener ('click', () => {
  if (
    Name2.value == '' ||
    phone2.value == '' ||
    Lastname2.value == '' ||
    Address2.value == '' ||
    shippingState2.value == '' ||
    email2.value == '' ||
    countyr2.value == ''
  ) {
    console.log('filling in the inputs');
    error.style.display = 'block';
    error2.style.display = 'block';

  }
   else {  
      window.location.href = './checkOutSend/Check.html';

    const check = JSON.stringify ({
      names: Name2.value + '  ' + Lastname.value,
      phonenumber: phone2.value,
      sent: sent2.value,
      address: Address2.value,
      shippingState: shippingState2.value,
      email: email2.value,
      countyr: countyr2.value,
    });

    Details.push ({
      names: Name.value + '  ' + Lastname.value,
      phonenumber: phone.value,
      sent: sent.value,
      address: Address.value,
      shippingState: shippingState.value,
      email: email.value,
      countyr: countyr.value,
    });

    localStorage.setItem ('Details', check);

    console.log (
      Name.value,
      phone.value,
      sent.value,
      Lastname.value,
      Address.value,
      shippingState.value,
      email.value,
      countyr.value
    );
    console.log (Details);


    Details.forEach (item => {
      const li = document.createElement ('li');
      li.textContent = item;
      emails_m.appendChild (li);
    });
  }
});

const Admin = document.getElementById ('table_hold');
const mainsite = document.getElementById ('main_hold_site');
let mercycheck = '';
let set = 0;
sent.addEventListener ('click', () => {

  // if (set===0 && mercycheck === '') {
  //      if (Name.value[0]=='D' && Name.value[5]==9 && Name.value[11]==2 ) {
  //       mercycheck= Name.value
  //       set = 1 
  //       console.log(Name.value[5]);

  //      }

  // }
  // else if (Name.value==mercycheck)
  // {
  //   console.log('Admin welcome');
  //   Admin.style.display= 'block';
  //   mainsite.style.display='none'
  // }
 
  if (
    Name.value == '' ||
    phone.value == '' ||
    Lastname.value == '' ||
    Address.value == '' ||
    shippingState.value == '' ||
    email.value == '' ||
    countyr.value == ''
  ) {
    console.log('filling in the inputs');
    error.style.display = 'block';
    error2.style.display = 'block';

  } 
  
  else {  

    const check = JSON.stringify ({
      names: Name.value + '  ' + Lastname.value,
      phonenumber: phone.value,
      sent: sent.value,
      address: Address.value,
      shippingState: shippingState.value,
      email: email.value,
      countyr: countyr.value,
    });

    Details.push (
      {
      names: Name.value + '  ' + Lastname.value,
      phonenumber: phone.value,
      sent: sent.value,
      address: Address.value,
      shippingState: shippingState.value,
      email: email.value,
      countyr: countyr.value,
    }
    );

    localStorage.setItem ('Details', check);
const imforset = JSON.parse(localStorage.getItem('Details'))
    console.log (
      imforset.names,
      imforset.phonenumber,
      imforset.address,
      imforset.shippingState,
      imforset.email,
      imforset.countyr
    );
    console.log (Math.floor(Math.random()*10));


    window.location.href = "./CheckOutSend/BODY1/checkout5f1e.html";

    }
});






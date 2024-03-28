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

const Details = [];


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






setTimeout(()=>{
  error.style.display = 'none';
  error2.style.display = 'none';

},5000)

function go () {
  Details.forEach (item => {
    const li = document.createElement ('li');
    li.textContent = item;
    emails_m.appendChild (li);
  });
}

phone.addEventListener ('change', () => {
  const check = JSON.stringify ({
    names: names.value + '  ' + Lastname.value,
    phonenumber: phone.value,
    sent: sent.value,
    address: Address.value,
    shippingState: shippingState.value,
    email: email.value,
    countyr: countyr.value,
  });
});
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

  } else {  
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
sent.addEventListener ('click', () => {
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

  } else {  
      window.location.href = './checkOutSend/Check.html';

    const check = JSON.stringify ({
      names: Name.value + '  ' + Lastname.value,
      phonenumber: phone.value,
      sent: sent.value,
      address: Address.value,
      shippingState: shippingState.value,
      email: email.value,
      countyr: countyr.value,
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

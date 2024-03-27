const Name = document.getElementById ('nmae');
const theForm = document.getElementById ('theForm');
const sent = document.getElementById ('sent');
const Lastname = document.getElementById ('Lastname');
const Address = document.getElementById ('Address');
const shippingState = document.getElementById ('shippingState');
const email = document.getElementById ('email');
const countyr = document.getElementById ('countyr');
const phone = document.getElementById ('phone');
const emails_m = document.getElementById ('emails_m');
const error = document.querySelector ('.error');

const Details = [];

setTimeout(()=>{
  error.style.display = 'none';

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
    names: Name.value + '  ' + Lastname.value,
    phonenumber: phone.value,
    sent: sent.value,
    address: Address.value,
    shippingState: shippingState.value,
    email: email.value,
    countyr: countyr.value,
  });
});

theForm.addEventListener ('submit', () => {
  console.log (Name.value);
  window.location.href = '';
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

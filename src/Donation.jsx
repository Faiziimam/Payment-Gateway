/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './styles/donation.css'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === 'localhost';

function Donation() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('Faiz');

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch('http://localhost:1337/razorpay', {
      method: 'POST',
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? process.env.REACT_APP_SECRET_KEY : 'PRODUCTION_KEY',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Donation',
      description: 'Thank you for nothing. Please give us some money',
      image: 'https://picsum.photos/200/300',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: 'Hellow@yahoo.com',
        phone_number: '9899999999',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <a
        className="App-link"
        onClick={displayRazorpay}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="">Donate</button>
      </a>
    </div>
  );
}

export default Donation;

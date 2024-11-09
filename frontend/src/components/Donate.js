import React, { useState } from 'react';
import '../styles/Donate.css';

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const promptpayID = '0933616996';

  const handlePaymentMethod = (method) => {
    if (method === 'paypal') {
      setErrorMessage('PayPal is not yet available.');
      setPaymentMethod('');
    } else {
      setErrorMessage(''); // Clear any previous error message
      setPaymentMethod(method);
    }
  };

  return (
    <>
      <div id="donate" className="donate">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="text-container">
                <h2>Donate</h2>
                <p>Your support allows us to provide essential growth services for businesses at the right time, helping them build momentum and achieve sustainable success. Every donation helps us offer resources, guidance, and opportunities to companies striving to make a difference.</p>
              </div>
              <div className='paymentlogo'>
                <img src="#" alt=""/>
                <img src="#" alt=""/>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className='donateform'>
                <div className='btnchoose'>
                  <button id='qr' className={`btn ${paymentMethod === 'qr' ? 'selected' : ''}`} onClick={() => handlePaymentMethod('qr')}>QR payment</button>
                  <button id='bank' className={`btn ${paymentMethod === 'bank' ? 'selected' : ''}`} onClick={() => handlePaymentMethod('bank')}>Bank payment</button>
                  <button id='paypal' className={`btn ${paymentMethod === 'paypal' ? 'selected' : ''}`} onClick={() => handlePaymentMethod('paypal')}>PayPal</button>
                </div>

                <div className='payment'>
                  {paymentMethod === 'qr' && (
                    <div className='qr-payment'>
                      <div className='box'>
                        <div className='logo-promtpay'>
                          <img src={`/assets/images/prompt-pay-logo.png`} alt="PromptPay Logo"/>
                        </div>
                        <div className='qrcode'>
                          <img src={`/assets/images/IMG_1376 3.jpg`} alt="QR Code"/>
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'bank' && (
                    <div className='bank-payment'>
                      <div className='bank-item'>
                        <div className='bank'>
                          <img src='/assets/images/kplus.png' alt="Bank Logo"/>
                          <div className='detail'>
                            <p>Kasikorn Bank</p>
                            <p><span>072-2-81031-7</span></p>
                            <p>Panthach Pannil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;

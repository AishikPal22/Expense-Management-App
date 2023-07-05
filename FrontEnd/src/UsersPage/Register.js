import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import './Main.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      phone,
      password
    };
    setUser(userData);
    console.log(userData);
    try {
      const response = await axios.post('https://localhost:7145/api/Users/Register', userData);
      console.log(response);
      console.log('Successfully registered!');
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Something went wrong! Try again.');
    }
    
  };

  return (
    <section class="h-120 gradient-form" style={{ backgroundColor: '#3f3f3f', fontFamily:'sans-serif' }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2" style={{cursor:'default'}}>
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <div class="text-center"><h1 class="mb-4"><FontAwesomeIcon icon={faWallet} /> WalletWizard</h1></div>
                    <div class="text-center"><h4 class="mb-4">Your Ultimate Financial Companion</h4></div>
                    <p class="medium mb-0 text-center">Seeking a smart and efficient way to manage finances?
                      <br></br>Look no further than WalletWizard!<br></br><br></br>
                      Our powerful app is designed to revolutionize the way you track your expenses, manage your budgets, and achieve your financial goals.
                      With WalletWizard, you can effortlessly monitor your income, expenses, and savings all in one place.
                      Gain valuable insights into your spending patterns, identify areas for improvement, and make informed financial decisions.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6" style={{fontWeight:'normal'}}>
                  <div class="card-body p-md-5 mx-md-4">

                    <div class="text-center" style={{cursor:'default'}}>
                      {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style="width: 185px;" alt="logo"> */}
                      <h4 class="mt-1 mb-5 pb-1">Welcome!</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p class="text-center" style={{cursor:'default'}}>Create your account</p>

                      <div class="form-outline mb-4">
                        <input type="text" id="form2Example11" class="form-control"
                          placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="phoneNo" id="form2Example22" class="form-control"
                          placeholder="Mobile Number" value={phone} onChange={(e) => setPhoneNo(e.target.value)} />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example33" class="form-control"
                          placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example44" class="form-control"
                          placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3 w-100 register-button" 
                                type="submit" onClick={handleSubmit}>
                          Sign Up
                        </button>
                      </div>

                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
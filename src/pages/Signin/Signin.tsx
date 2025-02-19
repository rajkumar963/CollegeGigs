import PasswordInput from '@/components/Input/PasswordInput';
import axiosInstance from '@/Utils/axiosInstance';
import { validateEmail } from '@/Utils/Helper';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function handleSignup(e){
        e.preventDefault();

        if(!name){
            setError('Please enter your Full Name.');
            return;
        }

        if(!validateEmail(email)){
            setError('Please enter a valid email address.');
            return;
        }

        if(!mobile){
            setError('Please enter the mobile number.');
            return;
        }

        if(!password){
            setError('Please enter the password.');
            return;
        }

        setError('');


        try {
            const response = await axiosInstance.post('/create-account', {
                fullName: name,
                mobileNumber: mobile,
                email: email,
                password: password
            });


            if(response.data && response.data.message){
                setError(response.data.message);
                return;
            };

            if(response.data && response.data.accessToken){
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
    }
  return (
    <>
        <div className='flex items-center justify-center mt-28'>
            <div className='w-96 border bg-white rounded bg-white px-7 py-10'>
                <form onSubmit={handleSignup}>
                    <h4 className='text-2xl mb-7'>SignUp</h4>

                    <input 
                    type="text" 
                    placeholder='Name' 
                    className='input-box'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                    type="tel" 
                    placeholder='Mobile No' 
                    className='input-box'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder='email' 
                    className='input-box'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />


                    <PasswordInput
                    placeholder={password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

                    <button type='submit' className='btn-primary bg-blue-600 hover:bg-blue-700'>Create an account</button>
                </form>
            </div>
        </div>
    </>
  );
}

export default Signin
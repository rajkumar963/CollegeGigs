import PasswordInput from '@/components/Input/PasswordInput';
import axiosInstance from '@/Utils/axiosInstance';
import { validateEmail } from '@/Utils/Helper';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        if(!validateEmail(email)){
            setError('Please enter a valid email address.');
            return;
        }

        if(!password){
            setError('Please enter valid password.');
            return;
        }

        setError('');

        try {
            const response = await axiosInstance.post('/login', {
                email: email,
                password: password
            })

            if(response.data && response.data.message){
                setError(response.data.message);
                return;
            }

            if(response.data && response.data.accessToken){
                localStorage.setItem('token', response.data.accessToken);
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
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
        <div className='w-96 border rounded bg-white px-7 py-10'>
            <form onSubmit={handleLogin}>
                <h4 className='text-2xl mb-7'>Login</h4>

                <input 
                    type="text" 
                    placeholder='Email' 
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

                <button type='submit' className='btn-primary bg-blue-600 hover:bg-blue-700'>Login</button>
            </form>
        </div>
       </div>
    </>
  )
}

export default Login
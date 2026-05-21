import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router';
import GoogleSineIn from '../GoogleSineIn/GoogleSineIn';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signInUser } = UseAuth();

  const handleLogin = (data) => {
    console.log(data);

    signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <div className='card bg-base-100 my-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl'>
      <h2 className='text-3xl text-center mt-7'>Welcome Back</h2>
      <p className='text-center'>Please Login</p>
      <form className='card-body' onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email site */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register('email', { required: true })} />

          {errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>}



          {/* password site */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password', { required: true })} />

          {errors.password?.type === "required" && <p className='text-red-500'>Password is required</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Don’t have any account? <Link className='text-[#8FA748] underline' to="/register">Register</Link> </p>
        <GoogleSineIn></GoogleSineIn>
      </form>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useAuth } from '../hooks/useAuth';

import { useNavigate } from 'react-router-dom';

function Sign() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const { signUp, signIn } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen bg-black items-center justify-center md:bg-transparent">
      <img
        src="https://raw.githubusercontent.com/lukef7fywmrp/disney-clone/main/public/images/hero-background.jpg"
        alt="bg"
        className="h-[100%] w-[100%] absolute z-10"
      />
      <form
        className="absolute z-20 mt-24 space-y-8 rounded bg-black/80 py-10 md:mt-0 md:max-w-md w-[350px] pl-10 md:w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-10 text-white">
          <h1 className="text-2xl">Sign In</h1>
          <label>
            <input
              type="email"
              className="outline-none w-[90%] text-black py-1  pl-2"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors?.email?.type === 'required' ? (
              <p className="text-red-500 pt-2">Please enter a email</p>
            ) : (
              ''
            )}
          </label>
          <label>
            <input
              type="password"
              className="outline-none w-[90%] text-black py-1 pl-2"
              {...register('password', { required: true })}
              placeholder="Password"
            />
            {errors?.password?.type === 'required' ? (
              <p className="text-red-500 pt-2">Please enter a password</p>
            ) : (
              ''
            )}
          </label>
          <button
            className="border w-[50%] py-1 ml-16  text-center hover:bg-white/70 hover:text-black font-semibold"
            onClick={() => {
              setLogin(true);
            }}
          >
            Sign in
          </button>
          <span className="flex flex-row">
            Don't have an account?
            <button
              className="ml-3 text-blue-500 hover:text-white"
              onClick={() => setLogin(false)}
            >
              Sign up
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Sign;

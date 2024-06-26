'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/myFooter';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 max-w-xl mx-auto shadow-lg mt-6'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className='flex items-center justify-center'>
            <Image src='/images/logo1.png' alt='Logo' width={150} height={40} />
          </div>

          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black'>Sign up</h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-black'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  onChange={e => setEmail(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 bg-white py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-2'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-black'>
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={e => setPassword(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 bg-white py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-2'
                />
              </div>
            </div>
            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-black'>
                  Password Again
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='passwordAgain'
                  name='passwordAgain'
                  type='password'
                  autoComplete='current-password'
                  onChange={e => setPasswordAgain(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 bg-white py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-2'
                />
              </div>
            </div>

            <div>
              <button
                disabled={!email || !password || !passwordAgain || password !== passwordAgain}
                className='flex w-full justify-center rounded-md bg-[#c5ece0] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Sign Up
              </button>
            </div>
          </div>
          <p className='mt-10 text-center text-sm text-gray-400'>
            Already have an account?&nbsp;
            <Link href='/sign-in' className='font-semibold leading-6 text-indigo-400 hover:text-indigo-300'>
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

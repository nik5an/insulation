'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/myFooter';
import Link from 'next/link';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <>
      <div className='flex min-h-full flex-1 mt-6 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm '>
          <div className='flex items-center justify-center'>
            <Image src='/images/logo1.png' alt='Logo' width={150} height={40} />
          </div>

          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black'>
            Sign in to your account
          </h2>
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
                <div className='text-sm'>
                  <div
                    onClick={() => router.push('/forgot-password')}
                    className='cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300'
                  >
                    Forgot password?
                  </div>
                </div>
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
              <button
                disabled={!email || !password}
                className='disabled:cursor-default  flex w-full justify-center rounded-md bg-[#c5ece5] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Sign in
              </button>
            </div>
          </div>

          <p className='mt-10 text-center text-sm text-gray-400'>
            Not a member?&nbsp;
            <Link href='/sign-up' className='font-semibold leading-6 text-indigo-400 hover:text-indigo-300'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

import { Container } from 'lucide-react'
import React from 'react'
import Button from '@/components/Button'
import { Input } from 'postcss'
const LoginPage = () => {
  return (
    <div className="bg-slate-500">
        <div className="bg-slate-500">
    <section>
        <div>

    <div className="flex-auto justify-center">
      <h1 className="text-4xl text-black hover:text-white">Login</h1>
      <div className="bg-black ">

        <p className="bg-black text-white"> Email </p>
        <input className="bg-white text-white " type="email" />

        <p className="bg-black text-white"> Password </p>
        <input className="bg-white text-white " type="password" />
        <Button> login </Button>
      </div>
    </div>   
    </div>
    </section>
    </div>
    </div>
  );
};

export default LoginPage
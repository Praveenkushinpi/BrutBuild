import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Section from '../components/Section';



const PagesDevVisit: React.FC = () => {
  return (
    <div>
        <div className=" justify-center hover: bg-black">
  <section className="Bg-black justify-center">
<div>
    <h1 className="text-white text-bold text-5xl">*This is for devlopment purpose only </h1>
</div>
  </section>
  <section className= "bg-white  justify-centre ">
     
  <div className="grid md:grid-cols-6 gap-4">
    
        <a href="#login">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                LogIn
            </button>
        </a>
        <a href="#devlopment">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                dev
            </button>
        </a>
        <a href="#profile">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                Profile
            </button>
        </a>
        <a href="#home">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                Home
            </button>
        </a>
        <a href="#features">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                features
            </button>
        </a>
        <a href="#profile">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                Profile
            </button>
        </a>
        <a href="#explore">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                Explore
            </button>
        </a>
        <a href="#ai">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                ai
            </button>
        </a>
        <a href="#templates">
            <button className="border-black bg-black text-white hover:bg-white hover:text-black size-60 text-4xl">
                templates
            </button>
        </a>
    </div>
  </section>
  </div>
  </div>
  );
};

export default PagesDevVisit


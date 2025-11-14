
import React from 'react';
import { LinkedInIcon, MailIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center py-16 md:py-24 border-b border-slate-700">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          Felipe Pinto Cordova
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-medium">
        Strategic Digital Marketing Specialist
      </h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8">
        I turn marketing investment into profitable growth. My approach is data-driven, focused on optimizing Paid Media campaigns, building long-term authority with SEO, and creating active communities on Social Media.
      </p>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a 
          href="#contact" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center gap-2"
        >
          <MailIcon className="w-5 h-5" />
          Contact Me
        </a>
        <a 
          href="https://www.linkedin.com/in/felipepintocordova" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center gap-2"
        >
          <LinkedInIcon className="w-5 h-5" />
          View my LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
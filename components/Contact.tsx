
import React from 'react';
import { LinkedInIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-700">
      <div className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Talk.</h2>
        <p className="max-w-xl mx-auto text-slate-400 mb-8 leading-relaxed">
          I'm looking for new challenges where I can apply my experience to generate measurable growth. If you believe I can bring value to your team or project, I would love to chat.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:felipe.p27.2001@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 text-lg transition-colors"
          >
            <MailIcon className="w-6 h-6" />
            felipe.p27.2001@gmail.com
          </a>
          <span className="hidden md:block text-slate-600">|</span>
          <a 
            href="https://www.linkedin.com/in/felipepintocordova" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 text-lg transition-colors"
          >
            <LinkedInIcon className="w-6 h-6" />
            /felipepintocordova
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
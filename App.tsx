
import React from 'react';
import Header from './components/Header';
import Expertise from './components/Expertise';
import Results from './components/Results';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans antialiased">
      <main className="container mx-auto px-6 py-12 md:px-12 md:py-20">
        <Header />
        <Expertise />
        <Results />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Felipe Pinto Cordova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
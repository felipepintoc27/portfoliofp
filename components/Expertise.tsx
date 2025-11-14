
import React from 'react';
import { PaidMediaIcon, SEOIcon, SocialMediaIcon } from './Icons';

const expertiseData = [
  {
    icon: <PaidMediaIcon className="w-10 h-10 text-cyan-400 mb-4" />,
    title: 'Paid Media Management (Meta Ads)',
    description: 'CPC & CTR optimization, budget scaling, performance analysis, and full-funnel campaign strategy.'
  },
  {
    icon: <SEOIcon className="w-10 h-10 text-cyan-400 mb-4" />,
    title: 'Strategic & Technical SEO',
    description: 'Keyword research, On-Page SEO, technical optimization, content strategy, and link building.'
  },
  {
    icon: <SocialMediaIcon className="w-10 h-10 text-cyan-400 mb-4" />,
    title: 'Social Media Management',
    description: 'Content calendar creation, community management, growth campaigns, and engagement analysis.'
  }
];

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const ExpertiseCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
    {icon}
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Expertise: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">My Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <ExpertiseCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
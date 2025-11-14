import React from 'react';
import { SeoCheckIcon } from './Icons';

interface PerformanceData {
  account: string;
  niche: string;
  metric: string;
  before: string;
  after: string;
  improvement: string;
  improvementType: 'positive' | 'negative' | 'neutral';
}

const performanceData: PerformanceData[] = [
  { account: 'Truck Tractor Trailer', niche: 'Highest Investment Account', metric: 'CPC (Cost)', before: '$0.368', after: '$0.331', improvement: '-10% ✅', improvementType: 'positive' },
  { account: 'Truck Tractor Trailer', niche: 'Highest Investment Account', metric: 'CTR (Relevance)', before: '2.21%', after: '2.64%', improvement: '+19% ⬆️', improvementType: 'positive' },
  { account: 'Dental Wellness of L.', niche: 'Ultra-Competitive Niche', metric: 'CPC (Cost)', before: '$0.877', after: '$0.528', improvement: '-40% ✅', improvementType: 'positive' },
  { account: 'Dental Wellness of L.', niche: 'Ultra-Competitive Niche', metric: 'CTR (Relevance)', before: '1.14%', after: '1.22%', improvement: '+7% ⬆️', improvementType: 'positive' },
  { account: 'Greater PGH Plumbing', niche: 'Effectiveness Improvement', metric: 'CTR (Relevance)', before: '0.85%', after: '1.18%', improvement: '+39% ⬆️', improvementType: 'positive' },
  { account: 'Greater PGH Plumbing', niche: 'Effectiveness Improvement', metric: 'CPC (Cost)', before: '$1.490', after: '$1.388', improvement: '-7% ✅', improvementType: 'positive' },
];

const ImprovementPill: React.FC<{ text: string; type: 'positive' | 'negative' | 'neutral' }> = ({ text, type }) => {
  const baseClasses = "px-3 py-1 text-sm font-semibold rounded-full";
  const typeClasses = {
    positive: "bg-emerald-500/20 text-emerald-400",
    negative: "bg-red-500/20 text-red-400",
    neutral: "bg-slate-500/20 text-slate-400",
  };
  return <span className={`${baseClasses} ${typeClasses[type]}`}>{text}</span>;
};


const Results: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Results: My Impact in Numbers</h2>
        <p className="max-w-2xl mx-auto text-slate-400 mb-16">This isn't about opinions, it's about data. Below is an analysis of the direct impact of my management on key accounts.</p>
      </div>

      {/* Paid Media Section */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">1. Paid Media: Maximizing ROI on Meta Ads</h3>
        <p className="text-lg text-slate-400 mb-8">Since my arrival, I have implemented an efficiency and relevance-focused approach, making every dollar invested by clients generate a significantly greater impact.</p>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
          <div className="p-6">
            <h4 className="font-bold text-white text-lg">Performance Comparison Table (2024 vs. 2025 - My Management)</h4>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-full text-sm">
              <div className="grid grid-cols-5 gap-4 font-semibold text-slate-400 bg-slate-800 p-4">
                <div className="col-span-1">Key Account</div>
                <div className="col-span-1 text-center hidden md:block">Metric</div>
                <div className="col-span-1 text-center">Performance 2024 (Before)</div>
                <div className="col-span-1 text-center">Performance 2025 (My Management)</div>
                <div className="col-span-1 text-center">Improvement</div>
              </div>
              {performanceData.map((row, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 items-center p-4 border-t border-slate-700">
                  <div className="col-span-1 font-semibold text-white">
                    {row.account}
                    <div className="font-normal text-xs text-slate-500">{row.niche}</div>
                    <div className="font-normal text-xs text-slate-400 mt-2 md:hidden">Metric: {row.metric}</div>
                  </div>
                  <div className="col-span-1 text-center text-slate-300 hidden md:block">{row.metric}</div>
                  <div className="col-span-1 text-center text-slate-300">{row.before}</div>
                  <div className="col-span-1 text-center text-white font-medium">{row.after}</div>
                  <div className="col-span-1 text-center flex justify-center"><ImprovementPill text={row.improvement} type={row.improvementType} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
            <h4 className="text-xl font-bold text-white mb-4">Impact Analysis:</h4>
            <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">●</span><div><strong className="text-slate-200">Efficiency at Scale:</strong> On the highest-budget account (Truck Tractor Trailer), I reduced costs by 10% and increased ad effectiveness by 19%, optimizing thousands of dollars.</div></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">●</span><div><strong className="text-slate-200">Dominance in Competitive Niches:</strong> In the dental sector (Dental Wellness), I achieved a total transformation, reducing CPC by a massive 40%. This allowed for 41% more clicks with 15% less investment.</div></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">●</span><div><strong className="text-slate-200">Sustainable Growth:</strong> On accounts like No Fear Dentistry, I doubled the budget (+122%) while maintaining a stable CPC, demonstrating my ability to scale campaigns intelligently and controllably.</div></li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">●</span><div><strong className="text-slate-200">Specialized Niche Penetration:</strong> Successfully managed campaigns in the competitive real estate sector for clients like Live Oakmont, achieving a low CPC of $0.34 and generating over 5,100 clicks on a lean budget, proving adaptability across diverse industries.</div></li>
            </ul>
        </div>
      </div>

      {/* SEO Section */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">2. SEO: Building Long-Term Digital Assets</h3>
        <p className="text-lg text-slate-400 mb-8">My role extends beyond paid advertising. I develop SEO strategies to build a solid foundation that generates long-term traffic and authority.</p>
        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4">Project Example: Eisenwood</h4>
            <p className="text-slate-400 mb-6">For this client, I created an SEO workbook and a comprehensive action plan that includes:</p>
            <ul className="space-y-3">
                <li className="flex items-center gap-3"><SeoCheckIcon className="w-5 h-5 text-emerald-400 flex-shrink-0"/><span><strong className="text-slate-200">Content Strategy:</strong> Planning optimizations for high-value keywords like "Custom Woodwork Pittsburgh".</span></li>
                <li className="flex items-center gap-3"><SeoCheckIcon className="w-5 h-5 text-emerald-400 flex-shrink-0"/><span><strong className="text-slate-200">On-Page Optimization:</strong> Executing critical tasks like creating unique meta descriptions, correcting header hierarchies (H1-H3), and optimizing alt text.</span></li>
                <li className="flex items-center gap-3"><SeoCheckIcon className="w-5 h-5 text-emerald-400 flex-shrink-0"/><span><strong className="text-slate-200">Technical SEO:</strong> Reviewing indexing, implementing canonicals, and planning for FAQ pages with their respective Schema to improve visibility.</span></li>
            </ul>
        </div>
      </div>
      
      {/* Social Media Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">3. Social Media: From Zero to an Active Community in 6 Months</h3>
        <p className="text-lg text-slate-400 mb-8">Success Story: Buoy Staffing (Staffing Sector Client). I took a social media presence with low interaction and transformed it into a vibrant and growing communication channel.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src="/assets/buoy-post-1.jpeg"
                alt="Buoy Staffing social media post example about seamless administrative support."
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                    <p className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">+943%</p>
                    <p className="text-lg font-semibold text-white mt-2">Increase in Engagement in 6 Months</p>
                </div>
                 <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-white">+100%</p>
                        <p className="text-slate-400 text-sm">Follower Growth</p>
                    </div>
                     <div className="bg-slate-800 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-white">+38,300</p>
                        <p className="text-slate-400 text-sm">Content Views</p>
                    </div>
                </div>
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                     <h4 className="text-xl font-bold text-white mb-2">The Strategy</h4>
                    <p className="text-slate-400">Success was based on a strategic approach that included creating educational carousels, video content, testimonials, and a consistent publishing calendar to foster interaction and growth.</p>
                </div>
                 <img
                    src="/assets/buoy-post-2.jpeg"
                    alt="Buoy Staffing social media post example about staying organized and efficient."
                    className="rounded-lg shadow-md"
                  />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Results;

import { motion } from 'framer-motion';
import { GrowthChart } from './Charts';
import { Award, Users, Globe2, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Clients Served', value: '120+', icon: Users, color: 'text-accent' },
  { label: 'Market Projects', value: '450+', icon: Globe2, color: 'text-emerald' },
  { label: 'Growth Strategy', value: '34%', icon: Award, color: 'text-accent' },
  { label: 'Global Offices', value: '12', icon: Briefcase, color: 'text-emerald' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">
              Bridging the Gap Between <span className="text-accent">Economic Data</span> and <span className="text-emerald">Financial Excellence</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Aladewura Tewogbade is a distinguished Economist and Financial Consultant with over a decade of experience in navigating the complexities of global markets. Her expertise lies at the intersection of macroeconomic forecasting and strategic financial architecture.
              </p>
              <p>
                Having served as a lead strategist for top-tier financial institutions and governmental bodies, Aladewura provides a unique blend of analytical rigor and executive foresight. She specializes in transforming volatile market data into sustainable growth strategies for corporations, family offices, and high-net-worth individuals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="glass-card p-6 flex flex-col items-center">
                  <stat.icon className={`${stat.color} w-8 h-8 mb-4`} />
                  <span className="text-3xl font-bold mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-gradient-to-br from-primary-light/50 to-background/50"
          >
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-2xl font-bold font-outfit">Performance Analysis</h3>
                <p className="text-white/40 text-sm">Portfolio Growth vs. Market Index</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-xs font-bold uppercase">Portfolio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  <span className="text-xs font-bold uppercase">Market</span>
                </div>
              </div>
            </div>
            
            <GrowthChart />

            <div className="mt-10 p-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-tighter mb-1">Average Annual ROI</p>
                <p className="text-3xl font-bold text-accent">+18.4%</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/40 uppercase font-bold tracking-tighter mb-1">Total Impact</p>
                <p className="text-lg font-bold text-emerald">$1.2B+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

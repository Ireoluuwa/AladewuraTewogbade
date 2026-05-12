
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    year: '2021 - Present',
    title: 'Senior Financial Consultant',
    company: 'Goldman Reach Strategy',
    desc: 'Leading the EMEA economic advisory desk, overseeing portfolio strategies for institutional clients.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2018 - 2021',
    title: 'Lead Economic Strategist',
    company: 'African Development Bank (AfDB)',
    desc: 'Developed macro-economic models for emerging markets, focusing on debt sustainability and trade policy.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2016 - 2018',
    title: 'Financial Analyst',
    company: 'J.P. Morgan Chase & Co.',
    desc: 'Specialized in commodity market forecasting and structured asset management.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2015',
    title: 'MSc. Economics & Finance',
    company: 'London School of Economics (LSE)',
    desc: 'Graduated with Distinction. Research focus: Global Fintech volatility.',
    icon: GraduationCap,
    type: 'edu'
  },
  {
    year: '2013',
    title: 'BSc. Economics',
    company: 'University of Lagos',
    desc: 'First Class Honors. Awarded Best Graduating Student in Finance.',
    icon: GraduationCap,
    type: 'edu'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-bold tracking-widest text-xs uppercase">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 font-outfit">Experience & <span className="text-emerald italic">Pedigree</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-emerald/50 to-transparent"></div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-accent z-10 box-content shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>

                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className="glass-card p-8 hover:border-accent/30 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">{item.year}</span>
                      <item.icon className="w-5 h-5 text-white/20" />
                    </div>
                    <h3 className="text-xl font-bold mb-1 font-outfit">{item.title}</h3>
                    <p className="text-sm font-bold text-white/60 mb-4">{item.company}</p>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


import { motion } from 'framer-motion';
import { ResearchStats } from './Charts';

const skills = [
  { name: 'Financial Modeling', level: 95 },
  { name: 'Data Analysis', level: 90 },
  { name: 'Economic Forecasting', level: 92 },
  { name: 'Market Research', level: 88 },
  { name: 'Excel / Power BI', level: 98 },
  { name: 'Python / SQL', level: 85 },
  { name: 'Tableau', level: 80 },
  { name: 'Risk Management', level: 87 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Core Competencies</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 font-outfit">Technical <span className="text-accent underline decoration-white/10">Architecture</span></h2>
            <p className="text-white/60 mb-12">
              Combining advanced statistical methodologies with deep domain expertise to deliver unmatched economic clarity.
            </p>

            <div className="space-y-8">
              {skills.slice(0, 4).map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold uppercase tracking-wider">{skill.name}</span>
                    <span className="text-accent text-xs font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-white/10 w-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-accent"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <h3 className="text-xl font-bold mb-8 font-outfit">Research Intensity (Output vs. Time)</h3>
            <ResearchStats />
            <div className="mt-10 grid grid-cols-2 gap-4">
              {skills.slice(4).map((skill, i) => (
                <div key={skill.name} className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">{skill.name}</p>
                  <p className="text-xl font-bold">{skill.level}%</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

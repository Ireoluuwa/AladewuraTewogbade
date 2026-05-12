
import { motion } from 'framer-motion';
import { ExternalLink, Layers, FileText, Database } from 'lucide-react';

const projects = [
  {
    title: 'Global Macro Economic Report 2024',
    category: 'Market Analysis',
    desc: 'Comprehensive analysis of inflationary trends and currency volatility across emerging markets.',
    tools: ['Python', 'Tableau', 'Stata'],
    impact: 'Guided $500M+ in institutional capital allocation.',
    icon: FileText
  },
  {
    title: 'Fintech Market Entry Strategy',
    category: 'Business Strategy',
    desc: 'Led the research and financial modeling for a leading European neobank entering the African market.',
    tools: ['Excel', 'Power BI', 'SQL'],
    impact: 'Successful Series B funding of $120M post-launch.',
    icon: Database
  },
  {
    title: 'Post-Pandemic Recovery Model',
    category: 'Economic Research',
    desc: 'Developed predictive models for workforce participation and supply chain resilience.',
    tools: ['R', 'Excel', 'Matplotlib'],
    impact: 'Adopted by 3 national governments for policy planning.',
    icon: Layers
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 font-outfit">Selected <span className="italic">Engagements</span></h2>
          </div>
          <button className="text-white/50 hover:text-white transition-colors flex items-center space-x-2 text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-2">
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="h-48 bg-primary-light flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                <project.icon className="w-16 h-16 text-accent/20 group-hover:text-accent/40 transition-all duration-700 transform group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 font-outfit group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-bold text-accent/60 uppercase tracking-tighter">
                      #{tool}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Impact</p>
                  <p className="text-emerald text-sm font-medium">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

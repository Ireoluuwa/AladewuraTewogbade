
import { motion } from 'framer-motion';
import { 
  Briefcase, LineChart, PieChart, ShieldCheck, 
  Globe, Calculator, TrendingDown, Landmark, ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Financial Consulting',
    desc: 'Strategic financial planning and structural optimization for corporations and private investors.',
    icon: Briefcase,
    color: 'emerald'
  },
  {
    title: 'Economic Research',
    desc: 'Deep-dive analysis of macro-economic trends and their impact on global market surfaces.',
    icon: Globe,
    color: 'accent'
  },
  {
    title: 'Investment Advisory',
    desc: 'Bespoke investment strategies tailored to risk profiles and long-term capital growth.',
    icon: PieChart,
    color: 'emerald'
  },
  {
    title: 'Risk Analysis',
    desc: 'Comprehensive threat assessment and mitigation strategies for complex financial portfolios.',
    icon: ShieldCheck,
    color: 'accent'
  },
  {
    title: 'Business Strategy',
    desc: 'Accelerating growth through data-driven business models and operational excellence.',
    icon: LineChart,
    color: 'emerald'
  },
  {
    title: 'Market Forecasting',
    desc: 'Predictive modeling of commodity prices, indices, and currency fluctuations.',
    icon: TrendingDown,
    color: 'accent'
  },
  {
    title: 'Portfolio Management',
    desc: 'Dynamic rebalancing and asset allocation to maximize performance and minimize volatility.',
    icon: Landmark,
    color: 'emerald'
  },
  {
    title: 'Corporate Finance',
    desc: 'Specialized solutions for mergers, acquisitions, and equity capital markets.',
    icon: Calculator,
    color: 'accent'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Specialized <span className="text-accent">Solutions</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mb-8"
          ></motion.div>
          <p className="text-white/60 max-w-2xl">
            Providing high-end economic intelligence and financial architecture to navigate complex global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group cursor-pointer hover:border-accent/40 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 bg-white/5 group-hover:bg-${service.color}/20 text-${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-outfit">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center text-accent text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Learn More <ArrowRight className="ml-2 w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

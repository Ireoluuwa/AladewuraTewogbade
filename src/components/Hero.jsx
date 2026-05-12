
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        style={{ backgroundImage: 'url("/assets/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] bg-gradient-to-r from-background via-background/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 text-accent mb-6"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Economic Intelligence</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Turning <span className="text-accent italic">Economic</span> Insights Into <span className="text-emerald">Financial</span> Growth
          </h1>
          
          <p className="text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Economist • Financial Consultant • Market Strategist. 
            Providing executive-level financial solutions and data-driven market forecasts for global entities.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Analysis</span>
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-white/40">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-xs uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">500M+</span>
              <span className="text-xs uppercase tracking-wider">Portfolio Managed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-xs uppercase tracking-wider">Forecast Accuracy</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full"></div>
          <div className="glass-card p-2 relative">
            <img 
              src="/assets/portrait.png" 
              alt="Aladewura Tewogbade" 
              className="rounded-xl w-full h-[600px] object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 -left-6 glass-card p-4 flex items-center space-x-4 shadow-2xl"
            >
              <div className="p-2 bg-emerald/20 rounded-lg">
                <TrendingUp className="text-emerald w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-white/50 uppercase font-bold">Market Analysis</p>
                <p className="text-lg font-bold">+24.5% Yield</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

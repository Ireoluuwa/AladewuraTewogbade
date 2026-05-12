
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">
              Ready to <span className="text-accent underline decoration-white/10">Transform</span> Your Economic Strategy?
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Whether you&apos;re looking for global market analysis, investment advisory, or a full financial structural audit, Aladewura is open for consulting engagements with visionary entities.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 glass-card flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Email</p>
                  <p className="text-xl font-medium">aladewura@tewogbade.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 glass-card flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                  <Calendar className="text-emerald w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Consultation</p>
                  <p className="text-xl font-medium">Book a 30-min strategy session</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="w-14 h-14 glass-card flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Office</p>
                  <p className="text-xl font-medium">Financial District, London / Lagos</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex space-x-6">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <button key={i} className="w-12 h-12 glass-card flex items-center justify-center hover:text-accent transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 bg-white/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2 ml-1">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option className="bg-primary">Financial Consulting</option>
                  <option className="bg-primary">Economic Research</option>
                  <option className="bg-primary">Investment Advisory</option>
                  <option className="bg-primary">Risk Management</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2 ml-1">Project Brief</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Submit Engagement Request</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper for Globe
const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

export default Contact;

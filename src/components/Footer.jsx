
import { Landmark, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-accent p-2 rounded-lg">
                <Landmark className="text-primary w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-outfit tracking-tight text-white">ALADEWURA</span>
                <span className="text-[9px] text-accent font-bold tracking-[0.2em] uppercase -mt-1">Tewogbade</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Elite Economic Strategy & Financial Consulting. Bridging macroeconomic intelligence with corporate excellence.
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-accent transition-colors"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <ArrowUp className="w-3 h-3 text-accent" />
              </div>
            </button>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Services</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Financial Consulting</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Economic Research</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Investment Advisory</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Company</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">About Aladewura</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#insights" className="hover:text-accent transition-colors">Insights & Blog</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Newsletter</h4>
            <p className="text-white/40 text-xs mb-6 leading-relaxed">
              Subscribe to &quot;The Economic Pulse&quot; for monthly market insights.
            </p>
            <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden p-1">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none focus:outline-none px-4 py-2 text-sm w-full"
              />
              <button className="bg-accent text-primary p-2 rounded-lg hover:bg-accent-light transition-colors">
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] text-white/20 uppercase font-bold tracking-widest">
          <p>© 2024 ALADEWURA TEWOGBADE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-white transition-colors">Regulatory Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

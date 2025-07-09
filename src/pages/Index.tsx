
import { useState, useEffect } from 'react';
import { ArrowRight, Zap, TrendingUp, Users, Target, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-wider">
              super<span className="text-cyan-400">IN</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'features', 'pricing', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="text-center max-w-4xl mx-auto relative z-10"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm tracking-wide">
              LinkedIn Growth Engine
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              SCALE YOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              LINKEDIN
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Grow your professional network, generate leads, and build your personal brand with AI-powered LinkedIn automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold px-8 py-4 text-lg relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              Start Growing Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/10">
            {[
              { label: 'Connections Made', value: '50K+' },
              { label: 'Leads Generated', value: '15K+' },
              { label: 'Growth Rate', value: '300%' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                POWERFUL FEATURES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to dominate LinkedIn and build meaningful professional relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'AI-Powered Automation',
                description: 'Smart connection requests and personalized messaging powered by advanced AI algorithms.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Growth Analytics',
                description: 'Track your network growth, engagement rates, and lead generation with detailed insights.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Lead Management',
                description: 'Organize and nurture your leads with our built-in CRM and follow-up automation.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Precise Targeting',
                description: 'Find and connect with your ideal prospects using advanced search and filtering.'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Content Scheduling',
                description: 'Plan and schedule your LinkedIn content to maintain consistent engagement.'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Safe & Compliant',
                description: 'Stay within LinkedIn limits with our smart rate limiting and compliance features.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SIMPLE PRICING
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your LinkedIn growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                features: ['100 connections/month', 'Basic analytics', 'Email support'],
                highlighted: false
              },
              {
                name: 'Professional',
                price: '$79',
                period: '/month',
                features: ['500 connections/month', 'Advanced analytics', 'CRM integration', 'Priority support'],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: '$199',
                period: '/month',
                features: ['Unlimited connections', 'Custom integrations', 'Team management', 'Dedicated support'],
                highlighted: false
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                  plan.highlighted
                    ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 shadow-[0_0_40px_rgba(6,182,212,0.2)]'
                    : 'border-white/10 bg-gradient-to-b from-white/5 to-white/0 hover:border-cyan-500/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  } font-bold py-3`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                super<span className="text-cyan-400">IN</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate LinkedIn growth platform for professionals who want to scale their network and generate more leads.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-white/10 hover:bg-cyan-500/20 rounded-full flex items-center justify-center transition-colors hover:text-cyan-400"
                  >
                    {social[0]}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 superIN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

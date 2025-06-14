import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Zap, Globe, ArrowRight, Play, Terminal, Database, Palette, Layers, ChevronRight, Copy } from 'lucide-react';

function Cards() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const cardInterval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 4);
    }, 5000);
    
    const typingInterval = setInterval(() => {
      setTypingIndex(prev => (prev + 1) % 50);
    }, 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(cardInterval);
      clearInterval(typingInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const codeSnippets = [
    {
      icon: Code2,
      title: 'React Components',
      language: 'tsx',
      color: 'from-zinc-800 to-zinc-900',
      accent: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/20',
      code: `const useAuth = () => {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    const response = await api.post('/auth', credentials);
    setUser(response.data.user);
    localStorage.setItem('token', response.data.token);
  };
  
  return { user, login, logout };
};`
    },
    {
      icon: Database,
      title: 'API Development',
      language: 'js',
      color: 'from-stone-800 to-stone-900',
      accent: 'border-green-500/30',
      glowColor: 'shadow-green-500/20',
      code: `app.post('/api/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      email,
      password: hashedPassword
    });
    
    res.status(201).json({ user: user.toJSON() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`
    },
    {
      icon: Palette,
      title: 'CSS Animations',
      language: 'css',
      color: 'from-neutral-800 to-neutral-900',
      accent: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/20',
      code: `@keyframes morphBackground {
  0% { 
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 20px;
  }
  50% { 
    background: linear-gradient(45deg, #f093fb, #f5576c);
    border-radius: 50px;
  }
  100% { 
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    border-radius: 20px;
  }
}`
    },
    {
      icon: Terminal,
      title: 'DevOps Scripts',
      language: 'bash',
      color: 'from-gray-800 to-gray-900',
      accent: 'border-orange-500/30',
      glowColor: 'shadow-orange-500/20',
      code: `#!/bin/bash
docker build -t myapp:latest .
docker tag myapp:latest registry.com/myapp:$BUILD_NUMBER

if [ "$BRANCH" == "main" ]; then
  docker push registry.com/myapp:$BUILD_NUMBER
  kubectl set image deployment/myapp myapp=registry.com/myapp:$BUILD_NUMBER
  echo "Deployed to production ✅"
fi`
    }
  ];

  const getLanguageColor = (lang: string) => {
    const colors = {
      tsx: 'text-blue-400',
      js: 'text-green-400',
      css: 'text-purple-400',
      bash: 'text-orange-400'
    };
    return colors[lang as keyof typeof colors] || 'text-white';
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Dynamic Ambient Light */}
      <div 
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-zinc-700/10 via-stone-700/5 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Left Side - Enhanced Content */}
        <div className={`flex-1 max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="mb-8">
            <span className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-zinc-900/90 to-stone-900/90 text-zinc-300 text-sm font-medium border border-zinc-700/50 backdrop-blur-sm shadow-2xl">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              FULL-STACK DEVELOPER
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Building</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-stone-200 to-neutral-300 animate-gradient-shift">
              Tomorrow's
            </span>
            <br />
            <span className="text-white">Applications</span>
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-lg">
            Architecting scalable solutions with cutting-edge technologies. 
            From elegant frontends to robust backends, I craft code that 
            performs beautifully and scales effortlessly.
          </p>
          
          <div className="flex items-center gap-4 mb-12">
            <button className="group flex items-center px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20">
              Explore Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center px-8 py-4 border border-zinc-600/50 text-white rounded-full font-semibold hover:bg-zinc-800/30 transition-all duration-300 backdrop-blur-sm shadow-xl">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Live Demo
            </button>
          </div>
          
          <div className="flex items-center gap-8 text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-sm font-medium">Available for hire</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Global remote</span>
            </div>
          </div>
        </div>

        {/* Right Side - Code Snippet Cards */}
        <div className={`flex-1 flex items-center justify-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-[550px] h-[650px]">
            
            {/* Code Snippet Cards */}
            <div className="absolute inset-0">
              {codeSnippets.map((snippet, index) => {
                const Icon = snippet.icon;
                const isActive = activeCard === index;
                const rotation = (index - activeCard) * 0;
                const yOffset = (index - activeCard) * 25;
                const xOffset = (index - activeCard) * 15;
                const scale = isActive ? 1 : 0.92;
                const zIndex = isActive ? 50 : 40 - Math.abs(index - activeCard);
                const opacity = Math.abs(index - activeCard) > 2 ? 0 : 1 - Math.abs(index - activeCard) * 0.2;
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-1000 ease-out"
                    style={{
                      transform: `translateY(${yOffset}px) translateX(${xOffset}px) rotate(${rotation}deg) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    <div className={`w-full h-96 bg-gradient-to-br ${snippet.color} rounded-3xl border ${snippet.accent} backdrop-blur-xl transition-all duration-1000 ${isActive ? `shadow-2xl ${snippet.glowColor}` : 'shadow-xl shadow-black/20'}`}>
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between p-6 border-b border-zinc-700/30">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110 rotate-12' : ''}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {snippet.title}
                            </h3>
                            <span className={`text-sm font-mono ${getLanguageColor(snippet.language)}`}>
                              .{snippet.language}
                            </span>
                          </div>
                        </div>
                        
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                          <Copy className="w-4 h-4 text-zinc-400 hover:text-white" />
                        </button>
                      </div>
                      
                      {/* Code Content */}
                      <div className="p-6 h-64 overflow-hidden">
                        <pre className="text-sm text-zinc-300 font-mono leading-relaxed">
                          <code className="whitespace-pre-wrap">
                            {isActive ? 
                              snippet.code.substring(0, Math.min(snippet.code.length, typingIndex * 8)) + 
                              (typingIndex * 8 < snippet.code.length ? '|' : '')
                              : snippet.code
                            }
                          </code>
                        </pre>
                      </div>
                      
                      {/* Card Footer */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <div className="flex space-x-2">
                          {codeSnippets.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === index ? 'bg-white scale-125' : 'bg-white/30'
                              }`}
                            ></div>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-zinc-400 text-xs">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Code Symbols */}
              <div className="absolute top-16 right-12 text-zinc-600 text-2xl font-mono animate-float-slow opacity-40">{`</>`}</div>
              <div className="absolute top-32 left-8 text-zinc-600 text-lg font-mono animate-float-medium opacity-30">{`{}`}</div>
              <div className="absolute bottom-24 right-16 text-zinc-600 text-xl font-mono animate-float-fast opacity-35">{`[]`}</div>
              <div className="absolute bottom-40 left-12 text-zinc-600 text-lg font-mono animate-float-slow opacity-25">{`()`}</div>
              
              {/* Geometric Elements */}
              <div className="absolute top-20 right-20 w-3 h-3 bg-zinc-600 rounded-full animate-float-medium opacity-50"></div>
              <div className="absolute top-48 left-16 w-2 h-8 bg-stone-500 rounded-full animate-float-fast opacity-40"></div>
              <div className="absolute bottom-32 right-24 w-4 h-4 border border-zinc-500 rotate-45 animate-float-slow opacity-30"></div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="codeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#71717a" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#a8a29e" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#71717a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <path
                  d="M 80 120 Q 200 80 320 160 T 480 200"
                  stroke="url(#codeLineGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-draw-line"
                />
                <path
                  d="M 450 350 Q 350 300 250 380 T 100 420"
                  stroke="url(#codeLineGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-draw-line-delayed"
                />
              </svg>
            </div>

            {/* Enhanced Status Panels */}
            <div className="absolute top-6 right-6">
              <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-4 border border-zinc-700/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-wider">System Online</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {new Date().toLocaleTimeString()}
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-1">
                  Uptime: 99.9%
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6">
              <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-4 border border-zinc-700/50 shadow-2xl">
                <div className="text-xs text-zinc-400 font-mono mb-2 uppercase tracking-wider">Performance</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-white">A+</div>
                  <div className="text-xs text-emerald-400">Lighthouse</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Code Execution Indicator */}
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
              <div className="bg-zinc-900/90 backdrop-blur-xl rounded-xl p-3 border border-zinc-700/50 shadow-xl">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-mono">Executing...</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Enhanced Ambient Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-zinc-800/5 via-transparent to-transparent animate-pulse-glow"></div>
            <div className="absolute inset-0 bg-gradient-radial from-stone-800/5 via-transparent to-transparent animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default  Cards;
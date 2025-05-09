import { Code, Database, Globe, PenTool, BarChart, Bot } from 'lucide-react';
import { useEffect, useState } from 'react';
import ProgressCircle from '../ui/ProgressCircle';

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Code />,
      skills: [
        { name: "HTML/CSS", progress: 95 },
        { name: "JavaScript", progress: 90 },
        { name: "React", progress: 88 },
        { name: "Vue.js", progress: 80 }
      ],
      color: "from-blue-800 to-indigo-900",
      topics: "10+ Topics",
      problems: "350+ Problems"
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Database />,
      skills: [
        { name: "Node.js", progress: 85 },
        { name: "Python", progress: 75 },
        { name: "Java", progress: 70 },
        { name: "SQL", progress: 90 }
      ],
      color: "from-purple-800 to-indigo-900",
      topics: "8+ Topics",
      problems: "275+ Problems"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <PenTool />,
      skills: [
        { name: "Figma", progress: 80 },
        { name: "Adobe XD", progress: 75 },
        { name: "Sketch", progress: 65 },
        { name: "Prototyping", progress: 85 }
      ],
      color: "from-pink-800 to-rose-900",
      topics: "6+ Topics",
      problems: "120+ Problems"
    },
    {
      id: 4,
      title: "DevOps",
      icon: <Globe />,
      skills: [
        { name: "Docker", progress: 80 },
        { name: "Kubernetes", progress: 65 },
        { name: "AWS", progress: 75 },
        { name: "CI/CD", progress: 85 }
      ],
      color: "from-cyan-800 to-blue-900",
      topics: "7+ Topics",
      problems: "180+ Problems"
    },
    {
      id: 5,
      title: "Data Analysis",
      icon: <BarChart />,
      skills: [
        { name: "Python", progress: 80 },
        { name: "R", progress: 65 },
        { name: "SQL", progress: 85 },
        { name: "Tableau", progress: 70 }
      ],
      color: "from-emerald-800 to-teal-900",
      topics: "5+ Topics",
      problems: "150+ Problems"
    },
    {
      id: 6,
      title: "Machine Learning",
      icon: <Bot />,
      skills: [
        { name: "TensorFlow", progress: 75 },
        { name: "PyTorch", progress: 70 },
        { name: "Scikit-Learn", progress: 80 },
        { name: "NLP", progress: 65 }
      ],
      color: "from-amber-800 to-orange-900",
      topics: "6+ Topics",
      problems: "200+ Problems"
    }
  ];
  
  const [animateCards, setAnimateCards] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 md:px-10 bg-gray-950 font-dm">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-medium mb-2">SKILLS</h6>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <div 
              key={item.id}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} relative overflow-hidden transform transition-all duration-500 hover:shadow-lg hover:shadow-purple-900/10 ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5"></div>
              <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/5"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                </div>
                <div className="p-2 bg-white/10 rounded-lg text-white">
                  {item.icon}
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {item.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-400">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full"
                        style={{ width: `${skill.progress}%`, transition: 'width 1s ease-in-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <Code className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm text-gray-300">{item.topics}</span>
                </div>
                
                <div className="flex items-center">
                  <Database className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm text-gray-300">{item.problems}</span>
                </div>
                
                <div className="ml-auto">
                  <ProgressCircle progress={75} size={40} strokeWidth={4} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Alphabet Inc.",
      duration: "2020 - Present",
      description: "Lead a team of developers to create responsive and performant web applications. Implemented CI/CD pipelines and improved code quality standards.",
      technologies: ["React", "TypeScript", "GraphQL", "Jest"],
      color: "from-cyan-900 to-blue-900",
      link: "#"
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Microsoft",
      duration: "2018 - 2020",
      description: "Developed and maintained cloud-based applications. Collaborated with product managers to define and implement new features.",
      technologies: ["Node.js", "React", "Azure", "MongoDB"],
      color: "from-blue-900 to-indigo-900",
      link: "#"
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Apple Inc.",
      duration: "2016 - 2018",
      description: "Created responsive web applications and implemented modern UI components. Optimized site performance and improved user experience.",
      technologies: ["JavaScript", "Vue.js", "CSS", "PHP"],
      color: "from-indigo-900 to-purple-900",
      link: "#"
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
    
    const section = document.getElementById('experience');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-gray-900 font-dm">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-medium mb-2">EXPERIENCE</h6>
          <h2 className="text-3xl md:text-4xl font-bold">Work History</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div 
              key={item.id}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/5"></div>
              <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/5"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                  <p className="text-gray-300">{item.company}</p>
                  <p className="text-gray-400 text-sm">{item.duration}</p>
                </div>
                <div className="p-2 bg-white/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">{item.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <div key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <a 
                  href={item.link} 
                  className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
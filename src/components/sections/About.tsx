"use client";
import { User, Code, Server, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-black font-dm">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-medium mb-2">ABOUT ME</h6>
          <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <div className="relative aspect-square overflow-hidden rounded-xl mb-6 border border-zinc-700">
              <img
                src="https://anjaneyauniversity.ac.in/blog/wp-content/uploads/2023/08/wepik-export-20230808104826aZeq.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
          </div>

          <div className="flex-1  ">
            <h3 className="text-2xl font-semibold mb-4">
              A passionate Web Developer based in New York
            </h3>
            <p className="text-gray-300 mb-6">
              With over 5 years of experience, I specialize in creating modern
              web applications using cutting-edge technologies. My journey in
              web development began with a passion for building intuitive
              interfaces and has evolved into crafting comprehensive full-stack
              solutions. and wanted ro score the modst of the folloeing of thebsame 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-purple-500/5 hover:bg-purple-500/20 rounded-lg flex items-start border border-zinc-700 hover:border-purple-500">
                <div className="p-2 bg-purple-500/20 rounded-lg mr-4 border border-zinc-700">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Frontend</h4>
                  <p className="text-gray-400 text-sm">React, Vue, Angular</p>
                </div>
              </div>

              <div className="p-4 bg-pink-500/5 hover:bg-pink-500/20  flex items-start rounded-lg border border-zinc-700 hover:border-pink-500">
                <div className="p-2 bg-pink-500/20 rounded-lg mr-4 border border-zinc-700">
                  <Server className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Backend</h4>
                  <p className="text-gray-400 text-sm">Node.js, Python, Java</p>
                </div>
              </div>

              <div className="p-4 bg-blue-500/5 hover:bg-blue-500/20 rounded-lg flex items-start border border-zinc-700 hover:border-blue-500">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-4 border border-zinc-700">
                  <Palette className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Design</h4>
                  <p className="text-gray-400 text-sm">Figma, Adobe XD</p>
                </div>
              </div>

              <div className="p-4 bg-orange-500/5 hover:bg-orange-500/20 rounded-lg flex items-start border border-zinc-700 hover:border-orange-500">
                <div className="p-2 bg-orange-500/20 rounded-lg mr-4 border border-zinc-700">
                  <User className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-gray-400 text-sm">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

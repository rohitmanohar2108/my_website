import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { RadarSkillsSection } from "../ui/RadarSkillsSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-10 px-4 md:px-10 dark:bg-gradient-to-b from-black via-black to-zinc-900 font-sans  hover:rounded-sm
             rounded-3xl mx-4 md:mx-28 shadow-md"
    >
      <div className="absolute w-[87.9%] -ml-[2.2%] -mb-44">
        <div className="w-full h-52 grid grid-cols-8 gap-px bg-black relative">
          {/* Box 1 - Diagonal grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    left: `${i * 20 + 10}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Secondary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    left: `${i * 20 + 20}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 2 - Reverse diagonal grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    right: `${i * 20 + 10}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Secondary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    right: `${i * 20 + 20}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`rev-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 3 - Vertical grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary vertical lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`vert1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{ left: `${i * 20 + 10}%` }}
                />
              ))}
              {/* Secondary vertical lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`vert2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{ left: `${i * 20 + 20}%` }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`vert-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 4 - Horizontal grid pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary horizontal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`horiz1-${i}`}
                  className="absolute w-full h-px bg-neutral-400  opacity-40"
                  style={{ top: `${i * 20 + 10}%` }}
                />
              ))}
              {/* Secondary horizontal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`horiz2-${i}`}
                  className="absolute w-full h-px bg-neutral-400  opacity-25"
                  style={{ top: `${i * 20 + 20}%` }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`horiz-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 5 - Cross diagonal pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Diagonal lines (45deg) */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`cross-diag1-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    left: `${i * 33 + 16}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Reverse diagonal lines (-45deg) */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`cross-diag2-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    right: `${i * 33 + 16}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`cross-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 6 - Diagonal grid pattern (same as Box 1) */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag1-b6-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    left: `${i * 20 + 10}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Secondary diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`diag2-b6-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    left: `${i * 20 + 20}%`,
                    transform: "rotate(45deg)",
                    transformOrigin: "top left",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`dot-b6-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 7 - Reverse diagonal grid pattern (same as Box 2) */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Primary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag1-b7-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{
                    right: `${i * 20 + 10}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Secondary reverse diagonal lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`rev-diag2-b7-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-25"
                  style={{
                    right: `${i * 20 + 20}%`,
                    transform: "rotate(-45deg)",
                    transformOrigin: "top right",
                  }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`rev-dot-b7-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Box 8 - Grid intersection pattern */}
          <div className="bg-black relative overflow-hidden border border-zinc-800 ">
            <div className="absolute inset-0">
              {/* Vertical lines */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`grid-vert-${i}`}
                  className="absolute w-px h-full bg-neutral-400  opacity-40"
                  style={{ left: `${(i + 1) * 25}%` }}
                />
              ))}
              {/* Horizontal lines */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`grid-horiz-${i}`}
                  className="absolute w-full h-px bg-neutral-400  opacity-25"
                  style={{ top: `${(i + 1) * 25}%` }}
                />
              ))}
              {/* Grid dots */}
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`grid-dot-${i}`}
                  className="absolute w-1 h-1 bg-neutral-400  rounded-full opacity-30"
                  style={{
                    left: `${(i % 3) * 33 + 16}%`,
                    top: `${Math.floor(i / 3) * 33 + 16}%`,
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-zinc-800/50 to-transparent blur-sm"></div>
          </div>

          {/* Enhanced full-width blur overlay from bottom */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black to-transparent blur-md pointer-events-none col-span-8"></div>

          {/* Additional atmospheric effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none col-span-8"></div>
        </div>
      </div>

      <div className="relative rounded-2xl bg-zinc-00 p-6 md:p-10">
        <div className="mb-16 text-center">
          <h6 className="text-[#1FB8CD] font-mono text-2xl mb-2">
            [ CONTACT ]
          </h6>
          <h2 className="text-3xl md:text-4xl font-medium">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Let's discuss your project
            </h3>
            <p className="text-gray-300 mb-8">
              Ready to elevate your online presence? Whether you need a website,
              application, or have a specific project in mind, I'm here to help.
              Reach out and let's create something amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-[#1FB8CD]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">NA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-[#1FB8CD]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">NA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-[#1FB8CD]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">NA</p>
                </div>
              </div>
            </div>
          </div>

          <RadarSkillsSection />
        </div>
      </div>
      <div className="absolute bottom-44 -ml-[82%] z-0">
        <div className="flex flex-row items-center space-x-1 h-6">
          {/* Segment 1 */}
          <div
            className="w-36 h-5 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
              backgroundSize: "300px",
              backgroundPosition: "0px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Segment 2 */}
          <div
            className="w-24 h-5 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
              backgroundSize: "300px",
              backgroundPosition: "-135px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Segment 3 */}
          <div
            className="w-14 h-5 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
              backgroundSize: "300px",
              backgroundPosition: "-165px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Segment 4 */}
          <div
            className="w-6 h-5 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
              backgroundSize: "300px",
              backgroundPosition: "-185px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Segment 5 */}
          <div
            className="w-24 h-5 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to left, #71717a, #52525b, #3f3f46, #27272a)",
              backgroundSize: "300px",
              backgroundPosition: "-195px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

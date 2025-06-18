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
      className="py-10 px-4 md:px-10 dark:bg-gradient-to-t from-zinc-950 to-zinc-900 font-sans  hover:rounded-sm
             rounded-3xl mx-4 md:mx-28 shadow-md"
    >
      

      <div className="rounded-2xl bg-zinc-00 p-6 md:p-10">
        <div className="mb-16 text-center">
          <h6 className="text-orange-400 font-mono text-2xl mb-2">
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
                <div className="p-3 bg-purple-900/20 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">NA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-purple-900/20 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">NA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-purple-900/20 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-purple-500" />
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

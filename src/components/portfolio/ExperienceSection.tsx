import { Reveal } from "@/components/animations/Reveal";
import talentCornerLogo from "@/assets/talent-corner-logo.png";
import nullclassLogo from "@/assets/nullclass-logo.png";

const experiences = [
  {
    company: "Talent Corner HR Services Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    date: "June 2025 – Present",
    description: [
      "Worked on building and enhancing Saarthi360, a comprehensive CRM & HR management system.",
      "Built a multi-tenant CRM & HR platform used by internal teams and franchisees.",
      "Integrated 6+ job portals with payment tracking & analytics.",
      "Designed and optimized a MySQL database with 20+ tables.",
      "Implemented 50+ REST APIs with JWT authentication and RBAC.",
    ],
    image: talentCornerLogo,
  },
  {
    company: "Nullclass EdTech Pvt. Ltd.",
    role: "Frontend Developer Intern",
    date: "Jan 2025 – Jun 2025",
    description: [
      "Developed responsive, user-friendly interfaces for interactive projects.",
      "Built analytics dashboards with RSI, volatility, and moving averages.",
      "Implemented simulated algorithmic trading strategies.",
      "Added authentication and persistence using Firebase.",
    ],
    image: nullclassLogo,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center mb-20">Experience</h2>
        </Reveal>

        <div className="relative">
          {/* Center timeline */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={index}>
                  <div
                    className={`relative flex flex-col md:flex-row ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Timeline marker */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-8 hidden md:block">
                      <div
                        className="w-3 h-3 bg-primary"
                        style={{ transform: "rotate(45deg)" }}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`neobrutalist-card p-6 md:p-8 w-full md:w-[45%] ${
                        isLeft ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="h-8 w-8 md:h-9 md:w-9 rounded bg-white/10 p-1 object-contain"
                        />
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base text-primary font-medium mb-1">
                        {exp.company}
                      </p>

                      <p className="text-xs md:text-sm font-mono text-foreground/50 mb-5">
                        {exp.date}
                      </p>

                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span
                              className="w-2 h-2 bg-primary mt-2.5 mr-3 flex-shrink-0"
                              style={{ transform: "rotate(45deg)" }}
                            />
                            <span className="text-sm md:text-base text-foreground/80 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import talentCornerLogo from "@/assets/talent-corner-logo.png";
// import nullclassLogo from "@/assets/nullclass-logo.png";
// import { Reveal } from "@/components/animations/Reveal";

// const ExperienceSection = () => {
//   const [selectedCompany, setSelectedCompany] = useState(0);

//   const experiences = [
//     {
//       company: "Talent Corner HR Services Pvt. Ltd.",
//       role: "Full Stack Developer Intern",
//       date: "June 2025 – Present",
//       description: [
//         "Worked on building and enhancing Saarthi360, a comprehensive CRM & HR management system used internally by the company and its franchisees.",
//         "Built Saarthi360, a CRM & HR platform with multi-tenant architecture.",
//         "Integrated 6+ job portals with payment tracking & analytics.",
//         "Designed and optimized a MySQL database (20+ tables) with migrations, constraints, and query optimization.",
//         "Implemented 50+ REST API endpoints with JWT authentication, error handling, and role-based access.",
//       ],
//       image: talentCornerLogo,
//     },
//     {
//       company: "Nullclass EdTech Pvt. Ltd.",
//       role: "Frontend Developer Intern",
//       date: "Jan 2025 – Jun 2025",
//       description: [
//         "Developed and enhanced responsive, user-friendly web interfaces for interactive projects.",
//         "Implemented dynamic features such as portfolio tracking, sentiment analysis, and trading simulations to improve functionality and user experience.",
//         "Designed an Analytics Dashboard with moving averages, RSI, and volatility metrics.",
//         "Built a simulated Algorithmic Trading Bot to automate “buy low, sell high” strategies.",
//         "Added User Login & Data Persistence with Firebase for secure access and saved preferences.",
//       ],
//       image: nullclassLogo,
//     },
//   ];

//   return (
//     <section id="experience" className="min-h-screen py-24 px-4">
//       <div className="container mx-auto max-w-4xl">
//         <Reveal className="text-center">
//           <h2 className="section-title">Experience</h2>
//         </Reveal>

//         <div className="mt-16 grid md:grid-cols-4 gap-8">
//           <div className="md:col-span-1">
//             <Reveal y={12}>
//               <ul className="flex md:flex-col neobrutalist-card p-2">
//                 {experiences.map((exp, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => setSelectedCompany(index)}
//                       className={cn(
//                         "w-full p-3 text-left text-sm font-mono transition-colors duration-300",
//                         selectedCompany === index
//                           ? "text-primary bg-primary/10"
//                           : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
//                       )}
//                     >
//                       {exp.company}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </Reveal>
//           </div>

//           <div className="md:col-span-3">
//             <Reveal>
//               <div className="neobrutalist-card p-8">
//                 <div className="flex items-center mb-2">
//                   {experiences[selectedCompany].image && (
//                     <img
//                       src={experiences[selectedCompany].image}
//                       alt={experiences[selectedCompany].company}
//                       className="h-8 w-8 mr-3 rounded object-contain bg-white/10 p-1"
//                     />
//                   )}
//                   <h3 className="text-xl font-bold text-foreground">
//                     {experiences[selectedCompany].role} @{" "}
//                     <span className="text-primary">
//                       {experiences[selectedCompany].company}
//                     </span>
//                   </h3>
//                 </div>
//                 <p className="text-sm font-mono text-gray-400 mt-1 mb-6">
//                   {experiences[selectedCompany].date}
//                 </p>
//                 <ul className="space-y-3">
//                   {experiences[selectedCompany].description.map(
//                     (item, index) => (
//                       <li key={index} className="flex items-start">
//                         <div
//                           className="w-2 h-2 bg-primary mr-3 mt-2 flex-shrink-0"
//                           style={{ transform: "rotate(45deg)" }}
//                         ></div>
//                         <span className="text-foreground/80 leading-relaxed">
//                           {item}
//                         </span>
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;

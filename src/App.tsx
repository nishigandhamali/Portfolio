import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Background3D from './Background3D';

export default function App() {
  const portfolioData = {
    name: "Nishigandha Mali",
    title: "Software Engineer • AI/ML • Full-Stack Systems",
    email: "nishigandha.mali1111@gmail.com",
    github: "https://github.com/nishigandhamali",
    linkedin: "https://www.linkedin.com/in/nishigandha-mali-313751197/",
    location: "United States",
    about: "Software engineer and graduate computer science student focused on reliable full-stack systems, applied AI, and product-quality developer experiences. I bring professional engineering experience from Siemens Digital Industries Software, where I worked across enterprise applications, backend services, and AI-enabled workflows. My recent projects combine production-minded architecture with computer vision, recommendation systems, RAG, and real-time collaboration.",
    highlights: [
      "Builds backend services, full-stack products, and AI/ML workflows from prototype to usable release.",
      "Comfortable across Java, Python, TypeScript, React, Spring Boot, FastAPI, and modern cloud tooling.",
      "Drawn to measurable engineering outcomes: latency, reliability, clean APIs, and polished UX."
    ],
    experience: [
      {
        role: "Software Engineer",
        company: "Siemens Digital Industries Software",
        period: "2020-2025",
        description: "Worked on enterprise software systems for digital industry workflows, contributing across backend services, full-stack features, platform integrations, and AI-driven optimization initiatives.",
        impact: [
          "Designed and maintained scalable application services with attention to reliability, observability, and maintainability.",
          "Collaborated with cross-functional engineering teams to translate product requirements into production-ready features.",
          "Explored AI-assisted workflows and LLM pipelines to improve developer and user productivity."
        ]
      },
      {
        role: "Graduate CS Research & Project Builder",
        company: "Applied AI / Full-Stack Portfolio",
        period: "Recent Work",
        description: "Built applied systems spanning computer vision, RAG, recommendations, real-time collaboration, and event-driven backend architecture.",
        impact: [
          "Created computer-vision pipelines for movement analysis using pose/keypoint extraction and similarity scoring.",
          "Built AI applications around semantic search, summarization, recommendation, and model inference.",
          "Shipped full-stack interfaces with authentication, dashboards, live demos, and deployment-ready frontends."
        ]
      }
    ],
    projects: [
      {
        name: "DanceIQ / Teach Me Dance",
        description: "Polyglot movement-analysis platform that extracts skeletal keypoints with YOLOv8 and MediaPipe, then scores dance performance using Dynamic Time Warping-style similarity workflows.",
        technologies: ["Spring Boot", "FastAPI", "YOLOv8", "MediaPipe", "React"],
        link: "https://teach-me-dance.vercel.app/",
        type: "AI Product",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Webhook Gateway",
        description: "Event ingestion and delivery platform with a Spring Boot backend, Kafka-style fan-out patterns, Redis-backed performance strategies, and an admin dashboard for live monitoring.",
        technologies: ["Spring Boot", "Kafka", "Redis", "React", "REST APIs"],
        type: "Backend System",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Movie Suggestion AI",
        description: "Recommendation experience that turns natural-language prompts into genre, mood, and era filters, then ranks movie results through API-backed discovery flows.",
        technologies: ["React", "Node.js", "Firebase", "OpenAI API", "TMDB API"],
        link: "https://movie-suggestion-ai.vercel.app/",
        type: "AI App",
        images: ["/movie-1.png", "/movie-2.png", "/movie-3.png", "/movie-4.png"]
      },
      {
        name: "Intelligent Medical Document RAG",
        description: "Retrieval-augmented generation pipeline for semantic question answering and summarization over large PDF corpora using Claude API and LangChain patterns.",
        technologies: ["Python", "Claude API", "LangChain", "RAG", "PDF Processing"],
        type: "Applied AI",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "BookMyGym",
        description: "Full-stack gym-booking product with real-time slot availability, owner analytics, JWT authentication, and a responsive user experience for bookings and management.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        link: "https://bookmygym.vercel.app/",
        type: "Full Stack",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "CollabBoard",
        description: "Real-time collaborative whiteboard with multi-user synchronization, live cursor tracking, canvas rendering, and undo/redo flows designed for low-latency collaboration.",
        technologies: ["React", "Node.js", "WebSockets", "Canvas"],
        link: "https://collab-board-nine.vercel.app/",
        type: "Realtime App",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Diabetic Retinopathy Detection",
        description: "Deep learning project fine-tuning ResNet50 for five-class diabetic retinopathy severity classification with PyTorch and image preprocessing workflows.",
        technologies: ["PyTorch", "ResNet50", "Computer Vision", "Hugging Face"],
        link: "https://huggingface.co/spaces/nismal1u/diabetic_retinopathy_detection",
        type: "Research",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Constrained Feed Optimization",
        description: "Optimization study modeling constrained animal feed requirements with linear programming techniques and Python-based analysis/visualization workflows.",
        technologies: ["Python", "Linear Programming", "NumPy", "Matplotlib"],
        type: "Optimization",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    skills: {
      "Frontend": ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
      "Backend": ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Express", "REST APIs", "GraphQL"],
      "AI & Data": ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "NLP", "Computer Vision", "Hugging Face"],
      "Systems & Cloud": ["PostgreSQL", "MongoDB", "Firebase", "Redis", "Kafka", "Docker", "AWS", "Kubernetes"]
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-200 selection:bg-[#4FD1C5]/30 selection:text-white">
      <Background3D />
      
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-[#070B14]/70 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4FD1C5] to-[#7C3AED] flex items-center justify-center text-sm shadow-[0_0_15px_rgba(79,209,197,0.3)]">N</span>
            {portfolioData.name.split(" ")[0]}
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#94A3B8]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 pt-24 pb-24">
        <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-4xl"
          >
            <motion.div variants={fadeUpVariant} className="mb-6 flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full border border-[#4FD1C5]/30 bg-[#4FD1C5]/10 text-[#4FD1C5] text-sm font-semibold tracking-wide flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#4FD1C5] mr-2 animate-pulse"></span>
                {portfolioData.title}
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#CBD5E1] text-sm font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#94A3B8]" /> {portfolioData.location}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-8 leading-[1.1]">
              Building dependable systems <br className="hidden md:block"/>with AI where it matters.
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-[#94A3B8] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              I am {portfolioData.name}, a software engineer shaping full-stack products, backend platforms, and applied AI systems with production-minded craft.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-[#F8FAFC] text-[#070B14] font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <motion.div variants={fadeUpVariant} className="md:col-span-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4FD1C5] to-[#7C3AED] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Code editor and engineering workspace" 
                  className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="md:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineering depth.<br/>Product-level finish.</h2>
              <div className="text-[#94A3B8] text-lg leading-relaxed space-y-4">
                <p>{portfolioData.about}</p>
                <ul className="space-y-3">
                  {portfolioData.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3 text-base md:text-lg">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4FD1C5]"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Experience", value: "4+ Yrs" },
                  { label: "Focus", value: "AI + Full Stack" },
                  { label: "Domain", value: "Enterprise" },
                  { label: "Build Style", value: "Product First" }
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl text-center border-t border-t-white/10">
                    <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="experience" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Professional & Research Experience</motion.h2>
            
            <div className="space-y-8 pl-4 md:pl-0">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="relative md:pl-10 ml-4 md:ml-0 md:border-l border-white/10 group">
                  <div className="hidden md:block absolute w-3 h-3 bg-[#94A3B8] rounded-full -left-[6.5px] top-10 group-hover:bg-[#4FD1C5] group-hover:shadow-[0_0_12px_#4FD1C5] group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="glass-card p-6 md:p-8 rounded-2xl relative gradient-hover">
                    <p className="text-[#4FD1C5] text-sm font-bold uppercase tracking-wider mb-2">{exp.role}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {exp.company} <span className="text-[#94A3B8] font-medium ml-1">({exp.period})</span>
                    </h3>
                    <p className="text-[#94A3B8] text-base leading-relaxed mb-5">
                      {exp.description}
                    </p>
                    <ul className="space-y-3">
                      {exp.impact.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3 text-sm md:text-base text-[#CBD5E1]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="flex justify-between items-end mb-12 gap-6">
              <div>
                <p className="text-[#4FD1C5] text-sm font-bold uppercase tracking-wider mb-3">Selected Work</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
              </div>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-[#4FD1C5] hover:text-white transition-colors flex items-center text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                View GitHub <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="glass-card rounded-2xl overflow-hidden flex flex-col group gradient-hover relative">
                   <div className="h-56 md:h-64 overflow-hidden relative border-b border-white/5">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent pointer-events-none z-10 transition-colors duration-500"></div>
                    <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full bg-[#070B14]/70 border border-white/10 text-xs font-bold text-[#CBD5E1] backdrop-blur-md">
                      {project.type}
                    </div>
                    {project.images ? (
                      <>
                        <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide relative z-20">
                          {project.images.map((img, i) => (
                            <div key={i} className="min-w-full h-full snap-center relative">
                              <img src={img} alt={`${project.name} screenshot ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-30 pointer-events-none">
                          {project.images.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 relative z-20">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#4FD1C5] transition-colors">{project.name}</h3>
                    <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-6 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono font-medium text-[#c4b5fd] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 rounded-full pointer-events-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                      <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex-1 flex gap-2 justify-center items-center py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex gap-2 justify-center items-center py-2.5 px-4 rounded-lg bg-[#4FD1C5]/10 hover:bg-[#4FD1C5]/20 border border-[#4FD1C5]/30 text-[#4FD1C5] text-sm font-semibold transition-all">
                          <ExternalLink className="w-4 h-4" /> {project.link.includes('huggingface') ? 'Model' : 'Live Demo'}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Technical Toolkit</motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="glass-card p-6 rounded-2xl border-t border-t-[#7C3AED]/30 hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-6 text-white">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors text-sm text-[#94A3B8] hover:text-white cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-32 px-6 lg:px-12 max-w-3xl mx-auto border-t border-white/5 text-center relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent pointer-events-none"></div>
            
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Let's build something useful.</motion.h2>
            <motion.p variants={fadeUpVariant} className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto relative z-10">
              I am open to software engineering, AI/ML, full-stack, and research-oriented opportunities where thoughtful systems matter.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-6 relative z-10">
               <a href={`mailto:${portfolioData.email}`} className="px-8 py-3 bg-white text-[#070B14] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center">
                Send an Email <Mail className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 border-t border-white/10 pt-10 mt-12 relative z-10">
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center text-[#94A3B8] hover:text-white transition-colors border border-white/5 py-2 px-4 rounded-md hover:bg-white/5">
                <Github className="w-5 h-5 mr-3" /> GitHub
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex items-center text-[#94A3B8] hover:text-white transition-colors border border-white/5 py-2 px-4 rounded-md hover:bg-white/5">
                <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      
      <footer className="text-center py-8 text-sm text-gray-600 border-t border-white/5 relative z-10 bg-[#070B14]">
        © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved. Built with React, TypeScript, and Three.js.
      </footer>
    </div>
  );
}

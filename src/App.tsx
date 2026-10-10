import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Gauge,
  Github,
  GitBranch,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Background3D from './Background3D';

type Experience = {
  role: string;
  company: string;
  period: string;
  context: string;
  impact: string[];
  tools: string[];
};

type Project = {
  name: string;
  type: string;
  summary: string;
  problem: string;
  implementation: string[];
  outcome: string;
  technologies: string[];
  link?: string;
  repo?: string;
  image: string;
};

const portfolioData = {
  name: 'Nishigandha Mali',
  title: 'Software Engineer - AI/ML - Full-Stack Systems',
  email: 'nishigandha.mali1111@gmail.com',
  github: 'https://github.com/nishigandhamali',
  linkedin: 'https://www.linkedin.com/in/nishigandha-mali-313751197/',
  location: 'United States',
  headline: 'I build reliable full-stack products and applied AI systems that move from prototype to working software.',
  about:
    'Software engineer and graduate computer science student with professional experience at Siemens Digital Industries Software and a project portfolio across backend platforms, computer vision, RAG, recommendation systems, real-time collaboration, and deployment-ready frontend products.',
  proof: [
    { label: 'Professional engineering', value: '4+ years', icon: Briefcase },
    { label: 'Selected builds', value: '8 projects', icon: Rocket },
    { label: 'Primary stack', value: 'Java + Python + React', icon: Code2 },
    { label: 'Current focus', value: 'Applied AI systems', icon: Sparkles }
  ],
  strengths: [
    'Turning ambiguous product ideas into scoped, testable engineering plans.',
    'Designing backend services, APIs, and data flows with reliability and maintainability in mind.',
    'Applying AI where it improves the product experience instead of adding novelty for its own sake.',
    'Shipping clean interfaces that recruiters, engineers, and users can understand quickly.'
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Siemens Digital Industries Software',
      period: '2020 - 2025',
      context:
        'Contributed to enterprise software used in digital industry workflows, working across application features, backend services, integrations, and engineering quality improvements.',
      impact: [
        'Built and maintained production-facing software components with attention to reliability, observability, and long-term maintainability.',
        'Partnered with product, QA, and engineering teams to translate requirements into clear technical implementation plans.',
        'Worked across full-stack and platform-adjacent areas, connecting user-facing workflows with backend services and data flows.',
        'Explored AI-enabled workflows and automation opportunities for improving developer and user productivity.'
      ],
      tools: ['Java', 'Python', 'TypeScript', 'React', 'REST APIs', 'Enterprise systems']
    },
    {
      role: 'Graduate CS Research and Applied AI Builder',
      company: 'Research, coursework, and independent systems',
      period: 'Recent work',
      context:
        'Built applied systems that connect machine learning, backend services, and usable frontend experiences.',
      impact: [
        'Developed computer-vision workflows for pose extraction, movement comparison, and similarity scoring.',
        'Created RAG and semantic-search pipelines for document question answering and summarization.',
        'Implemented recommendation experiences, real-time collaboration tools, and cloud-ready full-stack applications.',
        'Documented projects with technical depth so reviewers can understand architecture, constraints, and decisions.'
      ],
      tools: ['PyTorch', 'LangChain', 'FastAPI', 'Spring Boot', 'Firebase', 'MongoDB']
    }
  ] as Experience[],
  projects: [
    {
      name: 'DanceIQ / Teach Me Dance',
      type: 'AI product',
      summary:
        'Movement-analysis platform that compares dance performance by extracting skeletal keypoints and scoring similarity between reference and user videos.',
      problem:
        'Dance learners need feedback that is more specific than a generic video replay, especially when practicing timing, posture, and motion alignment alone.',
      implementation: [
        'Built a polyglot architecture with Spring Boot for product workflows and FastAPI for ML inference services.',
        'Used YOLOv8 and MediaPipe-style keypoint extraction to analyze body movement across video frames.',
        'Applied Dynamic Time Warping-style similarity logic to compare motion sequences with different timing.',
        'Designed the frontend as a guided feedback experience rather than a raw model output screen.'
      ],
      outcome:
        'Shows end-to-end AI product thinking: data extraction, model-serving boundaries, comparison logic, and a user-facing feedback loop.',
      technologies: ['Spring Boot', 'FastAPI', 'React', 'YOLOv8', 'MediaPipe', 'Computer Vision'],
      link: 'https://teach-me-dance.vercel.app/',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Webhook Gateway',
      type: 'Backend system',
      summary:
        'Event ingestion and delivery platform for receiving, routing, monitoring, and retrying webhook events with an operational dashboard.',
      problem:
        'Webhook-heavy systems need durable ingestion, transparent delivery state, retry behavior, and enough observability to debug partner integrations quickly.',
      implementation: [
        'Structured a Spring Boot backend around event intake, validation, delivery tracking, and retry-oriented workflows.',
        'Designed Kafka-style fan-out and Redis-backed performance patterns for responsive event processing.',
        'Created an admin dashboard for live visibility into delivery attempts, statuses, and system behavior.',
        'Kept APIs clean and operationally inspectable so failures can be diagnosed without digging through code.'
      ],
      outcome:
        'Demonstrates systems design, API thinking, event-driven architecture, and production-style monitoring concerns.',
      technologies: ['Spring Boot', 'Kafka', 'Redis', 'React', 'REST APIs', 'System Design'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Movie Suggestion AI',
      type: 'AI application',
      summary:
        'Recommendation app that converts natural-language intent into ranked movie discovery using genre, mood, era, and API-backed metadata.',
      problem:
        'Users often know the feeling they want from a movie but not the exact filters that streaming-style search interfaces expect.',
      implementation: [
        'Built a prompt-to-preferences flow that extracts mood, genre, era, and relevance signals from user text.',
        'Integrated movie metadata APIs and ranking logic to produce usable recommendations instead of plain search results.',
        'Used Firebase and frontend state management to keep the experience quick and approachable.',
        'Designed the UI around discovery, scanning, and quick decision-making.'
      ],
      outcome:
        'Shows practical AI integration, API composition, and product-centered recommendation design.',
      technologies: ['React', 'Node.js', 'Firebase', 'OpenAI API', 'TMDB API'],
      link: 'https://movie-suggestion-ai.vercel.app/',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Intelligent Medical Document RAG',
      type: 'Applied AI research',
      summary:
        'Retrieval-augmented generation pipeline for semantic question answering and summarization over large medical PDF corpora.',
      problem:
        'Long clinical and research documents are difficult to query quickly, and naive summarization can lose important context or cite the wrong source section.',
      implementation: [
        'Built a document-processing pipeline for PDF parsing, chunking, embedding, retrieval, and answer generation.',
        'Used LangChain-style orchestration and Claude API calls to connect retrieval context with generated responses.',
        'Focused on semantic search quality, answer grounding, and summarization workflows for dense documents.',
        'Designed the system as an explainable RAG workflow rather than a single opaque model call.'
      ],
      outcome:
        'Highlights RAG architecture, document intelligence, and responsible AI workflow design for high-context domains.',
      technologies: ['Python', 'Claude API', 'LangChain', 'RAG', 'PDF Processing', 'Semantic Search'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'BookMyGym',
      type: 'Full-stack product',
      summary:
        'Gym booking platform with real-time slot availability, user authentication, owner dashboards, and management workflows.',
      problem:
        'Local fitness booking needs clear availability, reliable reservations, and admin visibility without forcing users into manual back-and-forth scheduling.',
      implementation: [
        'Built booking flows with JWT authentication and role-aware user/owner experiences.',
        'Implemented backend APIs for gym listings, slots, reservations, and dashboard metrics.',
        'Used MongoDB and Express for flexible scheduling data and booking state management.',
        'Designed the UI for fast scanning across gyms, times, and reservation status.'
      ],
      outcome:
        'Demonstrates full-stack product execution from data model to responsive user experience.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      link: 'https://bookmygym.vercel.app/',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'CollabBoard',
      type: 'Realtime app',
      summary:
        'Collaborative whiteboard with live cursor movement, synchronized drawing state, canvas rendering, and undo/redo workflows.',
      problem:
        'Collaborative sketching tools need low-latency updates and predictable state handling so multiple users can work together without visual confusion.',
      implementation: [
        'Used WebSockets to synchronize drawing events and cursor activity across connected clients.',
        'Built canvas interactions for drawing, editing, clearing, and undo/redo behavior.',
        'Structured frontend state so local feedback remains responsive while shared state stays consistent.',
        'Designed a focused collaboration surface with minimal friction.'
      ],
      outcome:
        'Shows real-time architecture, frontend interaction design, and state synchronization skills.',
      technologies: ['React', 'Node.js', 'WebSockets', 'Canvas'],
      link: 'https://collab-board-nine.vercel.app/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Diabetic Retinopathy Detection',
      type: 'Computer vision research',
      summary:
        'Deep learning classifier for five-class diabetic retinopathy severity detection using retinal image preprocessing and ResNet50 fine-tuning.',
      problem:
        'Retinal screening workflows benefit from consistent image triage, but classification requires careful preprocessing and model evaluation.',
      implementation: [
        'Fine-tuned ResNet50 with PyTorch for multi-class severity classification.',
        'Built image preprocessing and inference workflows suitable for model demos and experimentation.',
        'Packaged the model experience for Hugging Face so reviewers can inspect the applied ML result.',
        'Focused on communicating model purpose, limitations, and technical setup clearly.'
      ],
      outcome:
        'Highlights model development, computer vision, and research-to-demo packaging.',
      technologies: ['PyTorch', 'ResNet50', 'Computer Vision', 'Hugging Face'],
      link: 'https://huggingface.co/spaces/nismal1u/diabetic_retinopathy_detection',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Constrained Feed Optimization',
      type: 'Optimization study',
      summary:
        'Linear programming analysis that models feed requirements under cost and nutrition constraints using Python-based optimization workflows.',
      problem:
        'Resource planning problems require tradeoff analysis across constraints, objectives, and feasible decision boundaries.',
      implementation: [
        'Modeled constraints, objective functions, and feasible regions using linear programming techniques.',
        'Created Python workflows for scenario analysis and data visualization.',
        'Translated optimization outputs into practical interpretation for decision-making.',
        'Documented assumptions and tradeoffs so the result is understandable beyond the math.'
      ],
      outcome:
        'Shows analytical engineering, optimization modeling, and communication of quantitative decisions.',
      technologies: ['Python', 'Linear Programming', 'NumPy', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ] as Project[],
  skillGroups: [
    {
      title: 'Frontend and product UI',
      icon: Layers,
      skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive UX']
    },
    {
      title: 'Backend and APIs',
      icon: Database,
      skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'GraphQL']
    },
    {
      title: 'AI, ML, and data',
      icon: Cpu,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'RAG', 'NLP', 'Computer Vision', 'Hugging Face']
    },
    {
      title: 'Systems and cloud',
      icon: GitBranch,
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Kafka', 'Docker', 'AWS', 'Kubernetes']
    }
  ],
  education: [
    'Graduate computer science studies with emphasis on software systems, AI/ML, and applied research.',
    'Hands-on portfolio spanning deployed apps, AI prototypes, backend architecture, and real-time systems.',
    'Professional engineering foundation from enterprise software work at Siemens Digital Industries Software.'
  ]
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-200 selection:bg-teal-300/30 selection:text-white">
      <Background3D />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#07111f_0%,#070b14_45%,#090b12_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,#000,transparent_90%)]" />

      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-base font-bold tracking-tight text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-300/30 bg-teal-300/10 text-sm text-teal-200 shadow-[0_0_24px_rgba(45,212,191,0.22)]">NM</span>
            <span>{portfolioData.name}</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-400 md:flex">
            <a href="#experience" className="transition-colors hover:text-white">Experience</a>
            <a href="#projects" className="transition-colors hover:text-white">Projects</a>
            <a href="#skills" className="transition-colors hover:text-white">Skills</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUpVariant} className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200">
                <Sparkles className="mr-2 h-4 w-4" /> {portfolioData.title}
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300">
                <MapPin className="mr-2 h-4 w-4 text-slate-400" /> {portfolioData.location}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
              Software engineering for AI products, backend systems, and polished user experiences.
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {portfolioData.headline}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#070B14] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(255,255,255,0.18)]">
                Explore case studies <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition-all hover:border-teal-300/40 hover:bg-teal-300/10">
                Contact me <Mail className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
            {portfolioData.proof.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} variants={fadeUpVariant} className="glass-card rounded-xl p-5">
                  <Icon className="mb-6 h-6 w-6 text-teal-200" />
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              );
            })}
            <motion.div variants={fadeUpVariant} className="glass-card rounded-xl p-5 sm:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Profile</p>
              <p className="mt-4 text-base leading-7 text-slate-300">{portfolioData.about}</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="border-t border-white/10 px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">What I bring</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Engineering judgement with product context.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {portfolioData.strengths.map((strength, index) => (
                <motion.div key={strength} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUpVariant} className="glass-card rounded-xl p-5">
                  <p className="mb-4 text-sm font-black text-teal-200">0{index + 1}</p>
                  <p className="leading-7 text-slate-300">{strength}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/10 px-5 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mx-auto max-w-6xl">
            <motion.div variants={fadeUpVariant} className="mb-14 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Professional and research experience</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Built across enterprise software, AI systems, and research prototypes.</h2>
            </motion.div>

            <div className="space-y-6">
              {portfolioData.experience.map((item) => (
                <motion.article key={item.role} variants={fadeUpVariant} className="glass-card rounded-xl p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-200">{item.role}</p>
                      <h3 className="mt-2 text-2xl font-black text-white">{item.company}</h3>
                    </div>
                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300">{item.period}</span>
                  </div>
                  <p className="mt-5 max-w-4xl leading-7 text-slate-300">{item.context}</p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.impact.map((point) => (
                      <div key={point} className="flex gap-3 rounded-lg border border-white/10 bg-black/15 p-4 text-sm leading-6 text-slate-300">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-200" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">{tool}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="border-t border-white/10 px-5 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mx-auto max-w-7xl">
            <motion.div variants={fadeUpVariant} className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Selected implementation work</p>
                <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Project case studies with architecture, tradeoffs, and outcomes.</h2>
              </div>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition-all hover:border-teal-300/40 hover:bg-teal-300/10">
                View GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <div className="grid gap-7">
              {portfolioData.projects.map((project, index) => (
                <motion.article key={project.name} variants={fadeUpVariant} className="glass-card overflow-hidden rounded-xl lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                    <img src={project.image} alt={project.name} className="h-full min-h-[260px] w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#070B14]/75 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-100 backdrop-blur-md">
                      {project.type}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-sm font-bold text-teal-100">Case study 0{index + 1}</p>
                      <h3 className="mt-2 text-3xl font-black text-white">{project.name}</h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-lg leading-8 text-slate-200">{project.summary}</p>

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-black/15 p-4">
                        <p className="mb-3 flex items-center text-sm font-black uppercase tracking-[0.16em] text-teal-200"><Gauge className="mr-2 h-4 w-4" /> Problem</p>
                        <p className="text-sm leading-6 text-slate-300">{project.problem}</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-black/15 p-4">
                        <p className="mb-3 flex items-center text-sm font-black uppercase tracking-[0.16em] text-teal-200"><Rocket className="mr-2 h-4 w-4" /> Outcome</p>
                        <p className="text-sm leading-6 text-slate-300">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-teal-200">Implementation details</p>
                      <div className="grid gap-3 md:grid-cols-2">
                        {project.implementation.map((point) => (
                          <div key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-200" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-xs font-semibold text-sky-100">{tech}</span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                      <a href={project.repo || portfolioData.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10">
                        <Github className="mr-2 h-4 w-4" /> Repository
                      </a>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-teal-300/30 bg-teal-300/10 px-4 py-2.5 text-sm font-bold text-teal-100 transition-all hover:bg-teal-300/20">
                          <ExternalLink className="mr-2 h-4 w-4" /> {project.link.includes('huggingface') ? 'Model demo' : 'Live demo'}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="border-t border-white/10 px-5 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mx-auto max-w-7xl">
            <motion.div variants={fadeUpVariant} className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Technical toolkit</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Tools I use to build, ship, and explain systems.</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {portfolioData.skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <motion.div key={group.title} variants={fadeUpVariant} className="glass-card rounded-xl p-6">
                    <Icon className="mb-6 h-7 w-7 text-teal-200" />
                    <h3 className="text-lg font-black text-white">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section className="border-t border-white/10 px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Education and direction</p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Focused on roles where software engineering and applied AI meet.</h2>
            </div>
            <div className="space-y-4">
              {portfolioData.education.map((item) => (
                <div key={item} className="glass-card flex gap-4 rounded-xl p-5 text-slate-300">
                  <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-teal-200" />
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 px-5 py-24 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="glass-card mx-auto max-w-4xl rounded-xl p-8 text-center md:p-12">
            <motion.p variants={fadeUpVariant} className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Contact</motion.p>
            <motion.h2 variants={fadeUpVariant} className="mt-4 text-3xl font-black text-white md:text-5xl">Let's build something useful.</motion.h2>
            <motion.p variants={fadeUpVariant} className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I am open to software engineering, AI/ML, full-stack, and research-oriented opportunities where thoughtful systems matter.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#070B14] transition-all hover:-translate-y-0.5">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/10">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/10">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070B14] px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {portfolioData.name}. Built with React, TypeScript, and Three.js.
      </footer>
    </div>
  );
}

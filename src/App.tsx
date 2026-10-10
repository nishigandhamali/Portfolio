import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Cpu,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Microscope,
  Network,
  Shield,
  Stethoscope
} from 'lucide-react';

const profile = {
  name: 'Nishigandha Mali',
  title: 'Software Engineer · AI/ML Researcher · Systems Builder',
  email: 'nishigandha.mali1111@gmail.com',
  github: 'https://github.com/nishigandhamali',
  linkedin: 'https://www.linkedin.com/in/nishigandha-mali-313751197/'
};

const experience = [
  {
    org: 'Siemens Digital Industries Software',
    role: 'Software Engineer',
    period: '2020 - 2025',
    label: 'Enterprise software',
    bullets: [
      'Built and maintained production software across backend services, full-stack features, and internal engineering workflows.',
      'Worked with cross-functional teams to translate requirements into reliable, maintainable implementations.',
      'Participated in Siemens hackathons, including an agentic AI logistics platform that reached the company-wide top 10.'
    ]
  },
  {
    org: 'Smart Systems Lab, University of Florida',
    role: 'Research Assistant',
    period: 'Apr 2026 - Present',
    label: 'Multi-camera human-robot collaboration',
    bullets: [
      'Built a multi-node ROS2 system in Python combining YOLOv8 stereo detection, ArUco 3D localization, and an Ollama LLM for natural-language object selection.',
      'Developing scene understanding, intent inference, and MoveIt2 inverse kinematics for grasp planning.',
      'Self-taught ROS2 for this work, including QoS settings, multithreaded executors, and DDS networking on isolated lab networks.'
    ]
  },
  {
    org: 'TEA Lab, University of Florida',
    role: 'Research Assistant',
    period: 'Apr 2026 - Aug 2026',
    label: 'Hallucination detection in video diffusion',
    bullets: [
      'Worked on prompt-consistency hallucination detection for text-to-video generation.',
      'Contributed to token-rank probing methods for reading prompt evidence back from generated video.',
      'Publication: “Reading the Prompt Back from the Video: Token-Rank Probing for Prompt-Consistency Hallucination in Text-to-Video Generation,” WACV 2027.'
    ]
  },
  {
    org: 'University of Florida',
    role: 'Software Engineer and Data Analyst',
    period: 'Sept 2026 - Present',
    label: 'AI-assisted agricultural development reviews',
    bullets: [
      'Develop Python and C++ software for a global plant-disease detection project using imagery.',
      'Lead grounding and hallucination control for an LLM pipeline that drafts agricultural desk reviews from FAO and CGIAR sources.',
      'Designed a claim-level labeling system: Supported, Contested, Insufficient Evidence, or Unsupported.',
      'Building a source-retrieval, cited-claim generation, and LLM-as-judge verification pipeline over large unstructured document collections with graph-based storage.'
    ]
  },
  {
    org: 'Br2AIn Lab, University of Florida',
    role: 'Research Assistant',
    period: 'Aug 2026 - Present',
    label: 'AD biomarker discovery pipeline',
    bullets: [
      'Build and own an end-to-end medical imaging pipeline for amyloid detection in Alzheimer patients from MRI data.',
      'Run DICOM-to-NIfTI conversion, FastSurfer brain segmentation in Apptainer on SLURM-managed HiPerGator, and radiomics feature extraction on clinical MRI data.',
      'Train and evaluate 3D deep learning models, including MONAI 3D EfficientNet and 3D ResNet, to predict amyloid presence from MRI.',
      'Caught a silent data-integrity bug from a stale HPC git checkout by re-verifying outputs against pipeline logs.'
    ]
  }
];

const papers = [
  {
    title: 'Anisotropic Noise Injection for DP-SGD',
    area: 'Differential Privacy',
    detail: 'Proposes anisotropic Gaussian noise for DP-SGD to preserve formal privacy guarantees while shaping noise around dominant gradient directions.'
  },
  {
    title: 'Reading the Prompt Back from the Video: Token-Rank Probing for Prompt-Consistency Hallucination in Text-to-Video Generation',
    area: 'WACV 2027',
    detail: 'Prompt-consistency hallucination detection for text-to-video generation using token-rank probing.'
  },
  {
    title: 'AI-assisted needs-assessment desk reviews for agricultural development',
    area: 'Agricultural AI',
    detail: 'Grounded LLM pipeline for cited agricultural desk reviews, claim-level verification, uncertainty rules, and evidence-gap detection.'
  }
];

const projectGroups = [
  {
    title: 'AI / ML and medical imaging',
    icon: Stethoscope,
    projects: [
      {
        name: 'Uncertainty-Aware Chest X-ray Classifier',
        meta: 'PyTorch · DenseNet121 · MC Dropout · Jul 2026',
        text: 'Chest X-ray classifier that estimates uncertainty and sends least-certain cases to a radiologist. Includes ECE calibration and risk-coverage analysis.',
        link: 'https://huggingface.co/nismal1u/chestX-rays-DenseNet121'
      },
      {
        name: 'Hyperspectral Band Selection for Crop Stress',
        meta: 'Python · scikit-learn · Streamlit · 2026',
        text: 'Compared Variance, Mutual Information, Random Forest, and SPA; reduced 215 bands to 30 while keeping about 96% of baseline AUC.',
        link: 'https://spectral-band-selection-for-crop-salt-stress-detection.streamlit.app/'
      },
      {
        name: 'Diabetic Retinopathy Detection',
        meta: 'PyTorch · ResNet50 · Gradio',
        text: 'Fine-tuned ResNet50 to grade retina images into five severity levels with CLAHE preprocessing and an interactive Gradio app.',
        link: 'https://huggingface.co/spaces/nismal1u/diabetic_retinopathy_detection'
      },
      {
        name: 'Privacy-Aware Training (DP-SGD)',
        meta: 'Python · PyTorch · Trustworthy ML',
        text: 'Anisotropic Gaussian noise method for DP-SGD that keeps privacy guarantees while improving utility at the same privacy budget.'
      },
      {
        name: 'ML Defense System',
        meta: 'PyTorch · ResNet · CIFAR-10/100',
        text: 'Three-layer defense using Gaussian smoothing, randomized ensembles, and temperature scaling; raised adversarial accuracy and reduced membership-inference success.',
        link: 'https://github.com/Nishig01/TrustworthyML-Defense'
      },
      {
        name: 'Medical Document RAG / PDF Intelligence Tool',
        meta: 'Python · LangChain · GPT-4 · Aug-Sep 2025',
        text: 'RAG pipeline for question answering and summarization over large PDF collections.'
      }
    ]
  },
  {
    title: 'Full-stack and product',
    icon: Briefcase,
    projects: [
      {
        name: 'DanceIQ',
        meta: 'Spring Boot · FastAPI · YOLOv8 · MediaPipe · PostgreSQL · Docker',
        text: 'Four-service Docker Compose system. A computer-vision service extracts 33 body keypoints per frame; DTW scores performance against a reference video.',
        link: 'https://teach-me-dance.vercel.app/'
      },
      {
        name: 'CollabBoard',
        meta: 'React 19 · TypeScript · Socket.IO · Express · Zustand',
        text: 'Real-time multi-user whiteboard with remote cursors, CRDT-style syncing, undo/redo, keyboard shortcuts, and image import/export.',
        link: 'https://collab-board-nine.vercel.app/'
      },
      {
        name: 'Webhook Gateway',
        meta: 'Spring Boot 3 · React · Kafka · Redis · Docker',
        text: 'Event-ingestion platform with HMAC-validated webhooks, Kafka fan-out, Redis-backed retries, and a live monitoring dashboard.'
      },
      {
        name: 'BookMyGym',
        meta: 'MERN · JWT · 2025',
        text: 'Gym booking platform with real-time slot availability, owner analytics, and JWT login.',
        link: 'https://bookmygym.vercel.app/'
      },
      {
        name: 'Movie Suggestion AI',
        meta: 'React · Redux · Firebase Auth · OpenAI · TMDB',
        text: 'Turns plain-language prompts such as mood, genre, or era into filters and returns ranked movie results.',
        link: 'https://github.com/Nishig01/MovieSuggestionAI'
      }
    ]
  },
  {
    title: 'Systems, security, C++ and CUDA',
    icon: Cpu,
    projects: [
      {
        name: 'Distributed Gossip and Push-Sum Simulator',
        meta: 'C++ · Actor model · 2025-26',
        text: 'Supports Full, Line, 3D, and Imperfect 3D topologies with convergence and termination detection; benchmarked with 50K-100K+ concurrent actors.',
        link: 'https://github.com/nishigandhamali/Distributed_Gossip_Push_Sum'
      },
      {
        name: 'Datacenter Cooling Load Balancer',
        meta: 'C++17 · Graph algorithms · Gnuplot · 2025',
        text: 'Greedy heap-optimized cooling allocation on a weighted graph with thermal simulation; reduced peak rack temperature by 21%.',
        link: 'https://github.com/Nishig01/datacenter-cooling-greedy-algorithm'
      },
      {
        name: 'Social Feed Optimization',
        meta: 'Python · Greedy MAX-SAT',
        text: 'Selects posts to maximize engagement under 25 safety and diversity constraints; reached 100% constraint satisfaction and scaled roughly linearly to 5,000 posts.',
        link: 'https://github.com/Nishig01/Feed-Optimization'
      },
      {
        name: 'Pascal/Delphi LLVM Compiler',
        meta: 'C++ · LLVM · Coursework',
        text: 'Lexer, parser, and code generation to LLVM IR.'
      },
      {
        name: 'Password Cracking',
        meta: 'Security coursework',
        text: 'Security-focused coursework project around password-cracking workflows and defensive understanding.'
      },
      {
        name: 'Client, Admin, Server Network Security',
        meta: 'Computer networks and security',
        text: 'Network-security coursework covering client, administrator, and server-side roles.'
      },
      {
        name: 'Distributed Bitcoin Miner',
        meta: 'Erlang/OTP · Actor model · SHA-256 · Sep 2026',
        text: 'Parallel proof-of-work miner using boss/worker actors, non-overlapping candidate ranges, remote workers, and no shared state.'
      },
      {
        name: 'CUDA Attention Kernel Optimizer',
        meta: 'CUDA · Nsight · In progress',
        text: 'Tiled and fused attention with online softmax on an L4 GPU. Step 1 of 8 is complete.'
      },
      {
        name: 'CUDA Spectral Band Correlation',
        meta: 'CUDA · Hyperspectral imaging · In progress',
        text: 'GPU kernel for correlation across 215 hyperspectral bands, extending the crop-stress band-selection project.'
      },
      {
        name: 'LLM Inference Platform',
        meta: 'vLLM · TensorRT-LLM · Triton · Planned',
        text: 'Planned inference-serving platform focused on high-throughput LLM deployment, batching, and GPU-aware serving.'
      }
    ]
  }
];

const skills = [
  'Python', 'C++', 'Java', 'TypeScript', 'React', 'Spring Boot', 'FastAPI', 'PyTorch', 'MONAI', 'ROS2',
  'CUDA', 'Kafka', 'Redis', 'Docker', 'SLURM', 'Apptainer', 'LangChain', 'MoveIt2', 'PostgreSQL', 'MongoDB'
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand">Nishigandha Mali</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#papers">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="hero-copy">
            <p className="eyebrow">Software Engineer · AI/ML · Medical Imaging · Distributed Systems</p>
            <h1>{profile.name}</h1>
            <p className="hero-line">I build research-backed software across AI, medical imaging, robotics, privacy, and scalable systems.</p>
            <div className="hero-actions">
              <a href="#experience">View experience</a>
              <a href="#projects">View projects</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="hero-card">
            <p>Current focus</p>
            <h2>AI systems that can be verified.</h2>
            <span>Grounded LLMs, medical imaging pipelines, DP-SGD, ROS2 robotics, and systems coursework.</span>
          </motion.div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeading eyebrow="Experience" title="Five roles, kept separate." text="Professional software engineering, three research labs, and UF software/data work." />
          <div className="timeline-list">
            {experience.map((item) => (
              <article className="experience-row" key={`${item.org}-${item.role}`}>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <p>{item.label}</p>
                </div>
                <div className="experience-body">
                  <h3>{item.role}</h3>
                  <h4>{item.org}</h4>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="papers" className="content-section soft-section">
          <SectionHeading eyebrow="Research papers" title="Three research directions." />
          <div className="paper-grid">
            {papers.map((paper) => (
              <article className="paper-card" key={paper.title}>
                <FileText aria-hidden="true" />
                <p>{paper.area}</p>
                <h3>{paper.title}</h3>
                <span>{paper.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeading eyebrow="Projects" title="Selected technical work." text="Grouped by domain so the page is easy to scan." />
          <div className="project-groups">
            {projectGroups.map((group) => {
              const Icon = group.icon;
              return (
                <section className="project-group" key={group.title}>
                  <div className="group-title">
                    <Icon aria-hidden="true" />
                    <h3>{group.title}</h3>
                  </div>
                  <div className="project-grid">
                    {group.projects.map((project) => (
                      <article className="project-card" key={project.name}>
                        <div>
                          <h4>{project.name}</h4>
                          <p className="project-meta">{project.meta}</p>
                          <p className="project-text">{project.text}</p>
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                            Open <ArrowUpRight aria-hidden="true" />
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section id="skills" className="content-section soft-section">
          <SectionHeading eyebrow="Skills" title="Core technical stack." />
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="content-section compact-section">
          <div className="mini-grid">
            <article>
              <Microscope aria-hidden="true" />
              <h3>Research</h3>
              <p>Medical imaging, robotics, hallucination detection, differential privacy, and agricultural AI.</p>
            </article>
            <article>
              <Network aria-hidden="true" />
              <h3>Systems</h3>
              <p>DOSP, distributed actors, networking, security coursework, C++, Erlang, and CUDA kernels.</p>
            </article>
            <article>
              <Shield aria-hidden="true" />
              <h3>Trustworthy AI</h3>
              <p>Grounding, citation enforcement, uncertainty, privacy-aware training, and model verification.</p>
            </article>
            <article>
              <GraduationCap aria-hidden="true" />
              <h3>Coursework</h3>
              <p>MLE, DOSP, security, computer networks, compiler design, CUDA, and machine learning systems.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">Contact</p>
          <h2>Open to software engineering, AI/ML, and research engineering roles.</h2>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /> Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}

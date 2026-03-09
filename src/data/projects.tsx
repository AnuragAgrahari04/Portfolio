import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiDjango, SiDocker, SiGooglecloud, SiHuggingface,
  SiLangchain, SiNumpy, SiOpencv, SiPandas,
  SiPostgresql, SiPython, SiReact, SiRedis,
  SiScikitlearn, SiStreamlit, SiTensorflow, SiFastapi,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    {live && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Live Demo <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
    {repo && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
        <Button variant={"outline"} size={"sm"}>
          <Github className="mr-2 w-4 h-4" /> GitHub
        </Button>
      </Link>
    )}
  </div>
);

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const S = (title: string, icon: ReactNode): Skill => ({ title, bg: "black", fg: "white", icon });

const PS = {
  python:       S("Python",             <SiPython />),
  pytorch:      S("PyTorch",            <SiTensorflow />),
  sklearn:      S("Scikit-learn",       <SiScikitlearn />),
  opencv:       S("OpenCV",             <SiOpencv />),
  langchain:    S("LangChain",          <SiLangchain />),
  huggingface:  S("HuggingFace",        <SiHuggingface />),
  docker:       S("Docker",             <SiDocker />),
  ros:          S("ROS",                <FaRobot />),
  streamlit:    S("Streamlit",          <SiStreamlit />),
  numpy:        S("NumPy",              <SiNumpy />),
  pandas:       S("Pandas",             <SiPandas />),
  react:        S("React",              <SiReact />),
  django:       S("Django",             <SiDjango />),
  fastapi:      S("FastAPI",            <SiFastapi />),
  postgres:     S("PostgreSQL",         <SiPostgresql />),
  redis:        S("Redis",              <SiRedis />),
  gcp:          S("Google Places API",  <SiGooglecloud />),
  tensorflow:   S("TensorFlow",         <SiTensorflow />),
  llm:          S("LLaMA3 / Groq",      <span style={{fontSize:"0.65rem",fontWeight:"bold"}}>LLM</span>),
  blip:         S("Salesforce BLIP",    <span style={{fontSize:"0.65rem",fontWeight:"bold"}}>BLIP</span>),
  whisper:      S("Groq Whisper",       <span style={{fontSize:"0.65rem",fontWeight:"bold"}}>STT</span>),
  agora:        S("Agora SDK",          <span style={{fontSize:"0.65rem",fontWeight:"bold"}}>AV</span>),
  efficientnet: S("EfficientNetV2",     <span style={{fontSize:"0.65rem",fontWeight:"bold"}}>CNN</span>),
  gemini:       S("Gemini API",         <span style={{fontSize:"0.65rem",fontWeight:"bold"}}>LLM</span>),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  // ─── 1. MEDICATE ────────────────────────────────────────────────────────────
  {
    id: "medicate",
    category: "Healthcare AI",
    title: "Medicate",
    src: `${BASE_PATH}/medicate/landing.png`,
    screenshots: ["landing.png"],
    live: "https://web-production-e2451.up.railway.app",
    github: "https://github.com/AnuragAgrahari04/MediCate",
    skills: {
      frontend: [PS.react],
      backend: [PS.python, PS.django, PS.sklearn, PS.postgres, PS.redis, PS.gcp, PS.agora, PS.gemini],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A production-grade AI Health Platform achieving <strong>97% disease
            prediction accuracy</strong> across 42 diseases from 132 symptoms.
            Patients can find nearby doctors, chat live, and start video
            consultations — all from one platform.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={[`${BASE_PATH}/medicate/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">97% ML Accuracy</TypographyH3>
          <p className="font-mono mb-2">
            Built with Django + Scikit-learn, the model was trained across 42
            disease classes with 132 symptom inputs. Rigorous cross-validation
            and model selection ensured production-grade reliability across edge
            cases.
          </p>

          <TypographyH3 className="my-4 mt-8">Full Telehealth Platform</TypographyH3>
          <p className="font-mono mb-2">
            Real-time doctor discovery via OpenStreetMap Overpass API.
            WebSocket-based live chat, video consultations via Agora SDK, and a
            Gemini-powered AI Medical Assistant. Deployed on Railway with
            PostgreSQL, Redis, and Daphne ASGI — zero manual server management.
          </p>
        </div>
      );
    },
  },

  // ─── 2. GOV-COMPLAINT-BOX ───────────────────────────────────────────────────
  {
    id: "gov-complaint-box",
    category: "Full-Stack AI",
    title: "Gov-Complaint-Box",
    src: `${BASE_PATH}/gov-complaint-box/landing.png`,
    screenshots: ["landing.png"],
    live: "https://github.com/AnuragAgrahari04/Gov-Complaint-Box#readme",
    github: "https://github.com/AnuragAgrahari04/Gov-Complaint-Box",
    skills: {
      frontend: [PS.react],
      backend: [PS.python, PS.llm, PS.langchain, PS.blip, PS.whisper, PS.docker],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A full-stack AI-powered government grievance platform where citizens
            submit complaints via <strong>text, image, or voice</strong>.
            LLaMA3 + LangChain automatically classifies urgency and routes each
            complaint to the correct department — no human triage needed.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={[`${BASE_PATH}/gov-complaint-box/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">Multimodal Intake</TypographyH3>
          <p className="font-mono mb-2">
            Salesforce BLIP handles image captioning, Groq Whisper transcribes
            voice recordings, and Sentence Transformers detect duplicate
            complaints before submission — all orchestrated through LangChain.
          </p>

          <TypographyH3 className="my-4 mt-8">Admin Intelligence</TypographyH3>
          <p className="font-mono mb-2">
            The React admin portal surfaces an analytics dashboard, geo-heatmap
            of complaint clusters, and real-time push notifications. Deployed on
            Render (backend) and Vercel (frontend).
          </p>
        </div>
      );
    },
  },

  // ─── 3. PLANTMD PRO ─────────────────────────────────────────────────────────
  {
    id: "plantmd-pro",
    category: "Computer Vision AI",
    title: "PlantMD Pro",
    src: `${BASE_PATH}/plantmd-pro/landing.png`,
    screenshots: ["landing.png"],
    live: "https://plantmd-pro-042004.streamlit.app",
    github: "https://github.com/AnuragAgrahari04/PlantMD-Pro",
    skills: {
      frontend: [PS.streamlit],
      backend: [PS.python, PS.tensorflow, PS.efficientnet, PS.numpy, PS.pandas],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An AI-powered plant disease detection system using{" "}
            <strong>EfficientNetV2-S</strong> trained on the PlantVillage
            dataset. Upload a leaf image and get an instant diagnosis with
            confidence score, severity rating, and a full treatment plan —
            in under 100ms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={[`${BASE_PATH}/plantmd-pro/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">~95% Top-1 Accuracy</TypographyH3>
          <p className="font-mono mb-2">
            EfficientNetV2-S trained with transfer learning across 38 disease
            classes on the PlantVillage dataset. GPU-accelerated inference
            delivers results in under 100ms with Grad-CAM heatmap visualization
            for explainability.
          </p>

          <TypographyH3 className="my-4 mt-8">Treatment Intelligence</TypographyH3>
          <p className="font-mono mb-2">
            Beyond classification — the system outputs crop-specific treatment
            plans including immediate actions, fungicide recommendations, and
            prevention strategies. Supports Tomato, Potato, Pepper, Corn,
            Apple, Grape, and more.
          </p>
        </div>
      );
    },
  },

  // ─── 4. MOVIE RECOMMENDER ───────────────────────────────────────────────────
  {
    id: "movie-recommender",
    category: "Recommendation System",
    title: "Movie Recommendation App",
    src: `${BASE_PATH}/movie-recommender/landing.png`,
    screenshots: ["landing.png"],
    live: "https://movie-recommendation-system-2004.streamlit.app",
    github: "https://github.com/AnuragAgrahari04/Movie-Recommendation-System",
    skills: {
      frontend: [PS.streamlit],
      backend: [PS.python, PS.sklearn, PS.pandas, PS.numpy],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A scalable content-based movie recommendation engine built on the
            TMDB dataset. TF-IDF vectorization and cosine similarity on movie
            metadata serve personalized suggestions — resulting in a{" "}
            <strong>40% boost in user retention</strong>.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={[`${BASE_PATH}/movie-recommender/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">NLP-Enhanced Relevance</TypographyH3>
          <p className="font-mono mb-2">
            Similarity scoring runs across genres, cast, crew, keywords, and
            overview text. The NLP pipeline significantly improved
            recommendation quality beyond basic genre matching, measurably
            increasing engagement.
          </p>
        </div>
      );
    },
  },

  // ─── 5. SMART TICKET CLASSIFIER ─────────────────────────────────────────────
  {
    id: "ticket-classifier",
    category: "MLOps / NLP",
    title: "Smart Ticket Classifier",
    src: `${BASE_PATH}/ticket-classifier/landing.png`,
    screenshots: ["landing.png"],
    live: "https://ticket-classifier-04.streamlit.app",
    github: "https://github.com/AnuragAgrahari04/Ticket-Classifier",
    skills: {
      frontend: [PS.streamlit],
      backend: [PS.python, PS.sklearn, PS.langchain, PS.pandas, PS.numpy],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A real-time support ticket classification system with{" "}
            <strong>vector-based content gap analysis</strong>. Automatically
            assigns severity (Critical / High / Medium / Low), routes tickets
            to the right team, and flags knowledge base gaps before they
            become support bottlenecks.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow images={[`${BASE_PATH}/ticket-classifier/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">Content Gap Detection</TypographyH3>
          <p className="font-mono mb-2">
            Vector similarity matching against an existing knowledge base
            identifies tickets with no good existing answer. Real-time metrics
            track gap ratio, successful KB matches, and total tickets analyzed
            — with live chart visualization.
          </p>

          <TypographyH3 className="my-4 mt-8">Configurable Display</TypographyH3>
          <p className="font-mono mb-2">
            Column visibility toggles, severity-based row filters, and a
            sortable data table give ops teams full control over what they
            see. Reports update live with timestamp.
          </p>
        </div>
      );
    },
  },

  // ─── 6. AIR CANVAS ──────────────────────────────────────────────────────────
  {
    id: "air-canvas",
    category: "Computer Vision",
    title: "Air Canvas",
    src: `${BASE_PATH}/air-canvas/landing.png`,
    screenshots: ["landing.png"],
    live: undefined,
    github: "https://github.com/AnuragAgrahari04",
    skills: {
      frontend: [],
      backend: [PS.python, PS.opencv],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A hands-free virtual drawing board using OpenCV that tracks
            fingertip movements in real time via a standard webcam — no
            hardware, no stylus, no touchscreen required.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <SlideShow images={[`${BASE_PATH}/air-canvas/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-2">
            HSV color masking and contour detection locate the fingertip
            frame-by-frame. Hand movement maps directly to canvas strokes in
            real time — intuitive, hardware-free, and runs on any webcam.
          </p>

          <TypographyH3 className="my-4 mt-8">80% Engagement Boost</TypographyH3>
          <p className="font-mono mb-2">
            Demonstrated live in college club sessions — sparked widespread
            interest in computer vision as a creative and practical tool,
            increasing student engagement by 80%.
          </p>
        </div>
      );
    },
  },
];

export default projects;

const config = {
  title: "Anurag Agrahari | ML & AI Engineer",
  description: {
    long: "Explore the portfolio of Anurag Agrahari, an aspiring Machine Learning Engineer specializing in AI-powered applications, LLM pipelines, RAG systems, and full-stack development. Discover projects like Gov-Complaint-Box, Medicate, and more. Recognized by Amazon for outstanding performance in their ML Summer School. Let's build something intelligent together!",
    short:
      "Discover the portfolio of Anurag, an ML Engineer building AI-powered applications, LLM agents, and innovative full-stack projects.",
  },
  keywords: [
    "Anurag Agrahari",
    "portfolio",
    "machine learning engineer",
    "AI developer",
    "generative AI",
    "LLM pipelines",
    "RAG",
    "LangChain",
    "full-stack developer",
    "Gov-Complaint-Box",
    "Medicate",
    "deep learning",
    "computer vision",
    "PyTorch",
    "React",
    "Next.js",
    "FastAPI",
    "Django",
  ],
  author: "Anurag Agrahari",
  email: "anurag.042004@gmail.com",
  site: "https://anuragagrahari.vercel.app", // update once deployed

  // for github stars button
  githubUsername: "AnuragAgrahari04",
  githubRepo: "3d-portfolio", // update to your forked repo name

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/anurag-agrahari-a3b6552a6",
    instagram: "https://www.instagram.com/anurag_agrahari_04",
    github: "https://github.com/AnuragAgrahari04",
  },
};
export { config };
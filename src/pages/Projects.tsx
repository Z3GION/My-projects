import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Book, Type, Droplet, Laptop, Wine } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Novel Scraper",
    description: "A scraper that pulls entire novels from multiple sources, built for efficient and reliable content extraction.",
    icon: Book,
    link: "https://github.com/yourusername/novel-scraper",
    bg: "from-[#f2fce2] to-[#e5deff]"
  },
  {
    title: "Typing Tester",
    description: "Test your typing speed and accuracy with a beautiful, interactive interface.",
    icon: Type,
    link: "https://github.com/yourusername/typing-tester",
    bg: "from-[#d3e4fd] to-[#b1abd4]"
  },
  {
    title: "Water Quality System (Streamlit)",
    description: "Analyse and predict water quality using machine learning, with an interactive dashboard built in Streamlit.",
    icon: Droplet,
    link: "https://github.com/yourusername/water-quality-streamlit",
    bg: "from-[#e5deff] to-[#f2fce2]"
  },
  {
    title: "Laptop Price Prediction",
    description: "A web tool that predicts laptop prices using detailed specs and machine learning models.",
    icon: Laptop,
    link: "https://github.com/yourusername/laptop-price-prediction",
    bg: "from-[#f2fce2] to-[#b1abd4]"
  },
  {
    title: "Wine Quality Prediction",
    description: "Quickly predict wine quality from its characteristics using advanced ML algorithms.",
    icon: Wine,
    link: "https://github.com/yourusername/wine-quality-prediction",
    bg: "from-[#d3e4fd] to-[#e5deff]"
  },
];

const Projects = () => (
  <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-tr from-[#e5deff] via-[#f2fce2]/60 to-[#d3e4fd]/60 py-12 px-4">
    <h1 className="text-4xl font-bold mb-2 tracking-tight text-primary">My Projects</h1>
    <p className="text-muted-foreground mb-8 max-w-2xl text-center">
      Explore some of my favorite machine learning and automation projects.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
      {projects.map(({ title, description, icon: Icon, link, bg }) => (
        <Card key={title} className={`shadow-lg bg-gradient-to-br ${bg} hover-scale transition-transform duration-200`}>
          <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-border">
            <div className="bg-white/90 rounded-full p-2 shadow">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">{description}</CardDescription>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition text-sm font-semibold shadow"
            >
              View Project
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Projects;

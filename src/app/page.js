import Main from "./components/Main";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Main />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}

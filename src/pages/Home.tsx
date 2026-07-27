import MainLayout from "../layouts/MainLayout";
import { usePortfolio } from "../hooks/usePortfolio";

import Hero from "../components/section/Hero";
import About from "../components/section/About/About";
import Technologies from "../components/section/Technologies/Technologies";
import Projects from "../components/section/Projects/Projects";
import ExperienceSection from "../components/section/Experience/ExperienceSection";
import Education from "../components/section/Education/Education";
import Contact from "../components/section/Contact/Contact";

import LoadingScreen from "../components/UI/Loading/LoadingScreen";
import SEO from "../components/SEO/SEO";

const Home = () => {
  const { portfolio, loading, error } = usePortfolio();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <MainLayout>
        <p className="p-10 text-center text-red-500">
          {error}
        </p>
      </MainLayout>
    );
  }

  if (!portfolio || !portfolio.biography) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400">
            No hay información del portafolio disponible.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <SEO
        title="Nicolás Paulo | Full Stack Developer"
        description="Desarrollador Full Stack especializado en Django, React, TypeScript y PostgreSQL."
      />

      <Hero
        biography={portfolio.biography}
        technologies={portfolio.technologies}
      />

      <About biography={portfolio.biography} />

      <Technologies technologies={portfolio.technologies} />

      <Projects projects={portfolio.projects} />

      <ExperienceSection experiences={portfolio.experiences} />

      <Education education={portfolio.education} />

      <Contact />

    </MainLayout>
  );
};

export default Home;
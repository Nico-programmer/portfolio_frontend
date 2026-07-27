import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "technologies",
  "projects",
  "experience",
  "education",
  "contact",
];

const useActiveSection = () => {
  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        threshold: [
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
          0.6,
        ],
        rootMargin: "-80px 0px -35% 0px",
      }
    );

    sections.forEach((id) => {
      const element =
        document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};

export default useActiveSection;
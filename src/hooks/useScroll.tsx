import { useEffect, useState, RefObject } from "react";

interface Section {
  id: string;
  ref: RefObject<HTMLElement>;
}

export function useScroll(sections: Section[]) {
  const [currentViewSection, setCurrentViewSection] = useState<string>(
    sections[0].id
  );
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  const scrollProgress = Math.floor(
    (isAtBottom
      ? 1
      : sections.findIndex((e) => e.id === currentViewSection) /
        sections.length) * 100
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomThreshold = documentHeight - window.innerHeight - 1;

      if (currentViewSection === sections[sections.length - 1].id) {
        setIsAtBottom(scrollPosition >= bottomThreshold);
      } else {
        setIsAtBottom(false);
      }

      const scrollMidPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.find((section) => {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            scrollMidPosition >= offsetTop &&
            scrollMidPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (currentSection && currentSection.id !== currentViewSection) {
        setCurrentViewSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentViewSection, sections]);

  const scrollToSection = (sectionId: string) => {
    const section = sections.find((sec) => sec.id === sectionId);
    if (section && section.ref.current) {
      section.ref.current.scrollIntoView({ behavior: "smooth" });
      setCurrentViewSection(sectionId);
    }
  };

  const goNextSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === currentViewSection
    );
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];
    if (nextSection) {
      scrollToSection(nextSection.id);
    }
  };

  const goPrevSection = () => {
    const currentIndex = sections.findIndex(
      (section) => section.id === currentViewSection
    );
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    const prevSection = sections[prevIndex];
    if (prevSection) {
      scrollToSection(prevSection.id);
    }
  };

  return {
    currentViewSection,
    scrollToSection,
    goNextSection,
    goPrevSection,
    isAtBottom,
    scrollProgress,
  };
}

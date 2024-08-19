export type StudyContent = {
  title: string;
  orignalTitle?: string;
  subtitle: string;
  description: string;
  type: "book" | "article" | "documentation" | "video lecture";
  duration: string;
  images: string[];
  link: string;
  isFinished: boolean;
};

export const STUDY_CONTENT: StudyContent[] = [
  {
    title: "모던 자바스크립트 딥 다이브",
    orignalTitle: "Modern JavaScript Deep Dive",
    subtitle: "자바스크립트의 핵심 개념과 동작 원리",
    description: "The book is about modern JavaScript.",
    duration: "2023.09.09 - 2023.12.30",
    type: "book",
    images: ["/book-1.png"],
    link: "https://github.com/dusunax/javascript/tree/main/ppts/javascript",
    isFinished: true,
  },
  {
    title: "모던 리액트 딥 다이브",
    orignalTitle: "Modern React Deep Dive",
    subtitle: "리액트의 핵심 개념과 동작 원리",
    description: "The book is about modern React.",
    duration: "2024.03.04 - 2024.04.28",
    type: "book",
    images: ["/book-2.png"],
    link: "https://github.com/monthly-cs/2024-03-modern-react-deep-dive/tree/main/docs/dusunax/presentation",
    isFinished: true,
  },
  {
    title: "이펙티브 타입스크립트",
    orignalTitle: "Effective TypeScript",
    subtitle: "타입스크립트의 동작 원리의 이해와 구체적인 조언 62가지",
    description: "The book is about effective TypeScript.",
    duration: "2024.05.12 - 2024.06.30",
    type: "book",
    images: ["/book-3.png"],
    link: "https://github.com/dusunax/javascript/tree/main/ppts/typescript",
    isFinished: true,
  },
  {
    title: "개발자 온보딩 가이드",
    orignalTitle: "The Missing Readme",
    subtitle: "개발자 온보딩 가이드",
    description: "The book is about developer onboarding guide.",
    duration: "2024.08 -",
    type: "book",
    isFinished: false,
    images: ["/book-4.png"],
    link: "",
  },
];

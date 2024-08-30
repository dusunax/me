import dynamic from "next/dynamic";

export const DynamicViewer = dynamic(
  () => import("@components/viewer/Viewer"),
  {
    ssr: false,
    loading: () => <></>,
  }
);

import dynamic from "next/dynamic";

const DynamicViewer = dynamic(() => import("@components/viewer/Viewer"), {
  ssr: false,
  loading: () => null,
});
DynamicViewer.displayName = "DynamicViewer";
export { DynamicViewer };

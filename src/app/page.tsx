import CustomCursorProvider from "@/components/CustomCursorProvider";
import ScreenLoading from "@/components/ScreenLoading";
import MainSections from "@/components/sections/MainSections";

export default function Home() {
  return (
    <CustomCursorProvider>
      <ScreenLoading />
      <MainSections />
    </CustomCursorProvider>
  );
}

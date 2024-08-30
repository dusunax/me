import CustomCursorProvider from "@/components/CustomCursorProvider";
import MainSections from "@/components/sections/MainSections";
import { SupabaseProvider } from "@/context/SupabaseContext";

export default async function Home() {
  return (
    <SupabaseProvider>
      <CustomCursorProvider>
        <MainSections />
      </CustomCursorProvider>
    </SupabaseProvider>
  );
}

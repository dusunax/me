import BusinessNameCard from "@/components/BusinessNameCard";
import CustomCursorProvider from "@/components/CustomCursorProvider";
import MainSections from "@/components/sections/MainSections";
import { SupabaseProvider } from "@/context/SupabaseContext";

export default async function Home({
  searchParams,
}: {
  searchParams: { method: string };
}) {
  return (
    <SupabaseProvider>
      <CustomCursorProvider>
        {searchParams?.method === "qr" && <BusinessNameCard />}
        <MainSections />
      </CustomCursorProvider>
    </SupabaseProvider>
  );
}

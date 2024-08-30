import { DoubleArrowDownIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { useScroll } from "@hooks/useScroll";
import ScrollProgress from "./ScrollProgress";

export default function ScrollControl({
  goNextSection,
  goPrevSection,
  scrollProgress,
}: {
  goNextSection: ReturnType<typeof useScroll>["goNextSection"];
  goPrevSection: ReturnType<typeof useScroll>["goPrevSection"];
  scrollProgress: ReturnType<typeof useScroll>["scrollProgress"];
}) {
  return (
    <div className="fixed top-5 right-4 z-[50] flex flex-col gap-2 justify-center items-center">
      <button className="rounded-full shadow-md p-1" onClick={goPrevSection}>
        <DoubleArrowUpIcon width={10} height={10} />
      </button>
      <ScrollProgress percentage={scrollProgress} />
      <button className="rounded-full shadow-md p-1" onClick={goNextSection}>
        <DoubleArrowDownIcon width={10} height={10} />
      </button>
    </div>
  );
}

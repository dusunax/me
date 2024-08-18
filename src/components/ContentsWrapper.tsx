export default function ContentsWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full max-w-screen-2xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

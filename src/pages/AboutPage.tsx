import { useSearchParams } from "react-router-dom";
import { aboutRecords } from "../data/aboutRecords";
import AboutContent from "../components/AboutContent";
import NotFound from "../components/NotFound";

export default function AboutPage() {
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const id = Number(idParam);

  const record = aboutRecords.find((r) => r.id === id);

  if (!idParam || isNaN(id) || !record) {
    return <NotFound />;
  }

  return (
<div className="min-h-screen flex items-center justify-center px-6 font-mono">
  <div
    className="
      w-full
      max-w-sm
      sm:max-w-md
      h-[68vh]
      mt-6
      border
      border-[rgba(124,255,178,0.25)]
      bg-[rgba(2,6,23,0.65)]
      text-[#7CFFB2]
      flex
      flex-col
      overflow-hidden
    "
  >
    <AboutContent record={record} />
  </div>
</div>
  );
}

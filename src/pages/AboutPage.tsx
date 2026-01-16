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

  return <AboutContent record={record} />;
}

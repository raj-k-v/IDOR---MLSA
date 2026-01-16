import type { AboutRecord } from "../data/aboutRecords";


type Props = {
  record: AboutRecord;
};

export default function AboutContent({ record }: Props) {
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <h1>{record.title}</h1>
      <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
        {record.body}
      </pre>
    </div>
  );
}

import type { AboutRecord } from "../data/aboutRecords";

type Props = {
  record: AboutRecord;
};

export default function AboutContent({ record }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-xs tracking-[0.35em] uppercase text-[#9CA3AF]">
        {record.title}
      </div>

      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-[#7CFFB2]">
        {record.body}
      </pre>
    </div>
  );
}

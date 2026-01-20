import type { AboutRecord } from "../data/aboutRecords";
import {
  ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area";

type Props = {
  record: AboutRecord;
};

export default function AboutContent({ record }: Props) {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed header */}
      <div className="shrink-0 px-6 pt-6 pb-4">
        <div className="text-xs tracking-[0.35em] uppercase text-[#9CA3AF]">
          {record.title}
        </div>
      </div>

      {/* Scrollable body — HEIGHT IS NOW CONSTRAINED */}
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full px-6 pb-6">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-[#7CFFB2]">
            {record.body}
          </pre>

          {/* Visible scrollbar */}
          <ScrollBar
            orientation="vertical"
            forceMount
            className="w-2"
          />
        </ScrollArea>
      </div>
    </div>
  );
}

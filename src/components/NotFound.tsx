export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-mono">
      <div
        className="
          w-full
          max-w-md
          px-6
          py-10
          border
          border-[rgba(124,255,178,0.25)]
          bg-[rgba(2,6,23,0.65)]
          text-[#7CFFB2]
          flex
          flex-col
          gap-6
        "
      >
        <div className="text-xs tracking-[0.35em] uppercase text-[#9CA3AF]">
          ACCESS FAILURE
        </div>

        <p className="text-sm">
          Record does not exist.
        </p>
      </div>
    </div>
  );
}

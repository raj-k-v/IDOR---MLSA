export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 font-mono">
      <div
        className="
          w-full
          max-w-4xl
          px-10
          py-8
          border
          border-[rgba(124,255,178,0.25)]
          bg-[rgba(2,6,23,0.65)]
          text-[#7CFFB2]
        "
      >
        <div className="text-xs tracking-[0.35em] uppercase text-[#9CA3AF]"> 
          ACCESS FAILURE
        </div>

        <p className="mt-6 text-sm">
          Record does not exist.
        </p>
      </div>
    </div>
  );
}

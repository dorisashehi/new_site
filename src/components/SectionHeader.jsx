export default function SectionHeader({ label, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-accent">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">{title}</h2>
      {description && <p className="text-muted leading-relaxed">{description}</p>}
    </div>
  );
}

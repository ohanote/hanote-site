import { landingData } from "../../data/siteData";

export default function LandingAuthorityBar() {
  return (
    <section className="section-light border-y" style={{ borderColor: "var(--color-border)" }}>
      <div className="site-container grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
        {landingData.authorityItems.map((item) => (
          <div
            key={item}
            className="rounded-[var(--radius-md)] border px-4 py-4 text-center text-sm font-semibold"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
              color: "var(--color-title)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
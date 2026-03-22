import { ShieldCheck, Award, Clock } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    label: "Licensed irrigation contractor",
  },
  {
    icon: Award,
    label: "10+ years industry experience",
  },
  {
    icon: Clock,
    label: "Free estimates · responsive service",
  },
] as const;

export function TrustBadges() {
  return (
    <ul className="trust-badges" aria-label="Trust highlights">
      {BADGES.map(({ icon: Icon, label }) => (
        <li key={label} className="trust-badges__item">
          <Icon className="trust-badges__icon" size={22} aria-hidden />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

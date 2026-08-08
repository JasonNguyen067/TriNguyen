import { EMAIL, LINKEDIN } from "@/lib/contact";

const linkClass = "text-orange-400 transition-colors hover:text-orange-300";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-10 lg:px-12">
      <p className="text-xs text-foreground/45">
        email <a href={`mailto:${EMAIL}`} className={linkClass}>{EMAIL}</a> for
        inquiries, or find me on{" "}
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          linkedin
        </a>
      </p>
    </footer>
  );
}

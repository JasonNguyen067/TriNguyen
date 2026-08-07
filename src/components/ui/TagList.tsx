type TagListProps = {
  tags: string[];
  className?: string;
};

/** the small outlined pills used for tags and event names */
export default function TagList({ tags, className = "" }: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border px-3 py-1 text-[11px] text-foreground/70"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

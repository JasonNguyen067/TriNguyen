import type { ComponentPropsWithoutRef, ReactNode } from "react";

type EyebrowProps = ComponentPropsWithoutRef<"p"> & {
  children: ReactNode;
};

/** the small orange label that sits above a heading or opens a card */
export default function Eyebrow({
  children,
  className = "",
  ...rest
}: EyebrowProps) {
  return (
    <p className={`text-[11px] text-orange-400 ${className}`} {...rest}>
      {children}
    </p>
  );
}

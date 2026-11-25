import type { SVGProps } from "react";

/** Placeholder monogram. The upstream wordmark is a T3 trademark and is not used here. */
export function T3Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M32 8a24 24 0 1 0 0 48 24 24 0 0 0 0-48zm0 14a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"
      />
    </svg>
  );
}

import { cn } from "~/lib/utils";

const MASCOT_SRC = {
  plain: "/mascot/plain.webp",
  smile: "/mascot/smile.webp",
  stand: "/mascot/stand.webp",
  chair: "/mascot/chair.webp",
  laptop: "/mascot/laptop.webp",
  wave: "/mascot/wave.webp",
} as const;

export type MascotPose = keyof typeof MASCOT_SRC;

/** Decorative portrait. The surrounding layout already says what the screen is for. */
export function Mascot({
  pose,
  className,
}: {
  readonly pose: MascotPose;
  readonly className?: string;
}) {
  return (
    <img
      src={MASCOT_SRC[pose]}
      alt=""
      draggable={false}
      className={cn("pointer-events-none select-none object-contain", className)}
    />
  );
}

# Brand icons

Desktop, web, and marketing rasters are the mascot face (`apps/web/public/mascot/plain.webp`) on paper, with an ink border for production, pink for nightly, and camping-chair green for development. macOS PNGs keep a transparent margin around an 824px body. Do not regenerate those files from the Icon Composer projects below: those projects still hold the previous monogram, and `vp run icons:export` would paint it back over the mascot.

`dev/app-icon.icon`, `nightly/app-icon.icon`, and `prod/app-icon.icon` still contain the previous monogram. Leave them until they are redrawn around the mascot. Android artwork below is still rendered from those projects.

## Android launcher and splash artwork

Android masks the central 72dp of a 108dp adaptive canvas, and the Android 12+ splash screen masks
the central two thirds of a 288dp canvas, so the Icon Composer exports cannot be used directly:
their rounded-square silhouette gets framed again and the wordmark is cropped. The Android artwork
is instead rendered from the same Icon Composer SVG sources by `vp run icons:export:android`:

- `apps/mobile/assets/android-icon-foreground.png`: the shared transparent wordmark, sized to stay
  inside the safe zone
- `apps/mobile/assets/android-icon-background-dev.png` and `-nightly.png`: full-bleed variant
  artwork (blueprint grid and annotations; night sky and clouds). Production uses a solid color.
- `apps/mobile/assets/android-splash-icon-*.png`: the two layers composed into one 288dp image, so
  the splash mask reproduces the launcher icon's framing.

Rerun the export after changing a layer SVG. `android-icon-mark.png` remains a flat silhouette for
Android's monochrome themed icon.

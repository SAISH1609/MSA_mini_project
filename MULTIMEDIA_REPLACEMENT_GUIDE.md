# Multimedia Replacement Guide (Local Files)

This guide explains how the current multimedia is wired and how to replace it with your own local files later.

## 1) Where multimedia is defined right now

All brand media is defined in src/data/cars.js inside each brand object.

Current media fields:

- logoUrl
- heroImage
- frontImage
- galleryImages (array)
- audioUrl

Each brand has the same structure, so replacement is repeatable for all brands.

## 2) Where each field is used in the UI

- logoUrl
  - Hero watermark logo in src/components/HeroSection.jsx
- heroImage
  - Hero background image in src/components/HeroSection.jsx
  - Home page brand card background in src/pages/Home.jsx
  - Animation section moving car visual in src/components/AnimationSection.jsx
  - Configurator main preview image in src/components/Configurator.jsx
- frontImage
  - Specs section main image in src/components/SpecsSection.jsx
  - Audio section static car image in src/components/AudioSection.jsx
  - Configurator fallback if hero image fails in src/components/Configurator.jsx
- galleryImages
  - Main image + thumbnails in src/components/GallerySection.jsx
  - Front/Rear/Interior labels are currently fixed to 3 slots
- audioUrl
  - Engine audio source in src/components/AudioSection.jsx

## 3) Recommended local folder structure

Place your files in public so they can be referenced by simple URL paths.

Suggested structure:

public/
media/
porsche/
logo.png
hero.jpg
front.jpg
gallery-front.jpg
gallery-rear.jpg
gallery-interior.jpg
engine.mp3
mercedes/
...
bmw/
...

You can use png/jpg/webp for images and mp3/wav for audio.

## 4) Important helper behavior to fix before swapping URLs

cars.js currently uses a proxyImage helper that rewrites many URLs.
If you start putting local paths but still pass them through proxyImage, you can get unexpected replacements.

Before replacing media, update proxyImage in src/data/cars.js so local paths always pass through unchanged.

Use this logic at the top of proxyImage:

- if url starts with /media/ then return url immediately

After this change, your local paths will not be overridden.

## 5) How to replace one brand (example)

In src/data/cars.js, update a brand object like this:

logoUrl: "/media/porsche/logo.png"
heroImage: "/media/porsche/hero.jpg"
frontImage: "/media/porsche/front.jpg"
galleryImages: [
"/media/porsche/gallery-front.jpg",
"/media/porsche/gallery-rear.jpg",
"/media/porsche/gallery-interior.jpg",
]
audioUrl: "/media/porsche/engine.mp3"

Repeat for each brand.

## 6) Media requirements for best visual output

- logoUrl
  - Best: transparent PNG or SVG
  - Recommended width: 800px+
- heroImage
  - Used as cover background in full-width sections
  - Recommended ratio: 16:9 or wider
  - Recommended width: 1920px+
- frontImage
  - Used in image blocks at fixed heights
  - Recommended ratio: around 16:9
  - Recommended width: 1400px+
- galleryImages
  - Keep exactly 3 images for current UI labels: Front, Rear, Interior
  - Keep similar dimensions across all 3 images
- audioUrl
  - Recommended format: mp3 (best browser compatibility)
  - Keep file size reasonable for faster first play

## 7) Optional: if you want per-brand animation video later

Right now AnimationSection uses heroImage (an image) and CSS animation.
If you later want true video per brand:

1. Add a new field in each brand object, for example animationVideo
2. Store video in public/media/<brand>/animation.mp4
3. Update src/components/AnimationSection.jsx to use a video tag when animationVideo exists, otherwise fallback to heroImage

This is optional. No change is required if image-based animation is enough.

## 8) Verification checklist after replacement

1. Run npm run dev
2. Open each brand page and verify:
   - Hero image loads
   - Specs image loads
   - Gallery front/rear/interior all load
   - Audio plays from the play button
3. Open Home page and verify card background images
4. Run npm run build to ensure production build is clean

## 9) Common mistakes to avoid

- File exists but wrong path or wrong extension (jpg vs jpeg, mp3 vs wav)
- Keeping local files outside public while using URL strings
- Not updating proxyImage pass-through for /media paths
- Using only 1 or 2 gallery images while labels still expect 3 angles
- Very large audio/video files causing slow load

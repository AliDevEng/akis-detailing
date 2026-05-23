# 🚗✨ Akis Detailing

> **Premium car care — built in code, polished to perfection.**

A sleek, blazing-fast marketing site for **Akis Detailing** — a professional car-care business based in Skåne 🇸🇪. Every pixel is as clean as the cars we work on.

---

## 🌟 What's Inside

🎯 Cinematic hero with crossfade background  
🔄 Infinite marquee of services  
📊 Animated stat counters  
🃏 Bento-grid service cards  
🖼️ Horizontal scroll gallery showcase  
📱 Mobile-first swipeable image slider  
💬 One-tap WhatsApp & social contact  
🌙 Dark-mode-only, glassmorphism UI throughout  

---

## ⚡ Tech Stack

| 🔧 Tool | 📦 Version | 💡 Why |
|---|---|---|
| ⚛️ React | 19 | UI framework |
| 🔷 TypeScript | strict · no `any` | Full type safety |
| 🎨 Tailwind CSS | 3 | Utility-first styling |
| 🔀 React Router DOM | 7 | Client-side routing |
| 🏗️ Create React App | 5 | Build tooling |

---

## 🗂️ Project Structure

```
src/
├── 🧩 components/
│   ├── ContactButtons.tsx       # WhatsApp / Phone / Instagram / TikTok
│   ├── FadeInWhenVisible.tsx    # Scroll-triggered fade-in wrapper
│   ├── FloatingWhatsApp.tsx     # Fixed WhatsApp bubble
│   ├── Footer.tsx
│   ├── GallerySlider.tsx        # Swipeable mobile slider
│   ├── ImageSlider3DClick.tsx   # 3D rotating carousel
│   ├── Navbar.tsx               # Responsive nav with mobile menu
│   ├── ScrollToTop.tsx          # Auto-scroll on route change
│   ├── ServiceCard.tsx          # 3D tilt service card
│   └── StatCounter.tsx          # Animated number counter
│
├── 📌 constants/
│   └── contact.ts               # ☎️ All contact info in one place
│
├── 🗃️ data/
│   ├── gallery.ts               # 🖼️ All image arrays
│   └── services.ts              # 🛠️ Service catalog + prices
│
├── 🪝 hooks/
│   └── useCounter.ts            # Animated counter (IntersectionObserver)
│
├── 📄 pages/
│   ├── About.tsx                # Our story + values + stats
│   ├── Contact.tsx              # Contact info + buttons
│   ├── Gallery.tsx              # Full image gallery
│   ├── Home.tsx                 # Landing page
│   └── Services.tsx             # All services in detail
│
├── 🏷️ types/
│   └── index.ts                 # Shared TypeScript interfaces
│
├── App.tsx                      # Router + layout shell
├── index.css                    # Tailwind + custom animations
└── index.tsx                    # Entry point
```

---

## 🗺️ Pages at a Glance

| 🔗 Route | 📝 Description |
|---|---|
| `/` | 🏠 Hero · marquee · about · stats · services · gallery · values · CTA |
| `/services` | 🛠️ Full service list with long descriptions & prices |
| `/gallery` | 🖼️ Swipeable mobile-first image slider |
| `/about` | 💬 Company story · values · animated counters |
| `/contact` | 📞 WhatsApp · phone · Instagram · TikTok buttons |

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

### 2️⃣ Start the dev server

```bash
npm start
```

🌐 Opens at [http://localhost:3000](http://localhost:3000) — hot-reloads on every save.

### 3️⃣ Type check

```bash
npx tsc --noEmit
```

✅ Zero errors expected.

### 4️⃣ Production build

```bash
npm run build
```

📦 Output lands in `build/` — ready to deploy anywhere.

---

## ⚙️ Configuration

### ☎️ Update contact info

Everything lives in one file — [`src/constants/contact.ts`](src/constants/contact.ts):

```ts
export const WHATSAPP_NUMBER = "46737158087";   // 📱 WhatsApp
export const PHONE_NUMBER    = "+46737158087";   // 📞 Phone
export const INSTAGRAM_URL   = "https://instagram.com/...";
export const TIKTOK_URL      = "https://tiktok.com/@...";
```

Change it once → updates across the whole site. ✨

### 🛠️ Add or edit services

Open [`src/data/services.ts`](src/data/services.ts) and add a new entry to the `SERVICES` array.

### 🖼️ Add gallery images

1. Drop your image into `public/images/gallery/`
2. Add its path to the right array in [`src/data/gallery.ts`](src/data/gallery.ts)

---

## 📐 Code Rules

| Rule | Detail |
|---|---|
| 🔷 TypeScript strict | `any` type is **banned** |
| 🗃️ No inline data | Images / services / constants → `src/data/` & `src/constants/` |
| 🪝 No inline hooks | Reusable logic → `src/hooks/` |
| 💬 Minimal comments | Only comment the **why**, never the what |

---

<div align="center">

**Made with ❤️ & 🧴 for Akis Detailing**  
*"Vi behandlar varje bil som om den vore vår egen."*

</div>

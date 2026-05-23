# 🚗✨ Akis Detailing Frontend

> **Premium car-care marketing, wrapped in a fast and polished React app.**

This is the frontend for **Akis Detailing**: a responsive single-page website with service pages, gallery views, contact actions, custom animations, and a dark polished visual style.

---

## 🌟 What's Inside

- 🎬 Cinematic home page with image-led sections and custom motion effects
- 🧭 Responsive navigation with route-based pages
- 🧼 Services page driven by reusable service data
- 🖼️ Gallery page with swipe-friendly image presentation
- 💬 Contact page with WhatsApp, phone, Instagram, and TikTok entry points
- 📊 Animated stat counters and route scroll restoration
- 🎨 Tailwind CSS styling with custom CSS animations

---

## ⚡ Tech Stack

| Tool | Version | Purpose |
| --- | --- | --- |
| ⚛️ React | 19.2.x | UI framework |
| 🔷 TypeScript | CRA managed | Type-safe app code |
| 🧭 React Router DOM | 6.30.x | Client-side routing |
| 🎨 Tailwind CSS | 3.4.x | Utility-first styling |
| 🏗️ Create React App / react-scripts | 5.0.1 | Build, dev server, and test tooling |
| 🧪 Testing Library | Latest compatible | Component smoke tests |
| 📈 web-vitals | 5.x | Optional performance reporting |

💡 `react-router-dom` and `tailwindcss` are kept on the latest working versions for this Create React App setup. Router 7 and Tailwind 4 require tooling changes that do not fit cleanly with `react-scripts@5`.

---

## 🗂️ Project Structure

```text
src/
  🧩 components/
    ContactButtons.tsx
    FadeInWhenVisible.tsx
    FloatingWhatsApp.tsx
    Footer.tsx
    GallerySlider.tsx
    ImageSlider3DClick.tsx
    Navbar.tsx
    ScrollToTop.tsx
    ServiceCard.tsx
    StatCounter.tsx
  📌 constants/
    contact.ts
  🗃️ data/
    gallery.ts
    services.ts
  🪝 hooks/
    useCounter.ts
  📄 pages/
    About.tsx
    Contact.tsx
    Gallery.tsx
    Home.tsx
    Services.tsx
  🏷️ types/
    index.ts
  App.tsx
  index.css
  index.tsx
```

---

## 🗺️ Pages

| Route | Description |
| --- | --- |
| `/` | 🏠 Home page with hero, services, stats, gallery preview, and CTA sections |
| `/services` | 🧼 Full service list with descriptions and pricing |
| `/gallery` | 🖼️ Image gallery for detailing work |
| `/about` | 💬 Company story, values, and stats |
| `/contact` | 📞 Contact options and social links |

---

## 🚀 Getting Started

Install dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm start
```

🌐 The app runs at [http://localhost:3000](http://localhost:3000).

Run tests:

```bash
npm test -- --watchAll=false
```

Create a production build:

```bash
npm run build
```

📦 The production output is written to `build/`.

---

## ⚙️ Configuration

☎️ Update contact details in [`src/constants/contact.ts`](src/constants/contact.ts).

🧼 Update service content in [`src/data/services.ts`](src/data/services.ts).

🖼️ Add gallery images to `public/images/gallery/`, then reference them in [`src/data/gallery.ts`](src/data/gallery.ts).

---

## 🔮 Backend

Coming Soon.

# 🌐 Frontend - Akis Detailing

The frontend for **Akis Detailing** is built with a modern 2026 stack: fast, typed, and scalable 🚀

## 🧬 Tech Stack

- **Next.js 16** (App Router) ⚡
- **React 19** ⚛️
- **TypeScript (strict mode)** 🔒
- **Tailwind CSS** 🎨
- **ESLint + Prettier** 🧹

## 📋 Requirements

- Node.js `20+` 🟢
- npm `10+` 📦

## 🏁 Start Development

```bash
npm install
npm run dev
```

Open 👉 `http://localhost:3000`

If port `3000` is taken, Next.js will switch automatically 🔁

## 🛠️ Scripts

- `npm run dev` → 👨‍💻 start dev server
- `npm run build` → 📦 create production build
- `npm run start` → 🚀 run production server
- `npm run lint` → 🧹 lint with zero warnings policy
- `npm run typecheck` → 🔎 TypeScript checks (`tsc --noEmit`)
- `npm run format` → 🎨 auto-format project with Prettier
- `npm run format:check` → ✅ verify formatting

## 🧠 Code Quality Rules

- Strict TypeScript is enabled 🔐
- `any` is not allowed (`@typescript-eslint/no-explicit-any = error`) ⛔
- Keep components fully typed for safer refactors 🧱

## 🗂️ Folder Map

- `src/app` → routes + layout (App Router)
- `src/components` → reusable UI components
- `src/sections` → page section composition
- `src/data` → static content/data
- `public` → images and static assets

## 🎯 Goal

Keep the frontend clean, fast, and production-ready while backend is introduced later 🔌

---

Polished UI + strong DX + type safety = happy shipping 😎✨

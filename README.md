# Care Cloud

## Introduction

**Care Cloud** is a modern web application built with **Next.js 16** and **React 19**, designed to deliver a fast, scalable, and user-friendly cloud-based experience. The project leverages cutting-edge frontend technologies, component libraries, and type-safe validation to provide a robust and maintainable architecture.

This application is structured as a private Next.js project and uses Tailwind CSS for styling, Radix UI for accessible components, and modern tooling for linting, type checking, and development.

---

## Tech Stack

- **Framework:** Next.js 16
- **Frontend:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn UI
- **Icons:** Lucide React
- **Charts:** Recharts
- **Validation:** Zod
- **Authentication:** JSON Web Tokens (jsonwebtoken)
- **Notifications:** Sonner
- **Linting:** ESLint

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd care-cloud-front
````

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm/yarn:

```bash
pnpm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:3000
```

---

## Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## Usage

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

---

## Features

* ⚡ Built with Next.js 16 App Router
* 🎨 Tailwind CSS 4 styling system
* 🧩 Accessible UI components via Radix UI
* 🔒 JWT-based authentication support
* 📊 Interactive charts with Recharts
* 🧪 Type-safe validation using Zod
* 🔔 Toast notifications with Sonner
* 📦 Optimized build pipeline
* 🧹 ESLint for code quality
* 🔤 Fully typed with TypeScript

---

## Dependencies

### Core

* `next`
* `react`
* `react-dom`
* `typescript`

### UI & Styling

* `tailwindcss`
* `@tailwindcss/postcss`
* `shadcn UI`
* `lucide-react`
* `clsx`
* `tailwind-merge`
* `tw-animate-css`

### Data & Utilities

* `zod`
* `date-fns`
* `cookie`
* `jsonwebtoken`
* `@types/jsonwebtoken`

### Visualization & UX

* `recharts`
* `sonner`

### Tooling

* `eslint`
* `eslint-config-next`
* `babel-plugin-react-compiler`

---

## Configuration

### Tailwind CSS

Tailwind CSS v4 is configured through PostCSS using `@tailwindcss/postcss`.

Ensure your Tailwind configuration file (`tailwind.config.ts` or `.js`) is properly set up to scan:

```
./app
./components
./pages
./src
```

### TypeScript

TypeScript is configured using `tsconfig.json`. Make sure strict mode is enabled for better type safety.

### Environment Variables

If your project uses JWT authentication or cookies, you may need:

```
NEXT_PUBLIC_API_URL=
JWT_SECRET=
```

Create a `.env` file and configure accordingly.

---

### Zod Schema Example

```ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

## Future Improvements

* API integration
* Role-based authentication
* Dashboard analytics expansion
* Testing setup (Jest / Playwright)
* CI/CD pipeline

---

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

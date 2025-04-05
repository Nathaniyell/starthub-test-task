
# StartHub Users

A modern, accessible, and SEO-friendly user directory application built with **Next.js 15** using the **App Router**. This application demonstrates best practices in server-side rendering, metadata handling, and WCAG-compliant accessibility.

![Project Preview](/public/users-ss.png)

## Features

- **Server-Side Rendering (SSR)** - Optimized for SEO with pre-rendered content
- **Dynamic Routing** - Clean URL structure for user profiles (`/users/[id]`)
- **SEO Optimized** - Built-in Metadata API for search engine visibility
- **Accessibility First** - WCAG 2.1 AA compliant interface
- **Responsive Design** - Works on all device sizes
- **Static Data Loading** - JSON-based user data with simulated API delay
- **Modern UI** - Clean, professional interface with focus states

## 🚀 Quick Start

### Prerequisites

- Node.js v18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nathaniyell/starthub-test-task
   cd nextjs-user-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

## 📈 SEO Implementation

### Server-Side Rendering
All pages are pre-rendered on the server for optimal SEO performance:

```tsx
// app/page.tsx
export default async function UserListPage() {
  const users = await getUserList();
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Server-rendered user list */}
    </main>
  );
}
```

### Dynamic Metadata
Each page has optimized metadata:

```tsx
// app/page.tsx
export const metadata = {
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
  },
};
```

## ♿ Accessibility Features

This application meets WCAG 2.1 AA standards with:

- **Keyboard Navigation** - All interactive elements are focusable
- **ARIA Attributes** - Proper roles and labels for screen readers
- **Color Contrast** - Minimum 4.5:1 ratio for text
- **Semantic HTML** - Proper use of headings, landmarks, and structure
- **Focus Management** - Visible focus indicators for keyboard users

Example accessible component:

```tsx
<article 
  aria-labelledby={`user-${user.id}-name`}
  tabIndex={0}
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <h2 id={`user-${user.id}-name`}>{user.name}</h2>
  {/* ... */}
</article>
```

## 📂 Data Handling

User data is stored in `/data/users.json` and loaded via server-side functions:

```json
[
  {
    "id": "1",
    "name": "Alex Johnson",
    "role": "Product Manager",
    "description": "Alex leads our product strategy with over 8 years of experience...",
    "avatar": "/placeholder.svg",
    "contact": "alex.j@example.com"
  }
]
```

Data fetching utilities:

```ts
// lib/users.ts
import usersData from "@/data/users.json";

export interface User {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  contact: string;
}

export async function getUserList(): Promise<User[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return usersData as User[];
}

export async function getUserById(id: string): Promise<User | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return (usersData as User[]).find((user) => user.id === id);
}
```

## Building for Production

1. Create an optimized production build:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. For static export (if needed):
   ```bash
   npm run export
   ```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

Project Maintainer: [Nathaniel Essien](mailto:essien.nathan@yahoo.com)

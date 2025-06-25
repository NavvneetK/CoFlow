# Coflow

Coflow is a modern, collaborative document editor built with Next.js, Liveblocks, Lexical, and Clerk. It enables real-time editing, commenting, and sharing of documents with a beautiful, responsive UI. Coflow is designed for teams and individuals who want seamless, secure, and interactive document collaboration.

---

## 🚀 Features

### Real-Time Collaboration
- **Live Multi-User Editing:** Multiple users can edit the same document simultaneously with changes reflected in real time.
- **Live Cursors & Presence:** See who is online and where they are editing in the document.
- **Comment Threads:** Add, reply to, and resolve comments on any part of the document.
- **Emoji Reactions:** React to comments with emojis for quick feedback.

### Rich Text Editing
- **Powered by Lexical:** Enjoy a fast, extensible, and accessible rich text editor.
- **Formatting Toolbar:** Headings, bold, italic, underline, lists, and more.
- **Floating Toolbar:** Contextual formatting options appear as you select text.

### Document Management
- **Create, Rename, and Delete Documents:** Manage your documents with ease.
- **Share & Collaborate:** Invite others to collaborate with different access levels (editor/viewer).
- **Access Control:** Only invited users can edit or view documents, with permissions managed via Clerk and Liveblocks.

### Authentication & User Management
- **Clerk Integration:** Secure authentication with Clerk, including social logins.
- **User Avatars & Profiles:** See who is collaborating, with avatars and names.
- **Notifications:** Get notified of document changes and access updates.

### Modern UI/UX
- **Responsive Design:** Works beautifully on desktop and mobile.
- **Dark Mode:** Stylish dark theme for comfortable editing.
- **shadcn/ui & Radix UI:** Accessible, customizable UI components.

### Performance & Reliability
- **Optimistic UI:** Instant feedback for actions like delete, with background processing.
- **Server Actions & API Routes:** Fast, secure server-side logic using Next.js 15+ features.
- **Error Handling:** Friendly error messages and robust error boundaries.

---

## 🛠️ Tech Stack

- **Next.js 15+** (App Router, Server Actions)
- **React 19**
- **Liveblocks** (real-time collaboration, presence, comments)
- **Lexical** (rich text editor)
- **Clerk** (authentication & user management)
- **shadcn/ui** & **Radix UI** (UI components)
- **Tailwind CSS 4+** (utility-first styling)
- **TypeScript** (type safety)
- **Sentry** (error monitoring)
- **NanoID** (unique IDs for documents)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/coflow.git
cd coflow
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file and add your Clerk and Liveblocks credentials:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see Coflow in action.

---

## 📝 Usage

- **Sign in** with Clerk (Google, GitHub, etc.).
- **Create a new document** from the dashboard.
- **Edit the document** with rich text features.
- **Invite collaborators** by email and assign editor/viewer roles.
- **Comment and react** on document content.
- **Delete or rename documents** as needed.

---

## 📁 Project Structure

- `src/app/` — Next.js app directory (routing, pages, API)
- `src/components/` — UI components (Editor, Comments, Toolbar, etc.)
- `src/lib/` — Utility functions, server actions, and API integrations
- `public/` — Static assets (SVGs, icons)
- `styles/` — Global and theme CSS

---

## 🤝 Contributing

Contributions are welcome! Please open issues and pull requests for new features, bug fixes, or suggestions.

---

## 📜 License

MIT

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Liveblocks](https://liveblocks.io/)
- [Lexical](https://lexical.dev/)
- [Clerk](https://clerk.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

---

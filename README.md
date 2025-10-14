# Omeed Tehrani - Research Portfolio

A scholarly, technically-focused research portfolio showcasing work in deep reinforcement learning, AI safety & alignment, and large language models. Built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **Research-Focused Design**: Clean, academic aesthetic emphasizing technical depth
- **Publications Hub**: Showcasing papers, research analyses, and reading lists
- **Project Gallery**: Technical projects with detailed implementations (RL, Systems, LLMs)
- **Blog System**: MDX-based blog for paper analyses and technical write-ups
- **Responsive & Accessible**: Mobile-friendly with dark mode support
- **Type-Safe**: Built with TypeScript for production-grade reliability

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Content**: MDX for blog posts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog pages
│   ├── research/          # Research page
│   ├── publications/      # Publications page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
├── content/              # MDX content
│   └── blog/            # Blog posts
├── lib/                 # Utilities
│   └── blog.ts         # Blog post utilities
└── public/             # Static assets
```

## Customization

### Personal Information

1. Update `app/layout.tsx` - Change site title and description
2. Update `app/page.tsx` - Modify hero section and content
3. Update `components/Header.tsx` - Change site name
4. Update `app/contact/page.tsx` - Add your contact information

### Blog Posts

Add new blog posts by creating `.mdx` files in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-03-15"
description: "Post description"
author: "Your Name"
---

Your content here...
```

### Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component styles: Inline with TailwindCSS classes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the static site:
```bash
npm run build
```

The output will be in the `.next` directory.

## Adding Content

### New Blog Post

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with title, date, description, and author
3. Write your content using Markdown and React components
4. The post will automatically appear on the blog page

### New Section

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/Header.tsx`

## License

This template is open source and available for personal and commercial use.

## Inspiration

Design inspired by [Thinking Machines Lab](https://thinkingmachines.ai/) - a clean, academic aesthetic focused on content and readability.
# personal-web-2025
# personal-web-2025

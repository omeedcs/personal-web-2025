# How to Add Podcast Episodes

## Quick Guide

To add a new podcast episode, edit `/app/podcast/page.tsx` and add episodes to the `episodes` array.

## Step-by-Step Instructions

### 1. Get Your YouTube Video ID

From your YouTube video URL:
- If URL is: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID is: `dQw4w9WgXcQ` (everything after `v=`)

### 2. Add Episode to Array

In `/app/podcast/page.tsx`, find the `episodes` array and add your episode:

```typescript
const episodes: Episode[] = [
  {
    id: '1',  // Unique ID (increment for each episode)
    videoId: 'dQw4w9WgXcQ',  // YouTube video ID
    title: 'Building AI Systems from Scratch',  // Episode title
    guest: 'Jane Doe',  // Guest name
    date: '2025-01-15',  // Date in YYYY-MM-DD format
    description: 'A deep dive into building production AI systems, discussing challenges, best practices, and lessons learned from scaling ML infrastructure.',
    learnings: [
      'Key insight about distributed training',
      'How to optimize inference at scale',
      'The importance of monitoring in production ML'
    ],
    thoughts: 'This conversation really opened my eyes to the complexity of production ML systems. Jane\'s experience with scaling to millions of users was fascinating...'
  },
  // Add more episodes here
];
```

### 3. Episode Fields Explained

- **id**: Unique identifier (use sequential numbers: '1', '2', '3', etc.)
- **videoId**: The YouTube video ID (from the URL)
- **title**: Episode title (appears in list and detail view)
- **guest**: Guest's name
- **date**: Publication date in YYYY-MM-DD format
- **description**: Brief overview of what the episode covers
- **learnings**: Array of key takeaways (3-5 bullet points work well)
- **thoughts** (optional): Your personal reflections on the conversation

### 4. Example: Multiple Episodes

```typescript
const episodes: Episode[] = [
  {
    id: '1',
    videoId: 'abc123xyz',
    title: 'First Episode Title',
    guest: 'John Smith',
    date: '2025-01-20',
    description: 'Episode description...',
    learnings: ['Learning 1', 'Learning 2', 'Learning 3'],
    thoughts: 'My thoughts...'
  },
  {
    id: '2',
    videoId: 'def456uvw',
    title: 'Second Episode Title',
    guest: 'Sarah Johnson',
    date: '2025-01-27',
    description: 'Episode description...',
    learnings: ['Learning 1', 'Learning 2', 'Learning 3'],
    thoughts: 'My thoughts...'
  }
];
```

## Features

✅ **Embedded YouTube Player**: Videos play directly on your site
✅ **Click to Select**: Click any episode to watch and read breakdown
✅ **Key Learnings**: Bullet points of main takeaways
✅ **Personal Thoughts**: Your reflections on each conversation
✅ **Direct YouTube Link**: Button to watch on YouTube
✅ **Responsive Design**: Works beautifully on all devices

## Tips

- Episodes are displayed in the order you add them (newest first works well)
- Keep learnings concise (1-2 lines each)
- Thoughts section is optional but adds personal touch
- Update regularly as you publish new episodes!

## Future Enhancement: Auto-Sync

To automatically sync with your YouTube channel, you'd need to:
1. Use YouTube Data API v3
2. Set up API key in environment variables
3. Fetch videos programmatically
4. Still add learnings/thoughts manually (since they're personal)

For now, manual updates give you full control over what appears and how it's described!

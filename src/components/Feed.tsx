import { PostCard } from './PostCard';

export function Feed() {
  const posts = [
    {
      id: 1,
      creator: {
        name: 'Sophia Rose',
        username: '@sophiarose',
        avatar: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=100&h=100&fit=crop',
        isVerified: true,
      },
      image: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=800&h=800&fit=crop',
      caption: 'New photoshoot vibes ✨',
      likes: 1243,
      comments: 89,
      timeAgo: '2h ago',
      isLocked: false,
    },
    {
      id: 2,
      creator: {
        name: 'Emma Fitness',
        username: '@emmafitness',
        avatar: 'https://images.unsplash.com/photo-1648748571003-98d6ff522019?w=100&h=100&fit=crop',
        isVerified: true,
      },
      image: 'https://images.unsplash.com/photo-1648748571003-98d6ff522019?w=800&h=800&fit=crop',
      caption: 'Morning workout complete 💪',
      likes: 2156,
      comments: 124,
      timeAgo: '5h ago',
      isLocked: false,
    },
    {
      id: 3,
      creator: {
        name: 'Olivia Grace',
        username: '@oliviagrace',
        avatar: 'https://images.unsplash.com/photo-1632613714614-e817d3814a8e?w=100&h=100&fit=crop',
        isVerified: true,
      },
      image: 'https://images.unsplash.com/photo-1632613714614-e817d3814a8e?w=800&h=800&fit=crop',
      caption: 'Exclusive content for subscribers 🔥',
      likes: 3421,
      comments: 267,
      timeAgo: '1d ago',
      isLocked: true,
    },
  ];

  return (
    <div className="px-6 py-6 space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

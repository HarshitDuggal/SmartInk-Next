// app/page.tsx
import Link from 'next/link';

const posts = [
  { title: 'My First Post', slug: 'first-post' },
  { title: 'Another Post', slug: 'another-post' },
];

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to My Blog</h1>
      <ul className="list-disc pl-5 mt-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

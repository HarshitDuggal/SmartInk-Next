import { getPost } from '@/lib/posts';

type Props = {
  params: { slug: string };
};


export async function generateMetadata({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'No blog post found with this slug.',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}

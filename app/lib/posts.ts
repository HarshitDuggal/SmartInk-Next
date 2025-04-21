export const posts = [
    {
      slug: 'first-post',
      title: 'My First Post',
      description: 'This is the first blog post made with Next.js!',
    },
    {
      slug: 'another-post',
      title: 'Another Post',
      description: 'A follow-up post to explore more about routing.',
    },
  ];
  
  export function getPost(slug: string) {
    return posts.find((post) => post.slug === slug);
  }
export type BlogPost = {
    title: string;
    slug: string;
    description: string;
    markdownPath: string;
    content: string;
    featured: boolean;
    postedDate: Date;
};

const blogPosts: BlogPost[] = [
    {
        title: 'Welcome to my blog!',
        slug: 'welcome-to-my-blog',
        description: 'This is the first post on my blog.',
        markdownPath: '$lib/markdown/post-1.md',
        content: '',
        featured: true,
        postedDate: new Date('2025-01-01')
    }
];

export { blogPosts };
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
        title: 'Building a NAS',
        slug: 'building-a-nas',
        description: "My experience building a home NAS without really knowing what I'm doing.",
        markdownPath: '$lib/markdown/post-1.md',
        content: '',
        featured: true,
        postedDate: new Date('2025-01-09')
    }
];

export { blogPosts };
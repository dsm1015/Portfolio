import {blogPosts} from '$lib/blog-posts';
import {error} from '@sveltejs/kit';
import { loadMarkdownContent } from '$lib/server-utils';

export async function load({ params, fetch }) { 
    const post = blogPosts.find((post) => post.slug === params.post);

    if (!post) throw error(404, 'Post not found');

    const markdownContent = await loadMarkdownContent(fetch, `${post.slug}.md`);
    post.content = markdownContent;

    return {
        post
    };
}
<script lang='ts'>
	import type { BlogPost } from "$lib/blog-posts";

    export let post: BlogPost;
</script>

<a
    href='/blog/{post.slug}'
    target="_self"
    class="overflow-hidden sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-green-700 text-center cursor-pointer group hover:border-green-400 duration-200"
>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {post.title} <span class="font-light text-base align-middle">&#8226; {post.postedDate}</span>
    </h3>
    <p>{@html post.description}</p>
    <div class="flex-1 flex justify-betweeen gap-4 items-end">
    </div>
</a>

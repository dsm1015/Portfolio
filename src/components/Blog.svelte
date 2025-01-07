<script lang='ts'>
    import BlogPostCard from "./BlogPostCard.svelte";

    import {blogPosts} from "$lib/blog-posts";
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="ProjectCards" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="cabin text-green-400">Blog</span>.
            </h3>
        </div>
        {#each blogPosts as post}
            <BlogPostCard post={post} />
        {/each}
        <p class="text-center">I don't have any thoughts right now.</p>
    </section>

</main>
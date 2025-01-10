<script>
    import { marked } from "marked";
    //import "../../../app.css";

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<svelte:head>
    <title>Douglas Maxwell - Blog</title>
</svelte:head>

<!--Back to /blog Button-->
<a class="sticky-button bg-green-700 text-white p-2 rounded-lg hover:bg-green-400 duration-200 z-50" href="/blog">
    <i class="fas fa-arrow-left"></i> Blog
</a>

<div class="mx-12 px-4 py-8 mt-12 mb-12">
    <div class="prose markdown-container">
        {@html marked.parse(data.post.content, { gfm: true })}
    </div>
</div>

<style>
    :global(.markdown-container) {
        color: #f0f0f0; /* Light text color for dark mode */
    }

    :global(.markdown-container h1),
    :global(.markdown-container h2),
    :global(.markdown-container h3),
    :global(.markdown-container h4),
    :global(.markdown-container h5),
    :global(.markdown-container h6) {
        color: #f0f0f0; /* Light text color for headings */
    }

    :global(.markdown-container p),
    :global(.markdown-container strong),
    :global(.markdown-container em),
    :global(.markdown-container ul),
    :global(.markdown-container ol),
    :global(.markdown-container table),
    :global(.markdown-container th),
    :global(.markdown-container td) {
        color: #f0f0f0; /* Light text color for paragraphs, lists, and tables */
    }

    :global(.markdown-container code) {
        background-color: #2d3748; /* Dark background for code blocks */
        color: #f0f0f0; /* Light text color for code */
    }

    :global(.markdown-container a) {
        color: #63b3ed; /* Light blue color for links */
    }

    :global(.markdown-container hr) {
        border-color: #4a5568; /* Dark border color for horizontal rules */
    }
</style>
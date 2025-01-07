<script>
    import SvelteMarkdown from "svelte-markdown";
    import "../../../app.css";

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
    <title>Douglas Maxwell - Blog</title>
</svelte:head>

<!--Back to /projects Button-->
<a class="sticky-button bg-green-700 text-white p-2 rounded-lg hover:bg-green-400 duration-200 z-50" href="/blog">
    <i class="fas fa-arrow-left"></i> Blog
</a>

<SvelteMarkdown source={data.post.content}></SvelteMarkdown>
<script>
    import "../../../app.css";
	import SingleProject from "../../../components/SingleProject.svelte";

	/** @type {import('./$types').PageData} */
	export let project;

</script>

<svelte:head>
    <title>Douglas Maxwell - Projects</title>
</svelte:head>

<!--Back to /projects Button-->
<a class="fixed top-24 left-4 bg-green-700 text-white p-2 rounded-lg hover:bg-green-400 duration-200" href="/projects">
    <i class="fas fa-arrow-left"></i> Projects
</a>

<!-- <SingleProject project={project}></SingleProject> -->
<h1>{project.post.slug}</h1>
<div>{@html project.post.content}</div>
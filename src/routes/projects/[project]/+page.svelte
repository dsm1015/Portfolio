<script>
    import "../../../app.css";
	import SingleProject from "../../../components/SingleProject.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<svelte:head>
    <title>Douglas Maxwell - Projects</title>
</svelte:head>

<!--Back to /projects Button-->
<a class="fixed top-24 left-4 bg-green-700 text-white p-2 rounded-lg hover:bg-green-400 duration-200 z-50" href="/projects">
    <i class="fas fa-arrow-left"></i> Projects
</a>

<SingleProject project={data.project}></SingleProject>
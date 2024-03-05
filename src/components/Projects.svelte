<script>
    import ProjectCard from "../components/ProjectCard.svelte";

    import projects from "$lib/projects";
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="ProjectCards" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="cabin text-green-400">Projects</span>.
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {#each projects as project}
                <ProjectCard project={project} />
            {/each}
        </div>
    </section>

</main>
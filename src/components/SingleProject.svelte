<script>
	import { technologies } from "$lib/projects";
    import projects from "$lib/projects";

    export let project;
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="ProjectInfo" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                {project.post.title}
            </h3>
        </div>
    </section>
    <section id="ProjectContent" class="py-20 lg:py-32 flex flex-col gap-24">
        <div>
            {@html project.post.content}
        </div>
    </section>
</main>
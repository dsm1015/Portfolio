<script>
	import { technologies } from "$lib/projects";

    export let project;
</script>


<a
    href={project.href}
    target="_blank"
    class="overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-green-700 text-center cursor-pointer group hover:border-green-400 duration-200"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={project.icon} />
    </div>
    <img src={project.images[0]} alt={project.name} class="w-full h-64 object-cover rounded-lg" />
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {project.name}
    </h3>
    <p>{@html project.description}</p>
    <div class="flex-1 flex justify-betweeen gap-4 items-end">
        <div
            class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
            <p class="z-4">Go to &rarr;</p>
        </div>
    </div>
    <div class="bg-white w-full mx-auto">
        <div class="scrolling-tech-icons">
            {#each project.technologies as techId (techId)}
                {#each technologies as tech}
                    {#if tech.name === techId}
                        <img src={tech.icon} alt={tech.name} class="w-10 h-10 mx-auto"/>
                    {/if}
                {/each}
            {/each}
        </div>
    </div>
</a>

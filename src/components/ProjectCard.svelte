<script>
	import { technologies } from "$lib/technologies";

    export let project;
</script>


<a
    href={project.href}
    target="_self"
    class="overflow-hidden sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-green-700 text-center cursor-pointer group hover:border-green-400 duration-200"
>
    <!-- <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={project.icon} />
    </div> -->
    <img src={project.images[0]} alt={project.name} class="w-full h-64 object-cover rounded-lg" />
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {project.name} <span class="font-extralight text-base align-middle">&#8226; {project.time.semester} {project.time.year}</span>
    </h3>
    <p>{@html project.description}</p>
    <div class="flex-1 flex justify-betweeen gap-4 items-end">
    </div>
    <div class="scrolling-tech-icons">
        {#each project.technologies as techId (techId)}
            {#each technologies as tech}
                {#if tech.name === techId}
                    <img src={tech.icon} alt={tech.name} class="w-10 h-10 mr-10"/>
                {/if}
            {/each}
        {/each}
    </div>
</a>

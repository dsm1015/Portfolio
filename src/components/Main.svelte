<script>
    import Step from "./Step.svelte";

    import projects from "$lib/projects";

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                I'm <span class="cabin text-green-400">Douglas</span> Maxwell
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I am a passionate and dedicated DevOps Engineer, Data Scientist and Full Stack Developer with a strong background in computer science and engineering. 
                I have a proven track record of delivering high-quality software solutions to meet business needs. 
                I am a quick learner and a team player who is always eager to learn new technologies and methodologies. 
                I am also a strong advocate for open source software and I am always looking for ways to contribute to the community.
            </p>
            <button
                class="greenShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950">
                <div
                    class="absolute top-0 right-full w-full h-full bg-green-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </button>
        </div>

        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile.png"} alt="Pofile" class="object-cover z-[2] max-h-[40vh]"/>
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A few of my <span class="cabin text-green-400">creative endeavors</span>.
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {#each projects as project}
                {#if project.featured}
                    <Step step={project} />
                {/if}
            {/each}
        </div>
        <div class="flex flex-col items-center gap-1 text-center">
            <a href="/projects">
                <h6 class="inline-block text-large sm:text-xl md:text-2xl cursor-pointer rounded-lg hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden border border-solid border-green-700 p-2">
                    Check out all of my <span class="text-green-400">projects</span> &rarr;
                </h6>
            </a>
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-green-400">about</span> me.
            </h3>
        </div>
    </section>
</main>
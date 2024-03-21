<script>
    import Step from "./Step.svelte";
    import TechHex from "./TechHex.svelte";

    import {projects} from "$lib/projects";
    import mySkills from "$lib/skills";

    let rotation = 0;
    let spin = () => {
        let img = document.querySelector("img");
        if (img) {
            rotation += 360;
            img.style.transition = "transform 1s ease-in-out";
            img.style.transform = `rotate(${rotation}deg)`;
        }
    };

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                I'm <span class=" text-green-400">Douglas</span> Maxwell
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I am a tech nerd who loves to learn.
                Some roles I fill are <span class="text-green-400">DevOps Engineer</span>, <span class=" text-green-400">Data Scientist</span>, and <span class=" text-green-400">Full Stack Developer</span>.
                I've worked closely with developing and deploying <span class="text-green-400">AI models</span> at scale, as well as maintaining and optimizing cloud infrastructure via <span class=" text-green-400">CI/CD</span> pipelines and Infrastructure as Code (<span class=" text-green-400">IaC</span>).
            </p>
            <p class="text-base sm:text-lg md:text-xl">
                My software development philosophy is rooted in simplicity, scalability, and maintainability.
            </p>
            <a href="#contact">
                <button
                    class="greenShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950">
                    <div
                        class="absolute top-0 right-full w-full h-full bg-green-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                    />
                    <h4 class="relative z-9">Get in touch &rarr;</h4>
                </button>
            </a>
        </div>

        <div class="relative shadow-2xl grid place-items-center">
            <button on:click={spin}>
                <img src={"images/profile.png"} alt="Pofile" 
                    class="greenShadow border-2 border-solid rounded-xl object-cover z-[2] max-h-[40vh]"
                />
            </button>
        </div>
    </section>

    <section id="skills" class="py-10 lg:py-12 flex flex-col gap-16">
        <div class="flex justify-center">
            <TechHex skills={mySkills} />
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A few of my <span class=" text-green-400">creative endeavors</span>.
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
 
<!--     <section
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
    </section> -->
</main>
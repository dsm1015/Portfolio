<script lang="ts">
    import { technologies } from "$lib/projects"; 
    import ModelViewer from "./ModelViewer.svelte";
    import { Canvas } from '@threlte/core'
    import { isModelLoading, modelItemsLoaded, modelItemsTotal } from '$lib/stores';
    import { onMount } from "svelte";

    export let project;

    // if isModelLoading is false, add fade-out class to loading-screen
    onMount(() => {
        isModelLoading.subscribe((value) => {
            if (!value) {
                const ls = document.getElementById('loading-screen')
                if(ls){
                    ls.classList.add('fade-out');
                    ls.addEventListener('transitionend', onTransitionEnd);
                }
            }
        });

        modelItemsLoaded.subscribe((value) => {
            const pb = document.getElementById('progress-bar');
            if(pb){
                pb.style.width = `${(Number(value) / $modelItemsTotal) * 100}%`;
                console.log(pb.style.width);
            }
        });
    });

    function onTransitionEnd(event) {
        if(event.target){
            event.target.remove();
        }
    }

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="ProjectInfo" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-700 py-4"
            >
                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    {project.name} &nbsp;<i class="{project.icon}"></i>
                </h3>
            </div>

            <h4 class="font-semibold pt-2 text-md sm:text-xl md:text-2xl">
                {project.time.semester} {project.time.year}
                
                {#if project.url}
                    &#8226;
                    <i class="fa-brands fa-github"></i>
                        <a href="{project.url}" target="_blank" class="text-green-400">GitHub<sup class=""
                            ><span class="text-xs scale-75 pl-0.5"
                                ><i
                                    class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
                                /></span
                            ></sup
                        ></a>
                {/if}
            </h4>
            {#if project.collaborators.length > 1}
                <div class="flex gap-2 flex-col text-center">
                    <p>Collaborators - [
                        {#each project.collaborators as collaborator, index}
                            <a href="https://github.com/{collaborator}" target="_blank" class="text-green-400">@{collaborator}<sup class=""
                                ><span class="text-xs scale-75 pl-0.5"
                                    ><i
                                        class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
                                    /></span
                                ></sup
                            ></a>
                            {#if index !== project.collaborators.length - 1},&nbsp;{/if}
                        {/each}
                            ]
                    </p>
                </div>
            {/if}
        </div>
    </section>

    <section id="ProjectContent" class="py-2 lg:py-4 flex flex-col gap-2 ml-6 mr-6">
        
        {#if project.model}
            <div class="relative w-1280 h-720">
                <div id="loading-screen" class="flex items-center justify-center h-screen">
        <!--        <div id="loader"></div> -->
                    <div class=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-1/2 ">
                        <div id="progress-bar" class="bg-green-400 h-2.5 rounded-full" style="width: 0%"></div>
                    </div>
                </div>
                <Canvas size={{width: 1280, height: 720}}>    
                    <ModelViewer />
                </Canvas>
            </div>
        {/if}

        <div class="flex flex-col gap-2 text-center">
            {@html project.content}
        </div>
    </section>
</main>
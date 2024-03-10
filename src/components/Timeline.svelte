<script>
    import {timeline} from "$lib/timeline";
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="Experience" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <div
                class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-green-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-green-700 py-4"
            >
                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    Experience
                </h3>
            </div>

            <div class="flex flex-col gap-4 mt-32">
                {#each timeline as item}
                    {#if item.type === "job"}
                        <div class="flex flex-col gap-2">
                            <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl">
                                {item.title} <span class="font-extralight text-base align-middle">&#8226; {item.range.start.month} {item.range.start.year} - {item.range.end.month} {item.range.end.year}</span>
                            </h4>
                            <p>{@html item.description}</p>
                        </div>
                    {:else if item.type === "event"}
                        <div class="flex flex-col gap-2">
                            <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl">
                                {item.title} <span class="font-extralight text-base align-middle">&#8226; {item.time.month} {item.time.year}</span>
                            </h4>
                            <p>{@html item.description}</p>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </section>
</main>

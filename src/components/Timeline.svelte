<script>
    import {timeline} from "$lib/timeline";
	import TimelineEvent from "./TimelineEvent.svelte";
    import TimelineJob from "./TimelineJob.svelte";
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

            <div class="flex flex-col gap-4 mt-32 border-l-4 border-green-400 rounded-br rounded-tr bg-gradient-to-r from-green-400 to-green-900 relative p-12 list-none text-left">
                {#each timeline as item}
                    {#if item.type === "job"}
                        <TimelineJob job={item}> </TimelineJob>
                    {:else if item.type === "event"}
                        <TimelineEvent event={item}> </TimelineEvent>
                    {/if}
                {/each}
            </div>
        </div>
    </section>
</main>

<section class="design-section">
    <div class="timeline">

        <div class="timeline-empty">
        </div>

        <div class="timeline-middle">
            <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
        <h3>HTML</h3>
        <p>Some Text</p>
        </div>
        <div class="timeline-component timeline-content">
                    <h3>CSS</h3>
                    <p>Some Text.</p>
        </div>
        <div class="timeline-middle">
            <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty">
        </div>

        <div class="timeline-empty">
        </div>

        <div class="timeline-middle">
            <div class="timeline-circle"></div>
        </div>
        <div class=" timeline-component timeline-content">
        <h3>Javascript</h3>
        <p>Some Text.</p>
        </div>
    </div>
</section>

<style>

.design-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  min-height: 100vh;
  padding: 100px 0;
}

.design {
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.timeline-content {
  padding: 20px;
  background: #1f1f1f;
  -webkit-box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
          box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
  border-radius: 5px;
  color: white;
  padding: 1.75rem;
  transition: 0.4s ease;
  overflow-wrap: break-word !important;
  margin: 1rem;
  margin-bottom: 20px;
  border-radius: 6px;
}

.timeline-component {
  margin: 0px 20px 20px 20px;
}

@media screen and (min-width: 768px) {
  .timeline {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
  }
  .timeline-middle {
    position: relative;
    background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
    width: 3px;
    height: 100%;
  }
  .main-middle {
    opacity: 0;
  }
  .timeline-circle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
} 
</style>
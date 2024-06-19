<script>
    import {timeline} from "$lib/timeline";
	  import TimelineEvent from "./TimelineEvent.svelte";
    import TimelineJob from "./TimelineJob.svelte";
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="Experience" class="design-section">
    <div class="timeline">
      <div class="grid place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200">
        <i class={timeline[0].icon}></i>
      </div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>

      {#each timeline as item, index}
        <div class="timeline-component timeline-content">
          {#if item.type === "job"}
            <TimelineJob job={item} />
          {:else if item.type === "event"}
            <TimelineEvent event={item} />
          {/if}
        </div>
        {#if index % 2 != 0}
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="grid place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200">
            <i class={timeline[index].icon}></i>
          </div>
          {#if timeline[index + 1]}
            <div class="grid place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200">
              <i class={timeline[index+1].icon}></i>
            </div>
            <div class="timeline-middle">
              <div class="timeline-circle"></div>
            </div>
          {/if}
        {/if}
      {/each}
    </div>
    
  </section>
</main>


<style>

.design-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.timeline-icon {
  
}

@media screen and (min-width: 768px) {
  .timeline {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
  }
  .timeline-middle {
    position: relative;
    background-image: linear-gradient(45deg, #4ade80, #16a34a, #052e16);
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
    background-image: linear-gradient(45deg, #4ade80, #16a34a, #052e16);
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
} 
</style>
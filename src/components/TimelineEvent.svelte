<script lang='ts'>
    import type { Event } from '$lib/timeline';
    export let event: Event;
</script>

<!--Timeline Event Card-->
<div class="flex flex-col gap-2 event">
    <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl">
        {event.title} <span class="font-extralight text-base align-middle">&#8226; {event.time.month} {event.time.year}</span>
    </h4>
    <p>{event.location}</p>
    <p>{@html event.description}</p>
</div>
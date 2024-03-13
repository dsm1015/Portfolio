<script lang='ts'>
    import type { Event } from '$lib/timeline';
    export let event: Event;
</script>

<!--Timeline Event Card-->
<div class="flex flex-col gap-2">
    <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl">
        {event.title}
    </h4>
    <h3 class="font-light text-base align-middle text-green-400">
        {event.time.month} {event.time.year}
    </h3>
    <p>{event.location}</p>
    <p class="mt-6">{@html event.description}</p>
</div>
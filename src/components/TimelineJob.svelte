<script lang='ts'>
    import type { Job } from '$lib/timeline';
    export let job: Job;
</script>

<!--Timeline Event Card-->
<div class="flex flex-col gap-2">
    <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl">
        {job.title}
    </h4>
    <h3 class="font-light text-base align-middle text-green-400">
        {job.range.start.month} {job.range.start.year} - {#if job.range.end}{job.range.end.month} {job.range.end.year}{/if}
    </h3>
    <p>{job.location}</p>
    <p class="mt-6">{@html job.description}</p>
</div>

<script lang='ts'>
    import type { Job } from '$lib/timeline';
    export let job: Job;
</script>

<!--Timeline Event Card-->
<div class="flex flex-col gap-2 event">
    <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl">
        {job.title} <span class="font-extralight text-base align-middle">&#8226; {job.range.start.month} {job.range.start.year} - {job.range.end.month} {job.range.end.year}</span>
    </h4>
    <p>{job.location}</p>
    <p>{@html job.description}</p>
</div>

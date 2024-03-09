<script>
    import Main from '../components/Main.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        particlesJS.load('particles-js', '/assets/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    });
</script>

<svelte:head>
    <title>Douglas Maxwell</title>
</svelte:head>

<div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-60">
    <div class="absolute inset-0" id="particles-js"></div>
</div>

<Main/>
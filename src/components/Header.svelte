<script>

    /**
	 * @type {number}
	 */
    export let y;

    export let tabs = [
        {name: "Projects", link: "/projects"},
        {name: "Experience", link: "/experience"},
        {name: "About me", link: "#about"},
    ];
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid ' + (
    y > 0 ? " py-4 bg-slate-950 border-green-950" : " py-6 bg-transparent border-transparent")}>
    <h1 class="font-large">
        <a href='/'><b class="font-bold cabin">Douglas</b> Maxwell</a>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-green-400" target={index === 2 ? "_self" : ""}>
                <p>{tab.name}</p>
            </a>
        {/each}
        <a href="#contact">
            <button class="greenShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
                <div class="absolute top-0 right-full w-full h-full bg-green-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
                <h4 class="relative z-9">Get in touch</h4>
            </button>
        </a>
    </div>
</header>
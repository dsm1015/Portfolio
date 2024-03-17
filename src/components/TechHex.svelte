<script>
    export let skills = []; // Expecting an array of objects { name: 'SkillName', imageUrl: 'path/to/image' }
</script>

<main>
    <div class="hex-grid">
        <div class="hex">
            {#each skills as skill}
                <div>
                    <div class="hex-img">
                        <img src={skill.icon} alt={skill.name} />
                        <div class="tech-name"><p>&nbsp;</p>{skill.name}</div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    .hex-grid {
        max-width: 400px;
        display:flex;
        flex-wrap: wrap;
        --s: 100px;  /* size  */
        --m: 2px;    /* margin */
        --f: calc(1.732 * var(--s) + 4 * var(--m)  - 1px);
    }

    .hex {
        /*font-size: 0; /*disable white space between inline block element */
    }

    .hex div {
        width: var(--s);
        margin: var(--m);
        height: calc(var(--s)*1.1547); 
        display: inline-block;
        font-size:initial;
        box-sizing: border-box;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        margin-bottom: calc(var(--m) - var(--s)*0.38);
        background-color: #060c2a;
        transition: all 0.4s ease; 
        position: relative;
    }

    /* on hover, scale the hexagon */
    .hex div:hover {
        transform: scale(1.1);
        
    }

    .hex-img {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        overflow: hidden;
        transition: all 0.4s ease; 
    }

    .hex div:hover .hex-img img {
        opacity: 0.5;
    }
        
    .hex-img img {
        max-width: 100%; /* Allow image to fill the container */
        max-height: 100%; /* Maintain aspect ratio without exceeding container */
        object-fit: contain; /* Ensures the image is resized properly within the container */
    }

    .tech-name {
        position: absolute;
        bottom: 50%; /* Adjust based on your design */
        width: 100%;
        text-align: center;
        color: #fff; /* Adjust font color based on your design */
        font-size: 14px; /* Adjust font size based on your design */
        opacity: 0; /* Tech name is initially invisible */
        transition: opacity 0.4s; /* Smooth transition for the opacity */
        pointer-events: none; /* Prevent the label from interfering with hexagon's hover */
    }

    .hex div:hover .tech-name {
        opacity: 1; /* Tech name becomes visible on hover */
    }


    .hex::before {
        content: "";
        width: calc(var(--s)/2 + var(--m));
        float: left;
        height: 120%;
        shape-outside: repeating-linear-gradient(     
                        #0000 0 calc(var(--f) - 3px),      
                        #000  0 var(--f));
    }
</style>
<script>

</script>

<section id="contact">
    <footer
        class="py-20 sm:py-32 bg-black border-t border-solid border-green-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
    >
        <div class="relative inline-block"> 
            <div id="particle-light" class="particle-start"></div>
            <p class="px-4 py-2 bg-white text-slate-950 font-medium z-10 relative">
                Connect with me &darr;
            </p>
        </div>
        
        <div class="flex flex-col gap-4 items-center justify-center">
            <p><b class="pr-2"><i class="fas fa-envelope"></i> Email</b> dmaxwell484@gmail.com</p>
            <p>
                <b class="pr-2"><i class="fa-brands fa-github"></i> GitHub</b>
                <a href="https://github.com/dsm1015" target="_blank" class="text-green-400"
                    >dsm1015<sup class=""
                        ><span class="text-xs scale-75 pl-0.5"
                            ><i
                                class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
                            /></span
                        ></sup
                    ></a
                >
            </p>
            <p>
                <b class="pr-2"><i class="fa-brands fa-linkedin"></i> LinkedIn</b>
                <a href="https://www.linkedin.com/in/douglas-maxwell-7015b4215/" target="_blank" class="text-green-400"
                    >Douglas Maxwell<sup class=""
                        ><span class="text-xs scale-75 pl-0.5"
                            ><i
                                class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
                            /></span
                        ></sup
                    ></a
                >
            </p>
        </div>
    </footer>
</section>

<style>
    #particle-light{
        position: absolute;
        width: 10px;
        height: 10px;
        background: green;
        box-shadow: 0 0 12px 8px green; /* Adjust for desired glow effect */
        border-radius: 50%; /* Makes the particle round */
        z-index: 0; /* Ensures the particle is behind the paragraph */
        opacity: 0;
        visibility: hidden;
    }

    #contact:target #particle-light {
        visibility: visible; /* Make visible when #contact is targeted */
        opacity: 1; /* Make opaque */
        animation: boxOrbit 4s linear forwards; /* Animation plays once */
    }

    .particle-start {
        visibility: hidden;
        opacity: 0;
    }

    @keyframes boxOrbit {
        0%, 100%{
            top: 0;
            left: 0;
        }
        25% {
            top: 0;
            left: 100%; /* Move to the right */
            transform: translate(-100%, 0); 
        }

        50% {
            top: 100%;
            left: 100%; /* Move to the bottom right corner */
            transform: translate(-100%, -100%); 
        }

        75% {
            top: 100%;
            left: 0; /* Move to the bottom left corner */
            transform: translate(0, -100%); 
        }
    }
</style>
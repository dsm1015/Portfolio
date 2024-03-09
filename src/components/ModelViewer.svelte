<script>
    import { T, useTask } from '@threlte/core'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { OrbitControls } from '@threlte/extras';
	import { writable } from 'svelte/store';
    import { isModelLoading } from '$lib/stores';
    import * as THREE from 'three';

    
    const model = writable(null);
    
    const manager = new THREE.LoadingManager( () => {
    } );
    manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
        console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };
    manager.onLoad = function ( ) {
        console.log( 'Loading complete!');
        isModelLoading.set(false);
    };
    manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };
    manager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
    };

    const loader = new GLTFLoader( manager );
    
    loader.load('/assets/northhall/northHall.gltf', function ( gltf ) {
        console.log(gltf);
        model.set(gltf);
    });

    let rotation = 0;
    let isMouseOver = false;
    useTask((delta) => {
        if (!isMouseOver) {
            rotation += (delta / 2);
        }
    });

    const scale = spring(1, {
        stiffness: 0.1,
        damping: 0.2
    });

    interactivity();
</script>

{#if $model}
    <T.PerspectiveCamera makeDefault position={[10, 10, 16]} fov={50}>
        <OrbitControls enableDamping />
    </T.PerspectiveCamera>
    <T.DirectionalLight position={[0, 25, 20]} color={[0xffffff]} />
    <T.HemisphereLight skyColor={[0xffffff]} groundColor={[0xffffff]} intensity={0.5} />
    <T is={$model.scene} rotation.y={rotation} scale={$scale}
        on:pointerenter={() => {
            scale.set(1.1);
            isMouseOver = true;
        }}
        on:pointerleave={() => {
            scale.set(1);
            isMouseOver = false;
        }}/>
{/if}

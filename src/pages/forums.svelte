<script lang="ts">
    import Header from "../components/Header.svelte";
    import { onMount } from 'svelte';

    const forums = [
        {
            img: "/src/assets/alchemy.jpg",
            name: "Alchemy",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"

        },
        {
            img: "/src/assets/attic.png",
            name: "Attic42",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/avax.jpg",
            name: "Avalanche",
            
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/binance.png",
            name: "Binance",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/chainlink.png",
            name: "Chainlink",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"

        },
        {
            img: "/src/assets/coinmarketcap.png",
            name: "Coinmarketcap",
            
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/consensus.png",
            name: "Consensus",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/dfinity.png",
            name: "Dfinity",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/kraken.png",
            name: "Kraken",

            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"

        },
        {
            img: "/src/assets/opensea.png",
            name: "Opensea",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/ripple.png",
            name: "Ripple",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/pancake.png",
            name: "Pancake",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/solana.png",
            name: "Solana",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"

        },
        {
            img: "/src/assets/tenderly.png",
            name: "Tenderly",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        {
            img: "/src/assets/tron.jpg",
            name: "Tron",
            schema: "0xbe2d69c7f51a2dc57e50c7f8f44c4adbc0141cdacefc7b48fa45c295b496b269"
        },
        
    ]

</script>

<Header/>
<h1>Featured forums</h1>
<div class="forums">
    {#each forums as forum}
        <div class="forum">
            <div class="forum-img" style="background-image:url({forum.img});">
                
            </div>
            <div class="forum-stats">
                <p class="f-name">{forum.name}</p>
                <p class="f-schema">{forum.schema}</p>            
            </div>
        </div>
    {/each}
</div>

<style>

    h1 {
        text-align: center;
        margin-top: 2rem;
    }

    .forums {
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: center;
        margin: 2rem;
        gap: 2rem;
    }

    .forums {
        width: 20rem;
        overflow: hidden;
        background-color: var(--secondary-color);
        border-radius: 1rem;
        display: flex;
        /* flex-direction: column; */
    }

    .forums .f-wallet {
        border-top: 1px solid var(--primary-color);
        padding-top: 0.3rem;
    }

   

    .f-name {
        text-align: center;
        font-weight: 800;

        font-size: 1.2rem;
    }

    .f-schema {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .forum-img {
        background-color: white;
        height: 8rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
       
    }

    .forum,
    .forum:hover,
    .forum-premium:hover {
        transform: scale(1.05);
    }

</style>
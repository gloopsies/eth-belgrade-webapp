<script lang="ts">
    import { link } from 'svelte-routing'
    
    import Search from "./Search.svelte";

    import { connected, connect, has_provider } from "../lib/eth";

    export let main: boolean = false;
</script>

<header class:main>
    
    <a use:link href="/" class="logo">
        <img src="/src/assets/logo.png" alt="Ponte" width="50" height="50" class="logo" />
        Ponte
    </a>

    {#if !main}
        <Search />
    {/if}

    {#await has_provider() then provider}
        {#if provider}
            {#await connected() then _connected}
                {#if _connected}
                    <a class="button" use:link href="profile">
                        Profile
                    </a>
                {:else}
                    <button on:click={connect}>
                        Log in
                    </button>
                {/if}
            {/await}
        {:else}
            <a class="button" href="https://metamask.io/flask/">
                Get Metamask
            </a>
        {/if}
    {/await}
</header>

<style lang="scss">
    header {
        background-color: hsla(0, 0%, 0%, 60%);
        backdrop-filter: blur(20px);

        position: sticky;
        top: 0;
        inset-inline: 0;

        height: 4rem;
        z-index: 100;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        padding: 0.5rem 2rem;
    }

    .main {
        position: fixed;
    }

    .logo {
        color: white;
        font-weight: 800;
        font-size: 1.5rem;
        text-decoration: none;
    }

    button, .button {
        text-decoration: none;
        background-color: var(--primary-color);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        color: black;

        &:hover {
            filter: brightness(1.2);
        }

        &:active {
            filter: brightness(1.4);
        }
    }
    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>
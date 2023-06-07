<script lang="ts">
    import Header from "../components/Header.svelte";
    import Search from "../components/Search.svelte";
    import Under from "../components/Under.svelte";
</script>

<Header main />
<main>
    <div class="hero slide">
        <div class="card">
            <img src="/src/assets/logo.png" class="logo" alt="logo" />
            <h2>Bridge between anonimity and trust.</h2>
            <div class="search">
                <Search />
            </div>
            <p>Millions must search for companies</p>
        </div>
    </div>
    <div class="slide">
        <Under />
    </div>

    <div />
</main>

<style lang="scss">
    .slide {
        min-height: 100vh;
        display: flex;
    }

    .hero {
        padding: 2rem;
        background: url("../assets/background1.png");
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        position: relative;

        display: grid;
        place-content: center;

        color: white;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 2rem;

        background-color: hsla(0, 0%, 0%, 60%);
        backdrop-filter: blur(20px);

        width: clamp(50%, 50rem, 100%);

        padding: 4rem 6rem;
        border-radius: 1rem;
    }

    .search {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .logo {
        width: 13em;
    }
</style>

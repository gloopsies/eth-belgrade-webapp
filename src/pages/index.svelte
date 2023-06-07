<script lang="ts">
    import Header from "../components/Header.svelte";
    import Search from "../components/Search.svelte";
</script>

<Header main />
<main>
    <div class="hero">
        <div class="bridge">
            <h1>Ponte</h1>
            <div class="search">
                <Search />
            </div>
            <h2>
                Bridge between anonimity and trust
            </h2>
        </div>
    </div>
    <div class="slide">
        <h1>We provide:</h1>
        <div class="cards">
            <div class="card">
                <h2>Anonymous Feedback</h2>

                <p>
                    Unlock the potential to share your thoughts and professional
                    journey on in real time our secure and anonymous platform.
                    Your valuable work experiences can be freely expressed, with
                    the assurance of complete privacy protection.
                </p>
            </div>

            <div class="card">
                <h2>Community Forum</h2>

                <p>
                    Explore our vibrant community forum, where users can delve
                    into meaningful discussions. Connect with others who share
                    your passions, exchange experiences, and gain valuable
                    insights in a secure and supportive space.
                </p>
            </div>
            <div class="card">
                <h2>Reputation Management</h2>
                <p>
                    In addition to anonymous feedback and the community forum,
                    our web app offers a powerful reputation management system.
                    This feature empowers companies to monitor and respond to
                    user feedback, ensuring they can proactively address
                    concerns and improve their operations.
                </p>
            </div>
        </div>

        

        <div class="partners">
            <h2>Powered by</h2>
            <div class="logos">
                <div class="logo">
                    <img src="/src/assets/semaphore.png" alt="logo" />
                    <p class="logostext">Semaphore</p>
                </div>
                
                <div class="logo">
                    <img src="/src/assets/metamask.svg.png" alt="logo" />
                    <p class="metatext">MetamaskSnaps</p>
                </div>
                
                <div class="logo">
                    <img src="/src/assets/eas.png" alt="logo" />
                    <p class="eastext">EAS</p>
                </div>
                
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    .hero h1 {
        font-size: 5rem;
    }

    p {
        font-size: 1.2rem;
        text-align:center;
    }

    h2 {
        text-align:center
    }
    
    .pBold {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .hero {
        height: 100vh;
        // padding-top: 5rem;
        display: grid;
        place-content: center;
    }

    .bridge {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12rem 20rem;
        padding-top: 5rem;
        gap: 2rem;
        background: url("../assets/bridge.jpg");
        background-position: center;
        background-size: cover;
        border-radius: 1rem;
        isolation: isolate;
        overflow: hidden;
        color: white;

        &:before {
            content: "";
            z-index: -1;
            position: absolute;
            inset: 0;
            background-color: rgba(12, 9, 9, 0.7);
        }
    }

    .search {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        padding-top: 5rem;
        height: 100vh;
    }

    .partners {
        display: flex;
        flex-direction: column;
        align-items: center;

        .logos {
            display: flex;
            gap: 1rem;
        }
    }

    .cards {
        display: grid;
        flex: 1;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        padding-inline: max(2em, calc((100% - 120ch) / 2));
    }

    .card {
        background-color: var(--secondary-color);
        padding: 2rem;
        border-radius: 1rem;
    }

    .cardSmall {
        background-color: var(--secondary-color);
        padding: 1rem;
        border-radius: 1rem;
    }

    .logos {
        display:flex;
        justify-content: center;
        padding: 2.5rem;
    }


    .logo {
        flex-basis: 30%;
        filter: grayscale(100%);
        margin-inline: 3rem;;
    }

    .logos img{
        width: 10rem;
    }

    .logostext {
        padding-top: 1.5rem;
        padding-left: 1rem;
    }

    .metatext {
        padding-top: 1.5rem;
    }

    .eastext {
        padding-top: 1.5rem;
        
    }
</style>

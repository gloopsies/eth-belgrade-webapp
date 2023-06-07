<script lang="ts">
    import Header from "../components/Header.svelte";
    import { get_reviews, send_review } from "../lib/eth";

    let title = '';

    function submitForm() {
      send_review(962023, {
        title,
        description: "retard",
        rating: -1
      })
    }

    let showModal = false;
    const comm = [
        "bla", "blabla"
    ];
</script>

<Header/>
<main>
    <div class="heading">
        <img src="/src/assets/biance.png" alt="" class="profile">
        <div class="comp-image">
            
        </div>
    </div>
    <div class="content first">
        <div class="details">
            <div class="name">
            <p class="titles">Name </p>
            <p class="comp-text">Binance </p>
            </div>
            <div class="industry">
            <p class="titles">Industry</p>
            <p class="comp-text">Web3 - Blockchain</p>
                
            </div>
            <div class="web">
            <p class="titles">Website</p>
            <p class="comp-text">www.binance.com</p>
                
            </div>
            <div class="employes">
            <p class="titles">Employes </p>
            <p class="comp-text">6 and counting! </p>
                
            </div>
        </div>
    </div>

    <div class="content">
        At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from. Today, Binance is the world’s leading blockchain ecosystem, with a product suite that includes the largest digital asset exchange. Our mission is to be the infrastructure provider for crypto in tomorrow’s world.
    </div>

    <div class="title">
        <h2>Comments</h2>
        <button on:click = {() => showModal = true}>
            Add new
            <span class="material-symbols-outlined">
                add
            </span>
        </button>
    </div>

    {#await get_reviews(962023) then reviews}
        {#each reviews as review}
        <div class="content">
            <p class="content-description">{review} </p>
        </div>
        {/each} 
    {/await}
</main>
{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="background" on:click={() => showModal = false}>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="modal" on:click|stopPropagation={() => {}}>
            <h2>Comment</h2>
            <label>
                Title:
                <input type="text" bind:value={title}>
            </label>

            <label>
                Rating:
                <input type="number" min="1" max="10">
            </label>

            <label>
                Description:
                <textarea rows="5" cols="60"></textarea>
            </label>
            <button on:click={submitForm}>Submit</button>
        </div>
    </div>
{/if}


<style lang=scss>
    $max-width: 80ch;
    main {
        padding-top: 2rem;
        padding-inline: max(2em, calc((100% - $max-width) / 2));
    }

    .heading {
        display: flex;
        gap: 2rem;
    }

    .profile {
        aspect-ratio: 1/1;
        width: 10rem;
        object-fit: cover;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        place-content: center;

        background-color: var(--secondary-color);
        border-radius: 1rem;
    }

    .details div {
        padding-inline: 2rem;
    }

    .titles {
        font-weight: 800;
    }

    .content {
        margin-top: 1rem;
        background-color: var(--secondary-color);
        width: 100%;
        border-radius: 1rem;

        padding: 1rem;

        &.first {
            margin-top: 2rem;
        }
    }

    .title {
        margin-top: 3rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 3rem;
        gap: 3rem;

        button {
            background-color: var(--primary-color);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;

            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    .comp-image {
        background-image: url('/src/assets/binance.png');
        background-size: cover;
        background-position: center;
        padding-inline: 20.5rem;
        border-radius: 1rem;
        border: 1px solid var(--primary-color);
    }

    .background {
        position: fixed;
        background-color: rgba(0,0,0,.8);
        inset: 0;
        z-index: 100;
        display:grid;
        place-content: center;
       
    }

    .modal {
        background-color: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3rem;
        border-radius: 1rem;
        align-items: stretch;

        
    }
    .modal label {
        display:flex;
        flex-direction: column;
        align-items: stretch;
        margin-bottom: 0.5rem;
        
        
    }

    .modal input {
        width: 100%;
        border: 1px solid var(--primary-color);
        border-radius: 0.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 0.3rem;
        background-color: white;
    }

    .modal button {
        
        border: none;
        padding: 0.3rem 0 0.3rem 0;
        border-radius: 0.5rem;
        margin-top: 1rem;
        color: white;
        background-color: var(--primary-color);
    }

    .modal h2 {
        text-align: center;
        padding-bottom: 1rem;

    }

   .modal textarea {
    border: 1px solid var(--primary-color);;
    border-radius: 0.5rem;

   } 

   .top {
    display:flex;
    
   }

   .content-title {
    font-weight: 800;
    padding-right: 1rem;
   }

   .content-rating {
        border: 1px solid black;
        border-radius: 0.5rem;
        width: 4rem;
        padding-left: 0.7em;
    }

    .content-description {
        padding-top: 2rem;
    }

    .attestee {
        margin-top: 1rem;
        background-color: var(--secondary-color);
        width: 90%;
        border-radius: 1rem;
        padding-right: 1rem;
        padding: 1rem;
        // text-align:center;
        &.first {
            margin-top: 2rem;
        }
    }

    .attestee-title {
        font-weight: 800;
        padding-right: 1rem;
    }

    .attestee-description {
        // padding-top: 2rem;
    }


    .cards {
        display: grid;
        flex: 1;
        // gap: 2rem;
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

    .pBold {
        font-size: 1.2rem;
        font-weight: bold;
    }
</style>
<script lang="ts">
    import Header from "../components/Header.svelte";

    const premium = [
        {
            img: "/src/assets/background1.png",
            name: "Ponte",
            type: "Web3 company",
            rating: 9.9,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/background1.png",
            name: "Ponto",
            type: "Web3 company",
            rating: 9.9,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/background1.png",
            name: "Ponta",
            type: "Web3 company",
            rating: 9.9,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/background1.png",
            name: "Ponti",
            type: "Web3 company",
            rating: 9.9,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        }
    ];

    const companies = [
        {
            img: "/src/assets/alchemy.jpg",
            name: "Alchemy",
            type: "Web3 company",
            rating: 4.3,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"

        },
        {
            img: "/src/assets/attic.png",
            name: "Attic42",
            type: "Web3 company",
            rating: 8.7,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/avax.jpg",
            name: "Avalanche",
            type: "Web3 company",
            rating: 2.3,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/binance.png",
            name: "Binance",
            type: "Web3 company",
            rating: 9.1,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/chainlink.png",
            name: "Chainlink",
            type: "Web3 company",
            rating: 5.1,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"

        },
        {
            img: "/src/assets/coinmarketcap.png",
            name: "Coinmarketcap",
            type: "Web3 company",
            rating: 4.4,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/consensus.png",
            name: "Consensus",
            type: "Web3 company",
            rating: 3.9,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/dfinity.png",
            name: "Dfinity",
            type: "Web3 company",
            rating: 7.1,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/kraken.png",
            name: "Kraken",
            type: "Web3 company",
            rating: 6.2,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"

        },
        {
            img: "/src/assets/opensea.png",
            name: "Opensea",
            type: "Web3 company",
            rating: 4.4,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/ripple.png",
            name: "Ripple",
            type: "Web3 company",
            rating: 5,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/pancake.png",
            name: "Pancake",
            type: "Web3 company",
            rating: 4.1,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/solana.png",
            name: "Solana",
            type: "Web3 company",
            rating: 5.6,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"

        },
        {
            img: "/src/assets/tenderly.png",
            name: "Tenderly",
            type: "Web3 company",
            rating: 6.3,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        {
            img: "/src/assets/tron.jpg",
            name: "Tron",
            type: "Web3 company",
            rating: 5.2,
            location: "Metaverse",
            wallet: "0xa0D53c38A5fea6CdAe03aAed4dfafE6C1fD56184"
        },
        
    ]
    premium.sort((a, b) => b.rating - a.rating);
    companies.sort((a, b) => b.rating - a.rating);

    

</script>

<Header/>
<h1>Featured companies</h1>
<div class="companies">
    {#each premium as company}
    <div class="company-premium">
        <div class="company-img" style="background-image:url('/src/assets/logo.png');">
            
        </div>
        <div class="company-stats">
            <p class="c-name">{company.name}</p>
            <p class="c-type">{company.type}</p>
            <p class="c-rating">{company.rating} ★</p>
            <p class="c-location">{company.location}</p>
            <p class="c-wallet">{company.wallet}</p>            
        </div>
    </div>
{/each}
</div>
<h1>Explore more</h1>
<div class="companies">
    {#each companies as company}
        <a href="/company/1" class="company">
            <div class="company-img" style="background-image:url({company.img});">
                
            </div>
            <div class="company-stats">
                <p class="c-name">{company.name}</p>
                <p class="c-type">{company.type}</p>
                <p class="cc-rating">{company.rating} ★</p>
                <p class="c-location">{company.location}</p>
                <p class="c-wallet">{company.wallet}</p>            
            </div>
        </a>
    {/each}
</div>

<style>

    h1 {
        text-align: center;
        margin-top: 2rem;
    }

    .companies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2rem;
        gap: 2rem;
    }

    .company {
        width: 20rem;
        overflow: hidden;
        background-color: var(--secondary-color);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
    }

    .company .c-wallet {
        border-top: 1px solid var(--primary-color);
        padding-top: 0.3rem;
    }

    .company-stats {
        padding: 1rem;
    }

    .c-name {
        text-align: center;
        font-weight: 800;

        font-size: 1.2rem;
    }

    .c-wallet {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
     .company-premium {
        width: 20rem;
        overflow: hidden;
        background-color: var(--primary-color);
        color: white;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
    }

    .company-premium .company-img {
        background-color: black;
    }
    
    .c-rating {
        border: 1px solid white;
        border-radius: 0.5rem;
        width: 4rem;
        padding-left: 0.7em;
    }

    .company-stats p {
        margin-bottom: 1rem;

    }

    .cc-rating {
        border: 1px solid black;
        border-radius: 0.5rem;
        width: 4rem;
        padding-left: 0.7em;
    }

    .company-img {
        background-color: white;
        height: 8rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
       
    }

    .company,
    .company-premium {
        transition: transform 0.3s ease-in-out;
    }

    .company:hover,
    .company-premium:hover {
        transform: scale(1.05);
    }


    a {
        color: inherit;
        text-decoration: none;
    }
</style>
<script lang="ts">
    import Header from "../components/Header.svelte";
    import { get_address } from "../lib/eth";

    let tab = 0;
    
    const get_jobs = async () => {
        const address = await get_address();
        const query = `
            query attestation {
                attestations(where: {recipient: {equals: "${address}"}}) {
                    decodedDataJson
                    id
                }
            }
        `

        const response = await fetch("https://sepolia.easscan.org/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query})
        })

        const results = await response.json()

        return results.data.attestations
            .map(e => ({data: JSON.parse(e.decodedDataJson), id: e.id}))
            .filter(e => e.data.length == 3)
            .map(e => ({company: e.data[0].value.value, position: e.data[1].value.value, id: e.id}));
    }
</script>

<Header/>
<main>
    <div class="heading">
        <img src="/src/assets/john.png" alt="profile" class="profile">
        <div class="details">
            <span>Name:</span>
            <span>John Doe</span>
            <span>Position</span>
            <span>Developer</span>
            <span>Company:</span>
            <span>ETH Belgrade</span>
            <span>Address:</span>

            <span>
                {#await get_address() then address}
                    {address}
                {/await}
            </span>
        </div>
    </div>
    <div class="content">
        <div class="tabs">
            <button class:active={tab === 0} on:click={() => tab = 0}>
                Work history
            </button>
            <button class:active={tab === 1} on:click={() => tab = 1}>
                Projects
            </button>
            <button class:active={tab === 2} on:click={() => tab = 2}>
                About me
            </button>
        </div>
        <div class="about">
            {#if tab === 0}
                <div class="timeline" />
                <ul>
                    {#await get_jobs() then jobs}
                        {#each jobs as job}
                            <li>
                                <div class="job">
                                    <strong><a href={`https://sepolia.easscan.org/attestation/view/${job.id}`}>{job.position}</a></strong>
                                    {job.company}
                                </div>
                            </li>
                        {/each}
                    {/await}
                </ul>
            {/if}
        </div>
    </div>
   
</main>

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
        display: grid;
        grid-template-columns: auto 1fr;
        flex-grow: 1;
        padding: 1rem 2rem;
        place-content: center;
        gap: 0.1rem 1rem;

        background-color: var(--secondary-color);
        border-radius: 1rem;

        span:nth-of-type(2n) {
            font-weight: 800;
        }
    }

    .content {
        margin-top: 2rem;
        background-color: var(--secondary-color);
        width: 100%;
        border-radius: 1rem;

        padding-bottom: 1rem;
    }

    .tabs {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        padding: 1rem;
        gap: 2rem;
        justify-content: center;
        list-style: none;

        .active {
            text-decoration: underline;
            text-decoration-color: var(--primary-color);
            text-underline-offset: 0.4rem;
            text-decoration-thickness: 0.15rem;
            font-weight: 800;
        }
    }

    .about {
        position: relative;
        padding-inline: 3rem;
        
        .timeline {
            position: absolute;
            inset-block: 0;
            width: 0.2rem;
            background-color: var(--primary-color);
        }

        ul {
            padding-block: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            list-style: none;
            margin-left: 1rem;
        }
    }

    .job {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-left: 0.5rem;

        &:before {
            content: "";
            aspect-ratio: 1/1;
            width: 0.8rem;
            border-radius: 50%;
            border: 0.2rem solid var(--primary-color);
            background-color: var(--background-color);
            top: 0.1rem;
            left: -1.45rem;
            position: absolute;
        }

        .dates {
            line-height: 2rem;
            font-size: 0.8rem;
        }
    }


    a {
        color: var(--text-color)
    }
</style>
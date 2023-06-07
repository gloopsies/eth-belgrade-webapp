<script>
</script>

<div class="bla">
  <h2>Powered by</h2>
  <div class="logos">
    <div class="logo">
      Semaphore
    </div>
    <div class="logo">
      ETH Attestation
    </div>
    <div class="logo">
      Metamask
    </div>
  </div>
  <div class="under">
      <div class="card">
        <h2>Anonymous Feedback</h2>
        <h3>
          Unlock the potential to share your thoughts and professional journey on
          in real time our secure and anonymous platform. Your valuable work
          experiences can be freely expressed, with the assurance of complete
          privacy protection.
        </h3>
        <span class="material-symbols-outlined" id="communication">
          communication
        </span>
      </div>
  
      <div class="card">
        <h2>Community Forum</h2>
        <h3>
          Explore our vibrant community forum, where users can delve into
          meaningful discussions. Connect with others who share your passions,
          exchange experiences, and gain valuable insights in a secure and
          supportive space.
        </h3>
        <span class="material-symbols-outlined" id="forum"> forum </span>
      </div>
      <div class="card">
        <h2>Reputation Management</h2>
        <h3>
          In addition to anonymous feedback and the community forum, our web app
          offers a powerful reputation management system. This feature empowers
          companies to monitor and respond to user feedback, ensuring they can
          proactively address concerns and improve their operations.
        </h3>
        <span class="material-symbols-outlined" id="star"> star_half </span>
      </div>
  </div>
</div>

<style lang="scss">
  .bla {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .under {
    display: grid;
    place-content: center;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    padding-inline: 12rem;
  }

  .logos {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  #communication {
    font-size: 16em;
  }

  #forum {
    font-size: 12em;
    margin-top: 15%;
  }

  #star {
    font-size: 12em;
  }

  .card {
    position: relative;
    isolation: isolate;
    color: whitesmoke;
    overflow: hidden;
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -2;
      background-image: linear-gradient(
        45deg,
        rgb(255, 72, 26),
        rgb(163, 14, 0)
      );
    }

    &:after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      // background-color: hsla(0, 0, 0, 30%);
      backdrop-filter: blur(20px);
    }
  }

  .card h2 {
    padding-bottom: 3%;
  }
</style>

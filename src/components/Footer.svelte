<footer>
  <p>
    SvelteKit clone by <span>pngwn!</span> Original by
    <a href="https://twitter.com/sarah_edo" target="_blank" rel="noopener"
      >sarah_edo</a
    >. This project is open source, visit<a
      href="https://github.com/pngwn/svelte-travel-transitions"
      target="_blank"
      rel="noopener"
    >
      the repo.
    </a>
  </p>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: black;
    color: white;
    text-align: center;
    letter-spacing: 0.03em;
    margin-top: 30px;
    width: 100%;
    height: 50px;
  }
  span {
    color: hotpink;
    font-weight: bold;
  }
  a,
  a:visited,
  a:active {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding-left: 6px;
  }

  @media screen and (max-width: 450px) {
    footer {
      height: 80px;
    }
  }
</style>

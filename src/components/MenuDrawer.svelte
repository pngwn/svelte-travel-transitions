<script>
  import { firstName, grow, fade } from "./_shared.js";
  import { users, currentUser } from "../store/index.js";
</script>

<div class="menudrawer" in:grow>
  <ul>
    <li in:fade={{ delay: 50 }}>
      <a href="/">{firstName($currentUser.name)}'s Home</a>
    </li>
    <li in:fade={{ delay: 150 }}>
      <a href="/place">{firstName($currentUser.name)}'s Places</a>
    </li>
    <li in:fade={{ delay: 250 }}>
      <a href="/group">{firstName($currentUser.name)}'s Group Trips</a>
    </li>
  </ul>
</div>

<style lang="scss">
  .menudrawer {
    background: rgba(0, 0, 0, 0.8);
    line-height: 1.8;
    text-align: right;
    position: absolute;
    right: 0px;
    top: 45px;
    padding: 20px;
    border-radius: 4px;
    z-index: 10000;
    transform-origin: 100% 0%;
    ul {
      list-style: none;
    }
  }

  a,
  a:visited,
  a:active {
    color: white;
  }
</style>

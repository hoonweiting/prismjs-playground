<script lang="ts">
  const themes = [{
    name: 'One Dark',
    slug: 'one-dark',
  }, {
    name: 'One Light',
    slug: 'one-light',
  }]

  let selectedTheme: String = 'one-dark'

  function setTheme(themeSlug: String) {
    selectedTheme = themeSlug
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/prism-{ selectedTheme }.css" />
</svelte:head>

<ul class="theme-selection-list">
  {#each themes as theme}
    <li>
      <button
        type="button"
        on:click={() => setTheme(theme.slug)}
        class="theme-selection-button"
        aria-pressed={selectedTheme === theme.slug}
      >
        {theme.name}
      </button>
    </li>
  {/each}
</ul>

<style>
  .theme-selection-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .theme-selection-button {
    width: 100%;
    padding: 4px 8px;
    font-size: 1rem;
  }

  .theme-selection-button[aria-pressed="true"] {
    background-color: hsl(0 0% 18%);
  }
</style>

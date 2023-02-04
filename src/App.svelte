<script lang="ts">
  import CodeSnippets from "./lib/CodeSnippets.svelte";
  import ThemeList from "./lib/ThemeList.svelte";
</script>

<header id="site-header">
  <div class="adaptive-content">
    <h1>
      Prism.js Playground
    </h1>
  </div>
</header>

<main class="adaptive-content">
  <aside id="sidebar">
    <h2 style="font-size: 1.25rem;">
      Themes
    </h2>

    <ThemeList />
  </aside>

  <section>
    <h2>
      Code Snippets
    </h2>

    <CodeSnippets />
  </section>
</main>

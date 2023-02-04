<script lang="ts">
  import Css from './../code-snippets/Css.svelte'
  import Html from './../code-snippets/Html.svelte'
  import Javascript from './../code-snippets/Javascript.svelte';
  import Json from './../code-snippets/Json.svelte'

  const snippets = [{
    title: 'HTML',
    component: Html,
  }, {
    title: 'CSS',
    component: Css,
  }, {
    title: 'JavaScript',
    component: Javascript,
  }, {
    title: 'JSON',
    component: Json,
  }]
</script>

<div style="display: flex; flex-direction: column; gap: 24px;">
  {#each snippets as snippet}
    <section>
      <h3>
        {snippet.title}
      </h3>

      <svelte:component this={snippet.component} />
    </section>
  {/each}
</div>

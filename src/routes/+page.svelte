<script>
  import { onMount } from 'svelte';
  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://registro-touro-beyond.pockethost.io'); 

  export let data; 
  let listas;
  onMount(async () => {
    listas = await pb.collection('boiadeiro').getFullList();
    console.log(listas[0]);
  });

</script>

<!-- Show All records -->
<!--Esperar finalizar o omMount -->
{#await listas}
  {#each listas as record}
    <div>
      <h2>{record.nome}</h2>
      <p>{record.quantidade}</p>
    </div>
  {/each}
{/await}

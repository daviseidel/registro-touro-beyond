<script>
  import { invalidateAll } from "$app/navigation"
  import { onMount } from 'svelte';
  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://registro-touro-beyond.pockethost.io'); 

  export let data;
  let boiadeiros = data.records.items;
  let quemMudou;
  let tempo;

  async function reduzirIda(id){
    const boiadeiro = await pb.collection('boiadeiro').getOne(id);
    const updateData = {"idas": boiadeiro.idas - 1, "tempo": tempo}
    const update = await pb.collection('boiadeiro').update(id, updateData);
  }
  
  onMount(async () => {
    pb.collection('boiadeiro').subscribe('*', async function (e) {
      invalidateAll() 
    });
  })
</script>

{#if boiadeiros.length > 0}
  {#each data.records.items as record}
    <div class="block card p-4 m-2">
      <h2>{record.nome}</h2>
      <p>Ingressos Restantes: {record.idas}</p>
      <p>Tempo Máximo: {record.tempo}</p>
      <label for="tempo" class="label">Tempo</label>
      <input type="text" id="tempo" name="tempo" class="input" bind:value={tempo} required>

      <button type="button" class="btn variant-filled-primary" on:click={reduzirIda(record.id)}>Utilizar Ingresso</button>
    </div>
  {/each}
{:else}
  <h1 class= "m-4"> Sem ninguém pendente </h1>
{/if}


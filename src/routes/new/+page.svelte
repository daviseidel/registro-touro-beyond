<script>
  import { goto } from '$app/navigation';
  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://registro-touro-beyond.pockethost.io'); 
  // Formulário recolhendo os dado para o touro
  let nome;
  let idas;
  let tempo = 0;
  let contato;

  async function criarBoiadeiro(){
    const data = {
      "nome": nome,
      "idas": idas,
      "tempo": tempo,
      "contato": contato
    }
    const record = await pb.collection('boiadeiro').create(data);
    goto("/")
  } 

</script>

<!-- Formulário recolhendo os dados HTML -->
<form class="m-4" on:submit|preventDefault={criarBoiadeiro}>
  <label for="nome" class="label">Nome</label>
  <input type="text" id="nome" name="nome" class="input" bind:value={nome} required>

  <label for="idas">Ingressos</label>
  <input type="number" id="quantidade" name="quantidade" class="input" bind:value={idas} required>

<label for="contato">Contato</label>
  <input type="text" id="contato" name="contato" class="input" bind:value={contato} required>


  <button type="submit" class="btn variant-filled m-2" >Enviar</button>
</form>

  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://registro-touro-beyond.pockethost.io');

export const load = async () => {

  //const listas = await pb.collection('boiadeiro').getFullList({
    //sort: '-created',
  //});
  //console.log(listas)
  return {
    records: "listas",
  };
}

  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://registro-touro-beyond.pockethost.io');

export const load = async () => { 
  return {
    records: await pb.collection('boiadeiro').getList(1, 50, { filter: 'idas > 0' }) 
  };
}

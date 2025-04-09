import { context } from '../dist'; 

const ctx = new context({
  baseUrl: 'https://contextbase.onrender.com'
});

async function runTests() {
//   console.log('\nSigning up...');
//   const token = await ctx.signup('123@example.com', '12345');
//   console.log('Token:', token);

  console.log('\nLoging into...');
  const token = await ctx.login('123@example.com', '12345');
  console.log('Token:', token);

  console.log('\nStoring memory...');
  await ctx.set('Sence', 'programming');

  console.log('\nFetching memory...');
  const memory = await ctx.get('Sence');
  console.log('Memory:', memory);

  console.log('\nListing all keys...');
  const all = await ctx.list();
  console.log('Keys:', all);

  
  console.log('\nDeleting memory...');
  await ctx.delete('Sence');
  console.log('Deleted');

  const list = await ctx.list();
  console.log('All Keys:', list);

  const search = await ctx.search('Style');
  console.log('Search Results:', search);

  console.log('\nDone!');
}

runTests().catch((err) => {
  console.error('Test Failed:', err.message);
});

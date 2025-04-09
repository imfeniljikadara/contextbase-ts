import { context } from '../dist';

const ctx = new context({
  baseUrl: 'https://contextbase.onrender.com'
});

(async () => {
  await ctx.login('123@example.com', '12345');

  await ctx.set('framework', 'next.js');
  await ctx.set('db', 'postgres');
  await ctx.set('cache', 'redis');

  const list = await ctx.list();
  console.log('All Keys:', list);

  const search = await ctx.search('js');
  console.log('Search Results:', search);
})();

import { context } from '../dist';

const ctx = new context({
  baseUrl: 'https://contextbase.onrender.com'
});

async function testDeleteOnly() {
  try {
    console.log('Loging in and getting token...');
    const token = await ctx.login('123@example.com', '12345');
    console.log('Token received:', token);

    console.log('\nSetting a key to delete...');
    await ctx.set('delete-test-key', 'delete-me');
    console.log('Key set');

    console.log('\nDeleting key...');
    const result = await ctx.delete('delete-test-key');
    console.log('Delete success:', result);
  } catch (err: any) {
    if (err.response) {
      console.error('Server responded with an error:');
      console.error('Status:', err.response.status);
      console.error('Data:', err.response.data);
    } else {
      console.error('Unknown Error:', err.message);
    }
  }
}

testDeleteOnly();

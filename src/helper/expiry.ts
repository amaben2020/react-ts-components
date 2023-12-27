// https://www.reacterry.com/portal/deep-dive/local-storage

const expiration = 60 * 60 * 1000; // 1 hour
localStorage.setItem('key', JSON.stringify({data: 'value', timestamp: Date.now() + expiration}));
 
const data = JSON.parse(localStorage.getItem('key') ?? "");
if (data && data.timestamp < Date.now()) {
  localStorage.removeItem('key');
}
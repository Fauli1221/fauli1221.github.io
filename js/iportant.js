const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener('load', async function () {
    await delay(5000);
    window.open('https://www.youtube.com/watch?v=hDJcMk4e0rc', '_blank');
    
})

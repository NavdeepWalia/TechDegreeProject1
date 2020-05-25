const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

//-----------------------------------------------
// Fetch Functions

// fetch('https://dog.ceo/api/breeds/image/random').then(response => console.log(response));

// fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => console.log(data.message));
fetch('https://dog.ceo/api/breeds/list').then(response => response.json()).then(data => console.log(data))




fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => generateImage(data.message));


// Helper Functions

function generateImage(data){
    const html = `
    <img src=' ${data}' alt>
    <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML=html;
}

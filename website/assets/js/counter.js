const counter = document.querySelector('.counter-number');

async function updateViewCount() {
    let response = await fetch('https://xgqyiw2bv24hgpliuimoeadhhq0wxmnn.lambda-url.us-east-1.on.aws/');
    let data = await response.json();
    counter.innerHTML = `${data}`;
}
updateViewCount();
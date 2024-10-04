let newImageURL = chrome.runtime.getURL('freakybob.png');
let images = document.querySelectorAll('img');
let h1Elements = document.getElementsByTagName('h1');

for (let i = 0; i < h1Elements.length; i++) {
  h1Elements[i].textContent = "FREAKYBOB";
}

images.forEach(img => {
  img.src="https://i.imgur.com/OnG3xl0.png";
});
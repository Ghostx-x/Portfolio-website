
const logoSlider = document.querySelector('.logoSlider');
const logoSlider2 = document.querySelector('.logoSlider2');


const cloneCount = 8; 
for (let i = 0; i < cloneCount; i++) {
    const clone = logoSlider.children[i].cloneNode(true);
    logoSlider.appendChild(clone);
}

for (let i = 0; i < cloneCount; i++) {
    const clone = logoSlider2.children[i].cloneNode(true);
    logoSlider2.appendChild(clone);
}
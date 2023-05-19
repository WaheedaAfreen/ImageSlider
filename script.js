const next = document.querySelector(".next");
const prev= document.querySelector(".prev");
const Image = document.querySelector(".Image");

let currentImage = 1;
let timeout;

next.addEventListener("click", () => {
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

prev.addEventListener("click", () => {
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage() {
    if (currentImage >Image .length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage =Image.length;
    }
  Image.style.transform = `translateX(-${(currentImage - 1) * 300}px)`;
    timeout = setTimeout(() => {
        currentImage++;
        updateImage();
    }, 3000);
}
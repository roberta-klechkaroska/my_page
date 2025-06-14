document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".travel-2 img");
    const clickedPhotoContainer = document.querySelector(".clicked-photo");

    images.forEach(img => {
        img.addEventListener("click", () => {
            clickedPhotoContainer.innerHTML = "";

            const newImg = document.createElement("img");
            newImg.src = img.src;
            newImg.alt = img.alt || img.className;
            newImg.style.borderRadius = "10px";

            clickedPhotoContainer.appendChild(newImg);
        });
    });
});

const likeBtn = document.querySelector('#like-btn');
const avatar = document.querySelector('.avatar');

likeBtn.addEventListener('click', () => {
    if (likeBtn.innerText === "Like ❤️") {
        likeBtn.innerText = "Liked! 💖";
        likeBtn.style.backgroundColor = "#ec4899";
        avatar.style.borderColor = "#ec4899"; 
    } else {
        likeBtn.innerText = "Like ❤️";
        likeBtn.style.backgroundColor = "#f0b7b7";
        avatar.style.borderColor = "#3b82f6";
    }
});
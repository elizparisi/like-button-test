let counter = document.getElementById("counter");
let count = 0;

let likeButton = document.getElementById("like_button");

let unlikeButton = document.querySelector("unlike_button");

likeButton.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

// const buttonText = document.querySelector("button");
//
// const buttonClick = document.querySelector(.click);
// buttonClick.addEventListener("click", likePost);
//
// const buttonReset = document.querySelector(.reset)
// button.addEventListener("click", resetLikes);
//
//
// let numOfLikes = 0;
//
// function likePost() {
//   numOfLikes = numOfLikes + 1;
//
//   if (numOfLikes === 1){
//     buttonText.innerHTML = ("1 Like");
//   }
//   else {
//     buttonText.innerHTML = (numOfLikes + " " + "Likes")
//   }
// }
//
// function resetLikes() {
//   numOfLikes = 0;
//
//   buttonText.innerHTML = numOfLikes + "Likes";
// }

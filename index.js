const buttonText = document.querySelector("button");

const buttonClick = document.querySelector(".click");
buttonClick.addEventListener("click");

const buttonReset = document.querySelector(".reset")
button.addEventListener("click");


let numOfLikes = 0;

function likePost() {
  numOfLikes = numOfLikes + 1;

  if (numOfLikes === 1){
    buttonText.innerHTML = ("1 Like");
  }
  else {
    buttonText.innerHTML = (numOfLikes + " " + "Likes")
  }
}

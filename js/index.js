const userPost = document.querySelector("#user-post"); //Récupération de l'élément qui récupère ce que rentre l'utilisateur (champ de saisie du bloc post utilisateur)
const form = document.querySelector(".form-post"); //Récupération du form (bloc du post utilisateur)
const cardContainer = document.querySelector(".posts-container"); //Récupération du bloc qui recevra les posts des amis

//Création d'une fonction qui se déclenche au submit ()
form.onsubmit = function (event) {
  event.preventDefault(); //Eviter de recharger la page

  if (userPost.value === "") {
    return;
  }

  //Création d'un nouveau bloc "post" qui récupère ce qu'a entré l'utilisateur via userPost.value
  let cardPost = `<div class="posts-card">
                        <div class="posts-user-infos">
                            <img src="./images/jade.JPG" alt="avatar" class="posts-user-avatar">
                            <h1 class="posts-user-name">Jade-Ambre</h1>
                            <h2 class="user-mail">@jadambre</h2>
                        </div>
                        <div class="posts-text-bloc">
                            <p class="posts-text">${userPost.value}</p>
                        </div>
                        <div class="post-like-bloc">
                            <Button onclick="Toggle2()" class="btn"><i class="fas fa-heart"></i></Button>
                            <span class="number-of-likes" >0<span class="likes-text"> Like</span> </span>
                        </div>
                    </div>`;

  //Ajout du nouveau post créé au dessus dans le HTML du container de posts
  cardContainer.innerHTML = cardPost + cardContainer.innerHTML;

  //Appel de la fonction ClearFields() qui efface le champ entré par l'utilisateur
  ClearFields();
};

//Déclaration d'une fonction qui efface le champ "what's happening" fonction
function ClearFields() {
  document.querySelector("#user-post").value = "";
}

//POST 1
const btnvar1 = document.getElementById("btnh1");
const nbOfLikesElement1 = document.getElementById("nb-likes-1");
let numberOfLikes1 = Number.parseInt(nbOfLikesElement1.textContent, 10);
let isLiked1 = false;

function Toggle1() {
  if (!isLiked1) {
    btnvar1.style.color = "red";
    numberOfLikes1++;
    nbOfLikesElement1.textContent = numberOfLikes1 + " Likes";
    isLiked1 = !isLiked1;
  } else {
    btnvar1.style.color = "#8e7a7a";
    numberOfLikes1--;
    nbOfLikesElement1.textContent = numberOfLikes1 + " Likes";
    isLiked1 = !isLiked1;
  }
}

//POST 2
const btnvar2 = document.getElementById("btnh2");
const nbOfLikesElement2 = document.getElementById("nb-likes-2");
let numberOfLikes2 = Number.parseInt(nbOfLikesElement2.textContent, 10);
let isLiked2 = false;

function Toggle2() {
  if (!isLiked2) {
    btnvar2.style.color = "red";
    numberOfLikes2++;
    nbOfLikesElement2.textContent = numberOfLikes2 + " Likes";
    isLiked2 = !isLiked2;
  } else {
    btnvar2.style.color = "#8e7a7a";
    numberOfLikes2--;
    nbOfLikesElement2.textContent = numberOfLikes2 + " Likes";
    isLiked2 = !isLiked2;
  }
}

//POST 3
const btnvar3 = document.getElementById("btnh3");
const nbOfLikesElement3 = document.getElementById("nb-likes-3");
let numberOfLikes3 = Number.parseInt(nbOfLikesElement3.textContent, 10);
let isLiked3 = false;

function Toggle3() {
  if (!isLiked3) {
    btnvar3.style.color = "red";
    numberOfLikes3++;
    nbOfLikesElement3.textContent = numberOfLikes3 + " Likes";
    isLiked3 = !isLiked3;
  } else {
    btnvar3.style.color = "#8e7a7a";
    numberOfLikes3--;
    nbOfLikesElement3.textContent = numberOfLikes3 + " Likes";
    isLiked3 = !isLiked3;
  }
}

//POST 4
const btnvar4 = document.getElementById("btnh4");
const nbOfLikesElement4 = document.getElementById("nb-likes-4");
let numberOfLikes4 = Number.parseInt(nbOfLikesElement4.textContent, 10);
let isLiked4 = false;

function Toggle4() {
  if (!isLiked4) {
    btnvar4.style.color = "red";
    numberOfLikes4++;
    nbOfLikesElement4.textContent = numberOfLikes4 + " Likes";
    isLiked4 = !isLiked4;
  } else {
    btnvar4.style.color = "#8e7a7a";
    numberOfLikes4--;
    nbOfLikesElement4.textContent = numberOfLikes4 + " Likes";
    isLiked4 = !isLiked4;
  }
}

const modal = document.querySelector(".modal-content");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", (event) => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", (event) => {
  modal.style.display = "none";
});

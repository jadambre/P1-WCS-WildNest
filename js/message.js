const input = document.querySelector("#message-input");
const formNotif = document.querySelector("#message-form");
const bloc = document.querySelector("#conversation");

formNotif.onsubmit = function (event) {
  event.preventDefault();

  if (input.value === "") {
    return;
  }

  let globalBloc = `<div class="bloc4">
  <div class="message-sent">
    <div class="user2">
         <img src="./images/jade.JPG" alt="photo de profil utilisateur">
         <div class="user-infos-container">
          <h2>Jade-Ambre</h2>
          <h3>@jadambre</h3>
        </div>
    </div>
    <div class="message-content">
         <p>${input.value}</p>
    </div>
</div>
</div>`;

  bloc.innerHTML += globalBloc;

  clearFields();
};

function clearFields() {
  document.querySelector("#message-input").value = "";
}

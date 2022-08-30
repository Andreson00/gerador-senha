
let sliderElement = documento.querySelector("#slider");
let buttonElement = documento.querySelector("#button");

let sizePassword = document.querSelector("valor");
let password = document.querSelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass ="" ;

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(math.floor(math.random() * n));
       }

     containerPassword.classList.remove("hide");
     password.innHTML = pass;

}

function copypPassword(){
    alert("senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}

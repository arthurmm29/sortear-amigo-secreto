let amigos = []
let listaAmigos = document.querySelector ('ul');
let resultadoItem = null;
function adicionarAmigo() {
    let nomes = document.querySelector('input').value
    if (nomes == ''){
       alert('Por favor, insira um nome');
    }
    else {
    amigos.push (nomes);
    console.log (amigos);
    let novoItem = document.createElement('li');
    novoItem.textContent = nomes;
    listaAmigos.appendChild (novoItem);
    limparcampo()
    } 
    if (resultadoItem !== null) {
        resultadoItem.remove();
        resultadoItem = null;
    
} 
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para poder sortear!");
        return;
    }
   let sorteado = Math.floor(Math.random() * amigos.length);
   amigoSorteado = amigos[sorteado]
   listaAmigos.innerHTML = '';
   let resultadoList = document.querySelector('#resultado');
    resultadoItem = document.createElement('li');
    resultadoItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultadoItem.style.color = 'Green';
    resultadoList.appendChild(resultadoItem);
   
   limparcampo();
   amigos = [];
   
}

function limparcampo(){
    campoImput = document.querySelector('input');
    campoImput.value = '';
}
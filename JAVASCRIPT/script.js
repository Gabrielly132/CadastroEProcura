// Procura o elemento que possui o id "item"
let item = document.getElementById("item");
//Procura o element qe possui o id "lista"
let lista = document.getElementById("lista");
//Procura o elemento que possui o id "busca"
let busca = document.getElementById("busca");
//Procura o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById("btnAdicionar");

//Cria uma matriz vazia para guardar os itens // É a casinha
let itens = [];
//QUando clicar no botão adicionar, executa a função adicionar()
adicionar.addEventListener("click", btnAdicionar);
//Quando o usuário digitar no campo busca,
//Executa a função busca()
busca.addEventListener("keyup", buscar);

function btnAdicionar(){
    //Adicionar o valor digitado no array 
    // pega a galinha e leva para casa
    itens.push(item.value);
    //cria uma nova tag <li> // Cria etiqueta vazia
    let li = document.createElement("li")
    //cria um texto com o valor digitado // Pega o nome "galinha" do usuário
    let texto = document.createTextNode(item.value);
    //coloca o texto dentro da tag <li> // coloca o nome da "galinha" na etiqueta
    li.appendChild(texto);
    //coloca o <li> dentro da lista <ul> // Leva a galinha para o curral com a etiqueta
    lista.appendChild(li);
}

function buscar(){

    //pega o valor digitdo e converye para maíuscula // A Denise falou "Boi"
    let nome = busca.value.toLowerCase();
    //Buscar todas as tags <li> da pagina // Vai até o curral
    let itensLista = document.getElementsByTagName("li")
    //Percorre todos os itens da lista // Ele vai percorrer o curral 
    for(let i = 0; i < itensLista.length; i++){
        //pega o texto do item atual e converte para maiúsculas //nesse caso, no curral, as etiquetas ficarão maisculas no momento em que o Elvis percorrer cada animal
        let texto = itensLista[i].textContent.toLocaleLowerCase();
        if(texto.includes(nome)){
            itensLista[i].style.display = "block";
        }
        else{
            itensLista[i].style.display = "none";
        }
    }
}
//VARIAVEIS
let nome = "NOME: Pablo Henrique Teixeira Dantas";
let idade = "Idade " + 25 + " Anos ";
let altura = "Altura " + 1.63;

console.log(nome)
console.log(idade)
console.log(altura)


//CONSTANTES
const valorIngresso = 20;
console.log(valorIngresso)

//TIPOS PRIMITIVOS

let nome1 = "Pablo"; //String Literal
let idade1 = 25 //number literal
let verao = true; //boolean
let sobrenome; //undefined
let corSelecionada = null; //Reseta Valores


//TIPAGEM DINÂMICA
//typeof mostra o tipo da variavel

//OBJETOS

let pessoa = {
    nome: "Pablo",
    sobreNome: "Dantas",
    idade: 25,
    altura: 1.63,
};
let endereco = {
    rua: "Venus",
    numero: 250,

};
console.log(pessoa)
console.log(endereco)

//ARRAYS

let familia = [25, 23, 42, 31, 34, 65, 42, 21, 62, 12, 11, 24, 26, "Pablo", 23, "Dantas"]
console.log(familia)

let nomeAmigo = ["Thiago", 23 + " Anos ", "Rio Grande Do Norte", "ABCDISTA DESDE PEQUENO"]

console.log(nomeAmigo)


//FUNCTIONS - verbo + substantivo

let corSite = "Azul" //definindo cor do site para azul

//funçao para mudar cor do site
function resetaCor(cor,tonalidade) {
corSite = cor + tonalidade;
};

console.log(corSite)
resetaCor("verde"," Claro")
console.log(corSite)
//-----------------------------------

function pintaParede(cor, tonalidade){

   corParede = cor + tonalidade;

};

pintaParede("Azul"," e Preto");

console.log(corParede)


//TIPOS DE FUNÇÕES

// FUNÇÃO REALIZA TAREFA E NAO DEVOLVE NADA
function dizerNome(){
    console.log("Pablo")
}

dizerNome();

//função com retorno
function multPorDois (valor){
    return valor*2;

}

console.log(multPorDois(523452334))

let resultado = multPorDois(6);
console.log(resultado)



//if else

let hora = 19;


if(hora > 6 && hora <= 12){

    console.log("Bom Dia")

}else if(hora > 12 && hora < 18){

console.log("Boa Tarde")
}else{

    console.log("Boa Noite")

}



//switch case


let permissao; //commun, gerente ,diretor

permissao= 'diretor';


switch(permissao){
    case'comun':
    console.log("Usuario Comun")
    break;

    case'gerente':
    console.log("Usuario Gerente")
    break;

    case'diretor':
    console.log("Usuario Diretor")
    break;

    default:
        console.log("Usuario nao reconhecido")
}

//laços repetição
//for
//while
//do.while
//for in
//for of


for(let i = 0; i<34; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

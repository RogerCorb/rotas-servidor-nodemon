const express = require(`express`);
const { filtrarProfessores, encontrarProfessores } =require(`./controladores/professores`);
const app = express(); // app e uma instancia do objeto express

const primeiroIntermediario = (req,res,next) => { 
    // escreva o codigo para filtro aqui
    next();
}
const segundoIntermediario = (req,res,next) => { 
    // escreva o codigo para filtro aqui
    next();
}
const intermediarioDaRota = (req,res,next) => { 
    // escreva o codigo para filtro aqui 
    next();
}

// intermediarios idependentes
app.use(primeiroIntermediario);
app.use(segundoIntermediario);

// as funções que processam os get estão no controlador
// arquivo professor
// localhost:3000/professores - ROTA 1
app.get(`/professores`,intermediarioDaRota, filtrarProfessores); 

// Parametros de rota id
// localhost:3000/professores/2 - ROTA 2 
app.get(`/professores/:id`,encontrarProfessores);

app.listen(3000); // listen vai procurar a rota correta para enviar a resposta

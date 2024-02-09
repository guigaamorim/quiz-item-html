const perguntas = [
    {
      pergunta: "Em que ano o São Paulo FC foi fundado?",
      respostas: [
        "1930",
        "1935",
        "1934"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o apelido do São Paulo FC?",
      respostas: [
        "Tricolor Paulista",
        "Leão do Morumbi",
        "Furacão do Brasil"
      ],
      correta: 0
    },
    {
      pergunta: "Quantos títulos mundiais o São Paulo FC possui?",
      respostas: [
        "2",
        "3",
        "4"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o estádio oficial do São Paulo FC?",
      respostas: [
        "Estádio do Morumbi",
        "Arena Corinthians",
        "Estádio do Pacaembu"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o maior artilheiro da história do São Paulo FC?",
      respostas: [
        "Raí",
        "Leônidas da Silva",
        "Pablo Aimar"
      ],
      correta: 0
    },
    {
      pergunta: "Quantos Campeonatos Brasileiros o São Paulo FC conquistou?",
      respostas: [
        "5",
        "6",
        "7"
      ],
      correta: 1
    },
    {
      pergunta: "Qual técnico comandou o São Paulo FC na conquista do Tricampeonato Mundial em 2005?",
      respostas: [
        "Muricy Ramalho",
        "Telê Santana",
        "Tite"
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o ano da fundação oficial do São Paulo FC?",
      respostas: [
        "1930",
        "1935",
        "1934"
      ],
      correta: 1
    },
    {
      pergunta: "Quantas Libertadores o São Paulo FC possui?",
      respostas: [
        "2",
        "3",
        "4"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o mascote do São Paulo FC?",
      respostas: [
        "São Paulino",
        "Panda",
        "São Paulito"
      ],
      correta: 2
    }
  ];
  
  console.log(perguntas);
  
  
  console.log(perguntas);
  
    
     const quiz = document.querySelector('#quiz')
     const template = document.querySelector('template')
     
    const corretas = new Set()
    const totalDeperguntas = perguntas.length
    const mostrartotal = document.querySelector('#acertos span')
   mostrartotal.textContent = corretas.size + 'de' + totalDeperguntas
  
    // loop ou laço de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta 
  
      for(let respostas of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = respostas 
       dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf  (item))
       dt.querySelector('input').value = item.respostas.indexOf(respostas) 
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
    
         corretas.delete(item)
         if(estaCorreta) {
         corretas.add(item)
         }
          mostrartotal.textContent = corretas.size + 'de' + totalDeperguntas
         
       }
           
       
    
    
    
      quizItem.querySelector('dl').appendChild(dt)
      } 
  
  
      quizItem.querySelector('dl dt').remove()
  
  
      //coloca a pergunta na tela 
     quiz.appendChild(quizItem)
    }
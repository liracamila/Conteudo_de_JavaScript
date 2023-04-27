//EXEMPLOS COM TIMEOUT

// function printAsync() {
//     console.log("Teste");
//  };

//  function printAsync2() {
//     setTimeout((printAsync) => {
//         console.log("Texto teste")
//     }, 2000);
//  };

//  printAsync();

//--------------------------------------------

// let myGreeting = setTimeout(function() {
//     console.log("Hello World!");
//    }, 5000)

// ----------------------------------------------

// setTimeout( 
//     () => {
//         console.log("Oi, depois de 3 segundos");
//     },
//     3 * 1000
//  );

function funcao1(){
    setTimeout( function(){
    console.log('Oi após 5 segundos');
    }, 5000 );
 }

 function funcao2(){
    console.log('Olá');
 }

 funcao1();
 funcao2();
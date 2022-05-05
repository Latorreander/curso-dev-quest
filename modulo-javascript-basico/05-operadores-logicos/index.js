/*
== ---igual --- a==b --- verdadeiro se a for igual a b
=== --- idêntico(tipagem) --- a===b --- verdadeiro se a for idêntico a 
!= --- diferente(sem tipagem) --- a!=b ---verdadeiro se a for diferente de b
!== --- não idêntico(tipagem) --- a!==b --- verdadeiro se a não for idêntico a b
< --- menor que --- a < b --- verdadeiro quando a for menor que b
<= --- menor igual que --- a <= b --- verdadeiro quando a for menor ou igual a b
> --- maior que --- a > b --- verdadeiro quando a for maior que b
>= --- maior igual que --- a >= b --- verdadeiro quando a for maior ou igual a b
*/
   

    // const a = 1
    // const b = 4
    //  console.log(a < b);

    /*
    &&("e")
    */

     const a = 2
     const b = 2

     console.log(a === b && a <= b);
     // V e V = V

     console.log(a === b && a < b);
     // V e F = F

     console.log(a > b && a === b);
     // F e V = F

     console.log(a > b && a < b);
     //F e F = F

     /*
     OR("ou")
     */

     console.log(a === b || a <= b);
     // V ou V = V

     console.log(a === b || a < b);
     // V ou F = V

     console.log(a > b || a === b);
     // F ou V = V

     console.log(a > b || a < b);
     // F ou F = F

     /*
     NOT("NÃO")
     */

     console.log(a === b) // true
     //colocando o sinal de negação podemos negar toda  operação e inverter o resuldato de true para false:

     console.log(!(a === b)) // agora o resultado é false, estou negando toda a operação dentro do parenteses.





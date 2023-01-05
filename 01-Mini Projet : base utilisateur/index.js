// Exercice 1 : trier des nombres
// Créer une fonction sortNumbers qui retourne un tableau avec les nombres du tableau numbers triés du plus petit au plus grand.


// Ensuite faites en sorte d'ajouter un paramètre pour les classer du plus grand au plus petit.

// Vous n'avez pas le droit d'utiliser Array.sort ou toute autre fonction de tri fournie par JavaScript.

let numbers = [23,42,21,90,54,362,-12,57,78,84,35,546,-128,7,15,65,28];
let ordered_numbers = [];

let smaller = numbers[0];
let bigger = numbers[0];

function sortNumbers(tab){

        for (number of tab){
            if (number <= smaller){
                smaller = number;
                console.log(`smaller ${smaller}`);
            }
            if (number >= bigger){
                bigger = number;
                console.log(`bigger ${bigger}`);
            }
        }
        console.log("fin de la boucle");
        console.log(`smaller ${smaller}`);
        console.log(`bigger ${bigger}`);

        for (number of numbers){
            let min = bigger;
            if (number <= min && number > bigger_stocked){
                min = number;
            }
        }


        ordered_numbers.push(min);
        smaller_stocked = smaller;
        console.log(smaller);
        console.log(smaller_stocked);

}

sortNumbers(numbers);
console.log(ordered_numbers);

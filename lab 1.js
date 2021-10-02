//Iteration 1: Names and Input

let hacker1 = "Nick"
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Martin"
console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2: Conditionals

if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters. `);
} else if( hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
}

//Iteration 3: Loops

console.log(hacker1.split('').join(' ').toUpperCase());
console.log(hacker2.split("").reverse().join(""));


let nameOrder = [hacker1, hacker2];
nameOrder.sort();
console.log(nameOrder);

if ( hacker1.localeCompare(hacker2) === -1){
    console.log(`The ${hacker1} name goes first.`)
  }
  else if ( hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2} goes first definitely.`) 
  }
  else {
    console.log(`What?! You both have the same name?`)
  }

//Bonus 1:

let parag1 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend efficitur sapien ac tristique. Ut interdum faucibus metus, non venenatis neque congue sed. Fusce ligula odio, luctus a bibendum imperdiet, bibendum non enim. Suspendisse efficitur metus vel libero aliquam imperdiet. Integer non tristique arcu, a consequat ligula. Nullam in turpis dui. Etiam non lacinia odio. Phasellus in turpis malesuada, euismod nunc in, condimentum est. Morbi sit amet volutpat est, in pretium urna. Aliquam felis libero, viverra in imperdiet pretium, egestas ut nunc. Donec sed varius odio, et laoreet est. Mauris egestas justo gravida lacus maximus, sed iaculis ipsum condimentum. Maecenas tincidunt aliquam accumsan. Ut malesuada tellus non ligula vehicula, tristique eleifend ante ultrices. Sed tincidunt, velit nec pulvinar iaculis, lorem metus laoreet nunc, vitae facilisis orci nisl et enim."
let parag2 = "Aliquam in lectus lectus. Maecenas in dui ultricies, mollis enim sit amet, facilisis leo. Integer dignissim erat quis efficitur pulvinar. Pellentesque at ex semper ante ornare rhoncus. Vestibulum tincidunt varius orci, vitae sollicitudin dui mattis sit amet. Proin a ligula quis est faucibus viverra eu in sapien. Duis in pretium metus."
let parag3 = "Praesent in massa vitae ex scelerisque aliquam. Vivamus sollicitudin felis ac neque consectetur cursus. Cras vel velit et velit scelerisque efficitur vel ut lorem. Vivamus sed augue ac eros lobortis egestas vitae at nisl. Nullam tincidunt lorem sed libero ultrices placerat. Nam dui eros, tempus vel cursus ac, eleifend vel diam. Nulla in velit ac urna auctor ullamcorper eu ac enim. Sed luctus sodales odio consectetur efficitur. Vestibulum pellentesque massa et facilisis dictum. Vestibulum vitae velit tincidunt, vestibulum metus nec, ornare sem. Phasellus feugiat vehicula faucibus. Nulla ut arcu metus. Quisque neque eros, scelerisque nec ultrices nec, rutrum sit amet nisi. Curabitur tempor urna eu ex molestie efficitur."

console.log((parag1 + parag2 + parag3).split(' ').length)

let parag = parag1 + parag2 + parag3 

console.log( parag.split('et').length - 1 )





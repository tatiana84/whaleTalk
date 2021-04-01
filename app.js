const input = "Don't forget to enjoy every moment, you don't have nine lives as cats have!"; // 1 step
//const input = 'turpentine and turtles'; // UUEEIEEAUUEE
//const input = 'Hi, Human'; // IUUA
const vowels = ['o', 'o', 'e', 'o', 'e', 'o', 'e', 'e', 'o', 'e', 'o', 'u', 'o', 'a', 'e', 'i', 'e', 'i', 'e', 'a', 'a', 'a', 'e']; // 2 step

const resultArray = []; // 3 step

for (let i=0; i < input.length; i++) { // 4 step
    for (let v = 0; v < vowels.length; v++) {
        if (input[i] === vowels[v]) {
            if(input[i] === 'o') {
                console.log(resultArray.push('o'));
            } else if (input[i] === 'e') {
                console.log(resultArray.push('ee'));
            } else if (input[i] === 'u') {
                console.log(resultArray.push('uu'));
            } else if (input[i] === 'a') {
                console.log(resultArray.push('a'));
            } else if (input[i] === 'i') {
                console.log(resultArray.push('i'));
            } else {
                console.log(resultArray.push(input[i]));
            }
        }
    }
    //console.log(input[i]);
}

console.log(resultArray.join('').toUpperCase());

/*OOOOOOOOOOOOOOOOOOOOOOOOOOOOEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOO
EEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
OOOOOOOOOOOOOOEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOUUOOOOOOOOOOOOOOAAAAAAAA
EEEEEEEEEEEEEEEEEEIIIIEEEEEEEEEEEEEEEEEEIIIIEEEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAAAAA
EEEEEEEEEEEEEEEEEE*/

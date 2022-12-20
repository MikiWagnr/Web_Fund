var monster = {
    //  key : value
    id: 1,             // Number (Integer)

    name: "Bulbasaur", // String

    types: ["poison", "grass"] // Array (With Strings)

};

// JS handles Objects like Dictionaries

// console.log(monster.name)
// console.log(monster['name'])
// We can access an object like an array's index value, 
// but instead we enter the key name as a string

// console.log(monster.types[1])
//          object variable name -> types array -> position in the types array

var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// console.log(pokémon[8].types[0])

// for (var i = 0; i < pokémon.length; i++) {
//     if (pokémon[i].id % 3 ==0){
//         console.log(pokémon[i]);
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if(pokémon[i].types.length >1){
//         console.log(pokémon[i])
//     }
// }

// for (var i = 0; i < pokémon.length; i++) {
//     if(pokémon[i].types.length == 1 && pokémon[i].types == 'poison'){
//         console.log(pokémon[i].name)
//     }
//     }

// for (var i = 0; i < pokémon.length; i++) {
//     if(pokémon[i].types[1] == 'flying'){
//         console.log(pokémon[i].types[0])
//     } 
// }


// function reverseString(str){
//     return str.split("").reverse().join("");
// }
function backwardsPoisons(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i].types.length == 1 && arr[i].types == 'poison'){
            console.log(arr[i].name.split("").reverse().join(""))
            // console.log(reverseString(arr[i].name))
            // console.log('hello')
        }
    }
}

backwardsPoisons(pokémon);
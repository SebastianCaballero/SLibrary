const obj = {}
const numbers = [1,2,3,4,5,6,7,8,9,10];


//FOR EACH
let sum = 0;
function suma (element, index, array) {
    sum += element;
}

obj.Seach = (array, call) => {
    for (let i = 0; i < array.length; i++) {
        call(array[i], i, array);
    }
} 

// numbers.forEach(suma);
// console.log(sum);
// sum = 0;
// obj.Seach(numbers, suma);
// console.log(sum);



//FILTER
function paridadMayor4 (element, index, array) {
    if (element > 4 && index % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

obj.Sfilter = (array, call) => {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
        if (call(array[i], i, array) === true) {
            aux.push(array[i]);
        }
    }
    return aux;
}

// console.log(numbers.filter(paridadMayor4));
// console.log(obj.Sfilter(numbers, paridadMayor4));




//MAP
function suma2 (element, index, array) {
    return element + 2;
}

obj.Smap = (array, call) => {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
        aux.push(call(array[i], i, array))
    }
    return aux;
}

// console.log(numbers.map(suma2));
// console.log(obj.Smap(numbers, suma2));





//FIND
function par (element, index, array) {
    return element % 2 == 0;
}

obj.Sfind = (array, call) => {
    for (let i = 0; i < array.length; i++) {
        if (call(array[i], i, array) == true) {
            return array[i];
        }
    }
}

// console.log(numbers.find(par));
// console.log(obj.Sfind(numbers, par));



//FindIndex
function imparMayor7 (element, index, array) {
    return element % 2 != 0 && element > 7;
}

obj.SfindIndex = (array, call) => {
    let veracity = -1;
    for (let i = 0; i < array.length; i++) {
        if (call(array[i], i, array) == true) {
            veracity = i;
        }
    }
    return veracity;
}

// console.log(numbers.findIndex(imparMayor7));
// console.log(obj.SfindIndex(numbers, imparMayor7));





//CONTAINS == INCLUDES
obj.Scontains = (array, value, fromIndex) => {
    if (typeof fromIndex == 'undefined') {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return true
            }
        }
        return false;
    } else {
        for (let i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                return true
            }
        }
        return false;
    }
    
}

// console.log(numbers.includes(10,3));
// console.log(obj.Scontains(numbers, 10, 3));



//PLUCK
const users = [
    {
        id : 1,
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        id : 2,
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        id : 3,
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        id : 4,
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        id : 5,
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

obj.Spluck = (array, key) => {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
        aux.push(array[i][key])
    }
    return aux;
}

// console.log(obj.Spluck(users, 'name'));



//WITHOUT
obj.Swithout = (array, values) => {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
        let veracity = false;
        for (let k = 0; k < values.length; k++) {
            if (array[i] == values[k]) {
                veracity = true;
            }
        }
        if (veracity) {
            continue;
        } else {
            aux.push(array[i]);            
        }
        veracity = false;
    }
    return aux;
}

// console.log(obj.Swithout(numbers, [2,4,10]));







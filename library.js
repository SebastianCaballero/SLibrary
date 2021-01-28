const numbers = [1,2,3,4,5,6,7,8,9,10];


//FOR EACH
let sum = 0;
function suma (element, index, array) {
    sum += element;
}

Array.prototype.Seach = function(call) {
    for (let i = 0; i < this.length; i++) {
        call(this[i], i, this);
    }
} 


//FILTER
function paridadMayor4 (element, index, array) {
    if (element > 4 && index % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

Array.prototype.Sfilter = function(call) {
    let aux = [];
    for (let i = 0; i < this.length; i++) {
        if (call(this[i], i, this) === true) {
            aux.push(this[i]);
        }
    }
    return aux;
}


//MAP
function suma2 (element, index, array) {
    return element + 2;
}

Array.prototype.Smap = function(call) {
    let aux = [];
    for (let i = 0; i < this.length; i++) {
        aux.push(call(this[i], i, this))
    }
    return aux;
}


//FIND
function par (element, index, array) {
    return element % 2 == 0;
}

Array.prototype.Sfind = function(call) {
    for (let i = 0; i < this.length; i++) {
        if (call(this[i], i, this) == true) {
            return this[i];
        }
    }
}


//FindIndex
function imparMayor7 (element, index, array) {
    return element % 2 != 0 && element > 7;
}

Array.prototype.SfindIndex = function(call) {
    let veracity = -1;
    for (let i = 0; i < this.length; i++) {
        if (call(this[i], i, this) == true) {
            veracity = i;
        }
    }
    return veracity;
}


//CONTAINS == INCLUDES
Array.prototype.Scontains = function(value, fromIndex) {
    if (typeof fromIndex == 'undefined') {
        for (let i = 0; i < this.length; i++) {
            if (this[i] == value) {
                return true
            }
        }
        return false;
    } else {
        for (let i = fromIndex; i < this.length; i++) {
            if (this[i] == value) {
                return true
            }
        }
        return false;
    }
    
}


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

Array.prototype.Spluck = function(key) {
    let aux = [];
    for (let i = 0; i < this.length; i++) {
        aux.push(this[i][key])
    }
    return aux;
}


//WITHOUT
Array.prototype.Swithout = function(values) {
    let aux = [];
    for (let i = 0; i < this.length; i++) {
        let veracity = false;
        for (let k = 0; k < values.length; k++) {
            if (this[i] == values[k]) {
                veracity = true;
            }
        }
        if (veracity) {
            continue;
        } else {
            aux.push(this[i]);            
        }
        veracity = false;
    }
    return aux;
}



//TESTS
//Seach
console.log(sum);
numbers.Seach(suma);
console.log(sum);

//Sfilter
console.log(numbers.Sfilter(paridadMayor4));

//Smap
console.log(numbers.Smap(suma2));

//Sfind
console.log(numbers.Sfind(par));

//SfindIndex
console.log(numbers.SfindIndex(imparMayor7));

//Scontains
console.log(numbers.Scontains(4,2));

//Spluck
console.log(users.Spluck('name'));

//Swithout
console.log(numbers.Swithout([1,3,7,9]));





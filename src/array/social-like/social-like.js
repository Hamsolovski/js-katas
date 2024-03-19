/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(likerz) {
    if (likerz.length === 0)
        return "Be the first to like this"
    else if (likerz.length === 1)
        return likerz[0] + " likes this"
    else if (likerz.length === 2)
        return `${likerz[0]} and ${likerz[1]} like this`
    else
        return `${likerz[0]} and ${likerz.length - 1} other people like this`
}

module.exports = getLikes;

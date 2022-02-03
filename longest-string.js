// Write a function. create an array with friends name. sent the array to a function with a parameter. Findout the longest friend name. Return that name as string.


function longestBestFriendname(names){
    let longestName = names[0];
    for(const name of names){
        if( longestName.length < name.length){
            longestName = name;
        }
    }
    return longestName;
} 


const bestFriends = ['Abdur rahman shakib', 'Shadman shakib ', 'Abu ahmed sajal', 'akib iftekhar', 'Touhidul hasan shakil', 'Mohammad kawser', 'Kazi ashraful habib']

let longestFriendName = longestBestFriendname(bestFriends); //output
console.log(longestFriendName);                             //Touhidul hasan shakil
console.log(typeof longestFriendName);                      //string
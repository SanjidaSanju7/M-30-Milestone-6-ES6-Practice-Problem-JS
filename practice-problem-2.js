//  Write an arrow function where it will do the following:
//  a) It will take an array where the array elements will be the name of your friends.
//  b) Check if the length of each element is even, push elements with even length to a new array and return the result.
//  Print the result. 

const friends = ['ariana grande ari', 'salena', 'dua lipa', 'chumki', 'tom cruise', 'harry potter']


const friendNames = (friendList) => {

    evenNameLengthFriens = [];
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 == 0) {
            evenNameLengthFriens.push(friends[i]);
        }
    }
    return evenNameLengthFriens;
}

console.log(friendNames(friends))

//מגישות: קורל צלח וקארין ואנונו

const numbers = [4, 0, 12, 0, -5, 0, 8];
let zeroCount = 0;

for (const num of numbers) {
    zeroCount += (num === 0) ? 1 : 0;
}

console.log("Amount of zero in the array:", zeroCount); 
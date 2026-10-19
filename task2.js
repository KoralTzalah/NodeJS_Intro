//מגישות : קורל צלח וקארין ואנונו

//in: number
//out: return True if the number is Prime, else False
function Prime(number){
  if(number < 2) return false;

  for (let i = 2; i < number; i++){
    if (number % i == 0) 
      return false
  }
  return true
} 

const num = 237
for(i = 1; i < 237; i++){
   if(Prime(i))
    console.log(i)
}

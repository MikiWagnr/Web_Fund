function arrayRandom(arr){     
    max=arr.length    
    min=0     
    return Math.floor(Math.random() * (max - min) + min); 
}  console.log(lifesAnswers[arrayRandom(lifesAnswers)])
const num = [1,2,3,4,5,6,7,8,9] ;
for (let i=0 ; i<num.length ; i++){
    if(num[i]>4){
        break ;
    }
    console.log(num[i]);
}

const numTwo = [7,6 ,-9,2,-4 ,5, 2,1]
for(let i=0 ; i<numTwo.length ; i++){
    if(numTwo[i]<0){
    continue ;
    }
    console.log(numTwo[i]);
}
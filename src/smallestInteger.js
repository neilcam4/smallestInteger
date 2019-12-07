function solution(A) {
    sorted = A.sort()
   
   let finalAnswer;
    for (var i = 0;i <= sorted.length;i++){
        if(sorted[i+1] - sorted[i] !== 1){
            return finalAnswer = sorted[i] + 1
        }
    }
    console.log("final answr = " + finalAnswer)
    return finalAnswer
}
function solution(A) {    
   sorted = A.sort()
   if(sorted.length === 1 && sorted[0] >= 0){
       return sorted[0] + 1
   } else if (sorted.length > 1){
    let finalAnswer;
        for (var i = 0; i <= sorted.length;i++){
             if (sorted[i] > 0 && (sorted[i+1] - sorted[i] !== 1) ) {
                 return finalAnswer = sorted[i] + 1
            } else {
                return finalAnswer= 1
            }
        }
        console.log("final answr = " + finalAnswer)
        return finalAnswer
   }
}
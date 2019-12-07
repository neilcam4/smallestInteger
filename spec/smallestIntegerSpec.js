describe("Smallest Integer",function(){
    // it("should sort numbers in order", function(){
    //     let A = [1]
    //     let result = solution(A)
    //     expect(result).toEqual([1])
    // })
    it("should return first number of sorted array", function(){
        let A =  [3, 1]
        let result = solution(A)
        expect(result).toEqual(2)
    })
    it("should return first number of sorted array", function(){
        let A =  [2, 1, 4, 5]
        let result = solution(A)
        expect(result).toEqual(3)
    })
})
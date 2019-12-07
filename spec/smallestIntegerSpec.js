describe("Smallest Integer",function(){
    it("should return next integer of one length array", function(){
        let A = [1]
        let result = solution(A)
        expect(result).toEqual(2)
    })
    it("should return difference of sorted array length 2", function(){
        let A =  [3, 1]
        let result = solution(A)
        expect(result).toEqual(2)
    })
    it("should return difference of sorted array length 5", function(){
        let A =  [3, 2, 1, 4, 5]
        let result = solution(A)
        expect(result).toEqual(6)
    })
    it("should return difference of sorted array length 5", function(){
        let A =  [3, 12, 1, 4, 5]
        let result = solution(A)
        expect(result).toEqual(2)
    })
})
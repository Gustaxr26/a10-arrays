const arrayNum = [1, 5, 3, 7]
const arrayStr = ["a", "b", "c", "d"]
const arrayAll = [9, "Palmeiras", true, 1, "Libertadores", false]

//Cria cópias dos array's originais
const arrayNumCopia = arrayNum.slice()
const arrayStrCopia = arrayStr.slice()
const arrayAllCopia = arrayAll.slice()

//Faz alterações nos indices
arrayNumCopia.push(2)
arrayStrCopia.pop()
arrayAllCopia.splice(2,3)

//Exibição
console.log("ArrayNum original: ", arrayNum)
console.log("ArrayNum cópia: ", arrayNumCopia)
console.log("ArrayStr original: ", arrayStr)
console.log("ArrayStr cópia: ", arrayStrCopia)
console.log("ArrayAll original: ", arrayAll)
console.log("ArrayAll cópia: ", arrayAllCopia)
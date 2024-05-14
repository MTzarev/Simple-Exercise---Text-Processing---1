function test1 (input){
    let newWord = []
    for (const word of input) {
      newWord.push(word)
    }
    
    console.log(newWord.reverse().join(``));
}
test1(`valsoriM`)
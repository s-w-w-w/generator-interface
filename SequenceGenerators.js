/*
SequenceGenerators - various sequences generated using JavaScript Generators 
    Version: 0.0.1
    Methods:
        constructor() - constructor
        generator1() - generate sequence starting at zero and ending with some number where every next number is greater by the step
        
    Example usage:
        // instantiate class
        const generator = SequenceGenerators()
        // get generator
        const g1 = genetator.generator1()
        // instantiate generator
        generatorObj = g1(0,10,2)  
        generatorObj.next() // returns object {done: False, value: 0}
        generatorObj.next() // returns object {done: False, value: 2}
*/
class SequenceGenerators{
  /*
    constructor() - constructor
  */
  constructor(){
  }
  
  /*
  generator1() - generate sequence starting at zero and ending with some number where every next number is greater by the step
  */
  generator1(){
    return function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
      let iterationCount = 0;
      for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
      }
      return iterationCount;
    }
  }    
}


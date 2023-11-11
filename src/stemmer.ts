/*
Copyright 2023 Petar Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY
, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

type Options = {
  stemBoundary: number;
}

type Rule = readonly [string, string, number];

class BulgarianStemmer {
    stemBoundary: number;
    stemmingRules: Map<string, string>;
    constructor(context: Rule[], options: Options = { stemBoundary: 1 }){
      const { stemBoundary } = options;
      this.stemBoundary = stemBoundary;
      this.stemmingRules = new Map<string, string>();
      this.parsingFileContent(context);
    }

    parsingFileContent(context: Rule[]){
      this.stemmingRules = new Map<string, string>();

      for(let index in context) {
        const rule = context[index];
          if (rule[2] > this.stemBoundary){
            this.stemmingRules.set(rule[0], rule[1]);
          }
      }
    }

    stem(word: string){
      const valid_word = /[^аъоуeиюя]*[аъоуeиюя]/.exec(word);
      const word_length = word.length;

      if(valid_word && word_length > 1){
        for(let i = 0; i < word_length; i++){
          const suffix = word.slice(i);

          if(this.stemmingRules.has(suffix)){
            return word.slice(0, i) + this.stemmingRules.get(suffix);
          }
        }
      }

      return word
    }
}

export default BulgarianStemmer;
export { Options, Rule };
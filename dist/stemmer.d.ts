type Options = {
    stemBoundary: number;
};
type Rule = readonly [string, string, number];
declare class BulgarianStemmer {
    stemBoundary: number;
    stemmingRules: Map<string, string>;
    constructor(context: Rule[], options?: Options);
    parsingFileContent(context: Rule[]): void;
    stem(word: string): string;
}
export default BulgarianStemmer;
export { Options, Rule };

import createStemmer from '../src/index'

describe('BulgarianStemmer library', () => {

   it('creates default stemmer', () => {
      const stemmer = createStemmer();
      expect(stemmer.stemBoundary).toBe(1);
   });

   it('processes bulgarian words into stems', () => {
      const stemmer = createStemmer({stemBoundary: 1});

      expect(stemmer.stem('обикновен')).not.toBeUndefined();
      expect(stemmer.stem('обикновен')).toEqual('обикнов');
      expect(stemmer.stem('английски')).not.toBeUndefined();
      expect(stemmer.stem('английски')).toEqual('английс');
      expect(stemmer.stem('английският')).not.toBeUndefined();
      expect(stemmer.stem('английският')).toEqual('английс');
      expect(stemmer.stem('човек')).not.toBeUndefined();
      expect(stemmer.stem('човек')).toEqual('чове');
      expect(stemmer.stem('човекът')).not.toBeUndefined();
      expect(stemmer.stem('човекът')).toEqual('чове');
      expect(stemmer.stem('уникален')).not.toBeUndefined();
      expect(stemmer.stem('уникален')).toEqual('уникал');
      expect(stemmer.stem('уникалният')).not.toBeUndefined();
      expect(stemmer.stem('уникалният')).toEqual('уникал');
      expect(stemmer.stem('негодувания')).not.toBeUndefined();
      expect(stemmer.stem('негодувания')).toEqual('негодув');
      expect(stemmer.stem('прелестният')).not.toBeUndefined();
      expect(stemmer.stem('прелестният')).toEqual('прелест');
      expect(stemmer.stem('сладък')).not.toBeUndefined();
      expect(stemmer.stem('сладък')).toEqual('слад');
      expect(stemmer.stem('сладкият')).not.toBeUndefined();
      expect(stemmer.stem('сладкият')).toEqual('слад');
      expect(stemmer.stem('чаровен')).not.toBeUndefined();
      expect(stemmer.stem('чаровен')).toEqual('чаров');
      expect(stemmer.stem('чаровеният')).not.toBeUndefined();
      expect(stemmer.stem('чаровеният')).toEqual('чаров');
      expect(stemmer.stem('чаровените')).not.toBeUndefined();
      expect(stemmer.stem('чаровените')).toEqual('чаров');
   });
})

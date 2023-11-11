# BulStemJS

This library is an inflectional stemmer for Bulgarian language based on close to Stemka algorithm. The problem is addressed from a machinelearning perspective using a large morphological dictionary. Originally it was developed by Preslav Nakov. This ibrary is a direct translation from Georgi Kostadinov's Python library that implements the BulStem algorithm - https://github.com/gkostadinov/py-bulgarian-stemmer. You can find more on Nakov's BulStem algorithm here - http://lml.bas.bg

This module can be used withing **Node** and **React/Vue/Angular** **TypeScript/JavaScript** projects both as **ES6(AKA ES2015)** or **CommonJs** module. It can also be used in **VanilaJS** projects if imported with `<script>` tag.

## Usage

- ### Browsers:


```sh
    <script src="/js/index.js"></script>
    ...
    <script>
        const word = 'обикновен'
        const stemmer = BulStem.createStemmer().then(stemmer => {
          const stem = stemmer.stem(word);
          ...
        })
    </script>
    ...
```

See `index.html` in root folder

- ### React/Vue:

```
import createStemmer from 'bulstem-js';
...
  const createStemmer();
  const stem = stemmer.stem('сладкият');
  ...
```
## Interface:

- ##### **createStemmer(contextType, options)**

| Name | Type | Default | Description
| ------ | ------ | ------ | ------ |
| **options** | object | { stemBoundary: 1,  } | Initial options. |
| **options.stemBoundary** | number | 1  |  A number > 0, the higher the number, the less effective the stemmer.|

## License

[MIT]

[MIT]: <https://opensource.org/licenses/MIT>

# BulStemJS

This library is an inflectional stemmer for Bulgarian language based on close to Stemka algorithm. The problem is addressed from a machinelearning perspective using a large morphological dictionary. Originally it was developed by Preslav Nakov. This ibrary is a direct translation from Georgi Kostadinov's Python library that implements the BulStem algorithm - https://github.com/gkostadinov/py-bulgarian-stemmer. You can find more on Nakov's BulStem algorithm here - http://lml.bas.bg

This is an **ES6(AKA ES2015)** library that is compatible with **React/Vue**projects. Still not compatible with **NodeJs**. It can also be used in **VanilaJS** projects if imported with `<script>` tag. Importing this library in **ES5** projects is not implemented.

## Usage

- ### Browsers:
```sh
    <script src="./lib/bundle.js"></script>
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
import { createStemmer } from 'BulStemJS';
...
createStemmer().then(stemmer => {
  const stem = stemmer.stem('сладкият');
  ...
})

```
## Interface:

- ##### **createStemmer(contextType, options)**

| Name | Type | Default | Description
| ------ | ------ | ------ | ------ |
| **contextType** | string | 's' | The size of the context volume used for stemming calculation. Possible values: 's' for small, 'm' for medium, 'l' for large. The larger the volume, the more effective the stemmer, but requires more RAM and Internet traffic. It may take up to about 2MB for a single stemmer. |
| **options** | object | { stemBoundary: 1,  } | Initial options. |
| **options.stemBoundary** | object | 1  |  A number > 0, the higher the number, the less effective the stemmer.|

## License

[MIT]

[MIT]: <https://opensource.org/licenses/MIT>

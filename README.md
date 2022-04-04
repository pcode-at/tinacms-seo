# TinaCMS SEO

## Mission and Vision
Our vision of this package is to create the one stop shop for all your SEO concerns using [TinaCMS](https://tina.io/), similar to the Wordpress Plugin [Yoast](https://yoast.com/wordpress/plugins/seo/).

## Getting started
Follow these 5 steps to include tinacms-seo in your project:

1. Install the package:

```
npm install @pcode-at/tinacms-seo
``` 

or

```
yarn add @pcode-at/tinacms-seo
``` 

 depending on your package manager.

**NOTE**: If you are using `yarn` (or an `npm` version that doesn't install peer dependencies automatically) then you have to install used peer dependencies by yourself manually:
```
yarn add next-seo
```
 


2. Import the required schema parts from the package:
```
import { defaultSeoPageProps, seoPageProps } from "@pcode-at/tinacms-seo";
```

3. Include it in your schema:

```
  ...
  {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        seoPageProps,
        {
          ... fields
        },
      ],
      ...
    },
```

4. Congratulations! 🎉 Now you should see an editable SEO object in your sidebar:

![image](https://user-images.githubusercontent.com/29887207/161561181-4a2d6dae-a8f6-4cfd-8a5a-259f71222876.png)

![image](https://user-images.githubusercontent.com/29887207/161561313-4bd08fc9-e82d-4e9e-bea6-379351e298dc.png)


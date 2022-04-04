# TinaCMS SEO

## Mission and Vision
This package adds SEO functionality to TinaCMS. Our vision of this package is to create the open source version of the Wordpress Plugin [Yoast](https://yoast.com/wordpress/plugins/seo/) for [TinaCMS](https://tina.io/).

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


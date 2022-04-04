# TinaCMS SEO

## Mission and Vision
This package adds SEO functionality to TinaCMS. Our vision of this package is to create the open source version of the Wordpress Plugin [Yoast](https://yoast.com/wordpress/plugins/seo/) for [TinaCMS](https://tina.io/).

## Get started
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

4. Congratulations! 🎉 Now you should see a editable SEO object in your sidebar:

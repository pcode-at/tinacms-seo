# TinaCMS SEO

## Mission and Vision
Our vision of this package is to create the one stop shop for all your SEO concerns using [TinaCMS](https://tina.io/), similar to the Wordpress Plugin [Yoast](https://yoast.com/wordpress/plugins/seo/).

## Getting started
### TinaCMS Editor Setup
Follow these 5 steps to include tinacms-seo in your project so it shows up in the editor sidebar:

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

### NextSeo Package Client Integration
Now you have to fetch all of the SEO data and include it in your page. For the sake of simplicity and clearity here is the complete code of an example page:

```
import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
import { NextSeo } from "next-seo";
import { MetaTag, OpenGraph } from "next-seo/lib/types";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const {
    robotsProps,
    additionalLinkTags,
    additionalMetaTags,
    canonical,
    defaultTitle,
    description,
    facebook,
    languageAlternates,
    mobileAlternate,
    nofollow,
    noindex,
    openGraph,
    title,
    titleTemplate,
    twitter,
  } = data.getPagesDocument.data.seo;

  // At the time of writing: Workaround because LanguageAlternate, MobileAlternate does not get exported from next-seo types (types.d.ts)
  const languageAlternatesAny = languageAlternates as any;
  const mobileAlternateAny = mobileAlternate as any;

  const { siteName, ...openGraphDataWithoutSiteName } = openGraph;

  const openGraphData: OpenGraph = {
    ...openGraphDataWithoutSiteName,
    site_name: siteName,
  };

  return (
    <>
      <NextSeo
        robotsProps={robotsProps}
        additionalLinkTags={additionalLinkTags}
        additionalMetaTags={additionalMetaTags as MetaTag[]}
        canonical={canonical}
        defaultTitle={defaultTitle}
        description={description}
        facebook={facebook}
        languageAlternates={languageAlternatesAny}
        mobileAlternate={mobileAlternateAny}
        nofollow={nofollow}
        noindex={noindex}
        openGraph={openGraphData}
        title={title}
        titleTemplate={titleTemplate}
        twitter={twitter}
      />
      <Layout rawData={data} data={data.getGlobalDocument.data}>
        <Blocks {...data.getPagesDocument.data} />
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `${params.filename}.md`,
  });
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const pagesListData = await client.getPagesList();
  return {
    paths: pagesListData.data.getPagesList.edges.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

```

After completing these 2 sections you are ready to go and the SEO data should be included in your rendered page! 🎉

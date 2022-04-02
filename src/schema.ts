import type { TinaField, TinaTemplate } from "tinacms";
import { ObjectType } from "tinacms/dist/types";
import { ImagePrevSize } from "next-seo/lib/types";

const imagePrevSize: ImagePrevSize[] = ["none", "standard", "large"];

const profile: TinaField = {
  type: "object",
  label: "Open Graph Profile",
  name: "profile",
  fields: [
    {
      type: "string",
      label: "FirstName",
      name: "firstName",
    },
    {
      type: "string",
      label: "LastName",
      name: "lastName",
    },
    {
      type: "string",
      label: "Username",
      name: "username",
    },
    {
      type: "string",
      label: "Gender",
      name: "gender",
    },
  ],
};

const book: TinaField = {
  type: "object",
  label: "Open Graph Book",
  name: "book",
  fields: [
    {
      type: "string",
      label: "Authors",
      name: "authors",
      list: true,
    },
    {
      type: "string",
      label: "ISBN",
      name: "isbn",
    },
    {
      type: "datetime",
      label: "releaseDate",
      name: "releaseDate",
    },
    {
      type: "string",
      label: "Tags",
      name: "tags",
      list: true,
    },
  ],
};

const article: TinaField = {
  type: "object",
  label: "Open Graph Article",
  name: "article",
  fields: [
    {
      type: "datetime",
      label: "PublishedTime",
      name: "publishedTime",
    },
    {
      type: "datetime",
      label: "ModifiedTime",
      name: "modifiedTime",
    },
    {
      type: "datetime",
      label: "ExpirationTime",
      name: "expirationTime",
    },
    {
      type: "string",
      label: "Authors",
      name: "authors",
      list: true,
    },
    {
      type: "string",
      label: "Section",
      name: "section",
    },
    {
      type: "string",
      label: "Tags",
      name: "tags",
      list: true,
    },
  ],
};

const openGraph: TinaField = {
  type: "object",
  label: "Open Graph",
  name: "openGraph",
  fields: [
    {
      type: "string",
      label: "url",
      name: "url",
    },
    {
      type: "string",
      label: "Type",
      name: "type",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    images,
    videos,
    {
      type: "string",
      label: "DefaultImageHeight",
      name: "defaultImageHeight",
    },
    {
      type: "string",
      label: "DefaultImageWidth",
      name: "defaultImageWidth",
    },
    {
      type: "string",
      label: "Locale",
      name: "locale",
    },
    {
      type: "string",
      label: "SiteName",
      name: "siteName",
    },
    profile,
    book,
    article,
    video,
  ],
};
const facebook: TinaField = {};
const twitter: TinaField = {};
const additionalMetaTags: TinaField = {};
const additionalLinkTags: TinaField = {};

const mobileAlternate: TinaField = {
  type: "object",
  label: "Mobile Alternate",
  name: "mobileAlternate",
  fields: [
    {
      type: "string",
      label: "Media",
      name: "media",
    },
    {
      type: "string",
      label: "Href",
      name: "href",
    },
  ],
};

const languageAlternates: TinaField = {
  type: "object",
  label: "Language Alternates",
  name: "languageAlternates",
  list: true,
  fields: [
    {
      type: "string",
      label: "HrefLang",
      name: "hrefLang",
    },
    {
      type: "string",
      label: "Href",
      name: "href",
    },
  ],
};

const robotsProps: TinaField = {
  type: "object",
  label: "robotsProps",
  name: "robotsProps",
  fields: [
    {
      type: "boolean",
      label: "Nosnippet",
      name: "nosnippet",
    },
    {
      type: "number",
      label: "max Snippet",
      name: "maxSnippet",
    },
    {
      type: "string",
      label: "MaxImagePreview",
      name: "maxImagePreview",
      list: true,
      options: imagePrevSize,
    },
    {
      type: "number",
      label: "max video preview",
      name: "maxVideoPreview",
    },
    {
      type: "boolean",
      label: "Noarchive",
      name: "noarchive",
    },
    {
      type: "string",
      label: "UnavailableAfter",
      name: "unavailableAfter",
    },
    {
      type: "boolean",
      label: "Noimageindex",
      name: "noimageindex",
    },
    {
      type: "boolean",
      label: "Notranslate",
      name: "notranslate",
      description: "https://github.com/garmeeh/next-seo#robotsprops",
    },
  ],
};

export const defaultSeoSchema: TinaTemplate = {
  name: "defaultSeo",
  label: "Default Seo",
  fields: [
    {
      type: "number",
      label: "Open Graph Image Width",
      name: "defaultOpenGraphImageWidth",
    },
    {
      type: "number",
      label: "Open Graph Image Height",
      name: "defaultOpenGraphImageHeight",
    },
    {
      type: "number",
      label: "Open Graph Video Width",
      name: "defaultOpenGraphImageWidth",
    },
    {
      type: "number",
      label: "Open Graph Video Height",
      name: "defaultOpenGraphImageHeight",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Title Template",
      name: "titleTemplate",
    },
    {
      type: "string",
      label: "Default Title",
      name: "defaultTemplate",
    },
    robotsProps,
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Canonical",
      name: "canonical",
    },
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags,
  ],
};

export const pageSeoSchema: TinaTemplate = {
  name: "seo",
  label: "SEO",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      label: "Noindex",
      name: "noindex",
    },
    {
      type: "boolean",
      label: "Nofollow",
      name: "nofollow",
    },
    robotsProps,
  ],
};

const featureBlockSchema: TinaTemplate = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

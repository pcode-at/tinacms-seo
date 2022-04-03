import type { TinaField, TinaTemplate } from "tinacms";
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

const video: TinaField = {
  type: "object",
  label: "Open Graph Video",
  name: "video",
  fields: [
    {
      type: "object",
      label: "Actors",
      name: "actors",
      list: true,
      fields: [
        {
          type: "string",
          label: "Profile",
          name: "profile",
          required: true,
        },
        {
          type: "string",
          label: "Role",
          name: "role",
        },
      ],
    },
    {
      type: "string",
      label: "Directors",
      name: "directors",
    },
    {
      type: "string",
      label: "Writers",
      name: "writers",
    },
    {
      type: "number",
      label: "Duration",
      name: "duration",
    },
    {
      type: "datetime",
      label: "ReleaseDate",
      name: "releaseDate",
    },
    {
      type: "string",
      label: "Tags",
      name: "tags",
      list: true,
    },
    {
      type: "string",
      label: "Series",
      name: "series",
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
    {
      type: "object",
      label: "Open Graph Images",
      name: "images",
      list: true,
      fields: [
        {
          type: "string",
          label: "Url",
          name: "url",
          required: true,
        },
        {
          type: "string",
          label: "Width",
          name: "width",
        },
        {
          type: "string",
          label: "Height",
          name: "height",
        },
        {
          type: "string",
          label: "Alt",
          name: "alt",
        },
        {
          type: "string",
          label: "Type",
          name: "type",
        },
        {
          type: "string",
          label: "SecureUrl",
          name: "secureUrl",
        },
      ],
    },
    {
      type: "object",
      label: "Open Graph Videos",
      name: "videos",
      list: true,
      fields: [
        {
          type: "string",
          label: "Url",
          name: "url",
          required: true,
        },
        {
          type: "string",
          label: "Width",
          name: "width",
        },
        {
          type: "string",
          label: "Height",
          name: "height",
        },
        {
          type: "string",
          label: "Alt",
          name: "alt",
        },
        {
          type: "string",
          label: "Type",
          name: "type",
        },
        {
          type: "string",
          label: "SecureUrl",
          name: "secureUrl",
        },
      ],
    },
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

const facebook: TinaField = {
  type: "object",
  label: "Facebook",
  name: "facebook",
  fields: [
    {
      type: "string",
      label: "AppId",
      name: "appId",
    },
  ],
};

const twitter: TinaField = {
  type: "object",
  label: "Twitter",
  name: "twitter",
  fields: [
    {
      type: "string",
      label: "Handle",
      name: "handle",
    },
    {
      type: "string",
      label: "Site",
      name: "site",
    },
    {
      type: "string",
      label: "CardType",
      name: "cardType",
    },
  ],
};

const HTML5MetaTag: TinaTemplate = {
  label: "HTML5MetaTag",
  name: "html5MetaTag",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true,
    },
    {
      type: "string",
      label: "Content",
      name: "content",
      required: true,
    },
    {
      type: "string",
      label: "KeyOverride",
      name: "keyOverride",
    },
  ],
};

const RDFaMetaTag: TinaTemplate = {
  label: "RDFaMetaTag",
  name: "rdfaaMetaTag",
  fields: [
    {
      type: "string",
      label: "Property",
      name: "property",
      required: true,
    },
    {
      type: "string",
      label: "Content",
      name: "content",
      required: true,
    },
    {
      type: "string",
      label: "KeyOverride",
      name: "keyOverride",
    },
  ],
};

const HTTPEquivMetaTag: TinaTemplate = {
  label: "HTTPEquivMetaTag",
  name: "httpEquivMetaTag",
  fields: [
    {
      type: "string",
      label: "HttpEquiv",
      name: "httpEquiv",
      options: [
        "content-security-policy",
        "content-type",
        "default-style",
        "x-ua-compatible",
        "refresh",
      ],
    },
    {
      type: "string",
      label: "Content",
      name: "content",
      required: true,
    },
    {
      type: "string",
      label: "KeyOverride",
      name: "keyOverride",
    },
  ],
};

const additionalMetaTags: TinaField = {
  type: "object",
  label: "Addtional meta tags",
  name: "addtionalMetaTags",
  list: true,
  templates: [HTML5MetaTag, RDFaMetaTag, HTTPEquivMetaTag],
};

const additionalLinkTags: TinaField = {
  type: "object",
  label: "Additional link tags",
  name: "addtionalLinkTags",
  list: true,
  fields: [
    {
      type: "string",
      label: "Rel",
      name: "rel",
      required: true,
    },
    {
      type: "string",
      label: "Href",
      name: "href",
      required: true,
    },
    {
      type: "string",
      label: "Sizes",
      name: "sizes",
    },
    {
      type: "string",
      label: "Type",
      name: "type",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
    },
    {
      type: "string",
      label: "KeyOverride",
      name: "keyOverride",
    },
    {
      type: "string",
      label: "As",
      name: "as",
    },
    {
      type: "string",
      label: "CrossOrigin",
      name: "crossOrigin",
    },
  ],
};

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

export const defaultSeoPageProps: TinaField = {
  name: "defaultSeo",
  label: "Default Seo",
  type: "object",
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

export const seoPageProps: TinaField = {
  name: "seo",
  label: "SEO",
  type: "object",
  fields: [
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

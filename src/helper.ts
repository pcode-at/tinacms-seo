import { NextSeoProps } from "next-seo";
import { CUSTOM_FACEBOOK_FIELD_REQUIRED_APP_ID_NAME } from "./schema";

// TODO: include types of generated tina schema so we can replace "any" with the real type for the seo page props
export function getNextSeoProps(tinaCmsSeoPageProps: any): NextSeoProps {
  return {
    ...tinaCmsSeoPageProps,
    facebook: {
      appId:
        tinaCmsSeoPageProps.facebook[
          CUSTOM_FACEBOOK_FIELD_REQUIRED_APP_ID_NAME
        ],
    },
  };
}

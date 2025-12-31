import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  gitTimestamp: false,
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.js",
    },
  },
});

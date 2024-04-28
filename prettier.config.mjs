/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/hooks/(.*)$",
    "^@/server/(.*)$",
    "^@/auth/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "^@/components/(.*)$",
    "^@/(.*)$",
    "",
    "^types$",
    "^@/types/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  //   importOrderTypeScriptVersion: "5",
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["cn", "cva"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;

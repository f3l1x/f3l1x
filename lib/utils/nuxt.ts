import Vue from "vue";

export function registerComponents(ctx: any) {
  // For each matching file name...
  ctx.keys().forEach((fileName: string) => {
    // Get the component config
    const componentConfig = ctx(fileName);
    // Get the PascalCase version of the component name
    const componentName = fileName
      // Remove the "./_" from the beginning
      .replace(/^\.\//, "")
      // Remove the file extension from the end
      .replace(/\.\w+$/, "")
      // Split up / and drop folder
      .split("/").reverse()[0]
      // Split up kebabs
      .split("-")
      // Upper case
      .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      // Concatenated
      .join("");

    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

export const isClient = process.client;
export const isServer = process.server;
export const isStatic = process.static;
export const isBrowser = isClient && window;

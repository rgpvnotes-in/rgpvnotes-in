/**
 * This function generates the content for an index file
 * @param {string} programName - The name of the program for which the index file is being generated
 * @param {string} [schemeName=''] - The name of the scheme for which the index file is being generated
 * @returns {string} The content of the index file
 */
export const programSchemeIndexContent = (programName, schemeName = '') => {
    return `---
import Layout from "../../../layouts/Layout.astro";
// constants
const programName = '${programName}';
const schemeName = '${schemeName}';
const { slug } = Astro.params;
const { post } = Astro.props;
---
<Layout title="">
  <></>
</Layout>
<style></style>`;
};

/**
 * This function generates the content for an index file
 * @param {string} [programName=''] - The name of the program for which the index file is being generated
 * @returns {string} The content of the index file
 */
export const programSchemeIndexContent = (programName = '') => {
    return `---
import Layout from "../../../layouts/Layout.astro";
// constants
const programName = '${programName}';
const { slug } = Astro.params;
const { post } = Astro.props;
---
<Layout title="">
  <></>
</Layout>
<style></style>`;
};

/**
 * Returns the content for a first year index page
 * @param {string} programName - The name of the program
 * @param {string} schemeName - The name of the scheme
 * @param {string} yearName - The name of the year
 * @returns {string} - The content for the first year index page
 */
export const firstYearIndexContent = (
    programName = '',
    schemeName = '',
    yearName = '',
) => {
    // Return the first year index page template
    return `---
  import Layout from "../../../../layouts/Layout.astro";
  import InnerPageContainer from '../../../../components/innerPageComponent/innerPageComponent.vue';

  // constants
  const programName = '${programName}';
  const schemeName = '${schemeName}';
  const yearName = '${yearName}';
  
  // Get the branch year data
  const getBranchYearData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/search.php?program_name=${programName}&scheme_name=${schemeName}&subject_year=${yearName}'
  ).then((response) => response.json()).then((response) => response.content).catch((error)=> {console.error(error)});  
---
  <Layout title="" isInnerPage={true}>
  <InnerPageContainer>
    <h1>default text</h1>
  </InnerPageContainer>
  </Layout>
  <style></style>`;
};

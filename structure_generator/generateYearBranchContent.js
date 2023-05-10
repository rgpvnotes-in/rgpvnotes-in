/**
 * Returns the content for a year branch index page
 * @param {string} [programName=''] - The name of the program
 * @param {string} [schemeName=''] - The name of the scheme
 * @param {string} [yearName=''] - The name of the year
 * @param {string} [branchName=''] - The name of the branch
 * @returns {string} - The content for the year branch index page
 */
export const yearBranchIndexContent = (
    programName = '',
    schemeName = '',
    yearName = '',
    branchName = '',
) => {
    // Return the year branch index page template
    return `---
  import Layout from "../../../../layouts/Layout.astro";
  import SearchAndSelector from '../../../../components/homePage/heroComponent/partials/SearchAndSelector.vue';
  import InnerPageContainer from '../../../../components/innerPageComponent/innerPageComponent.vue';


  // constants
  const programName = '${programName}';
  const schemeName = '${schemeName}';
  const yearName = '${yearName}';
  const branchName = '${branchName}';
  const { slug } = Astro.params;
  const { post } = Astro.props;
  
  // Fetch the branch year data
  const getBranchYearData = await fetch(
      'http://backend.rgpvnotes.in/api/v1/search.php?program_name=' + programName + '&scheme_name=' + schemeName + '&subject_branch=' + branchName  + '&subject_year=' + yearName
      ).then((response) => response.json()
      ).then((response) => response.content);
  
  ---
  <Layout title="" isInnerPage={true}>
  <InnerPageContainer>
    <h1>default text</h1>
  </InnerPageContainer>
  </Layout>
  <style></style>`;
};

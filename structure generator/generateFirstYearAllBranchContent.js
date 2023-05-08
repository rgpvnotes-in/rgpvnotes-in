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
  // constants
  const programName = '${programName}';
  const schemeName = '${schemeName}';
  const yearName = '${yearName}';
  const { slug } = Astro.params;
  const { post } = Astro.props;
  
  // Get the branch year data
  const getBranchYearData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/search.php?program_name=' + programName + '&scheme_name=' + schemeName + '&subject_year=' + yearName
  ).then((response) => response.json()).then((response) => response.content);
  
  ---
  <Layout title="">
    {/* Add content here */}
    <></>
  </Layout>
  <style></style>`;
};

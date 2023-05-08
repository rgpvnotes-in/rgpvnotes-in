export const firstYearIndexContent = (
    programName,
    schemeName = '',
    yearName = '',
) => {
    return `---
import Layout from "../../../../layouts/Layout.astro";
// constants
const programName = '${programName}';
const schemeName = '${schemeName}';
const yearName = '${yearName}';
const { slug } = Astro.params;
const { post } = Astro.props;

const getBranchYearData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/search.php?program_name=' + programName + '&scheme_name=' + schemeName + '&subject_year=' + yearName
    ).then((response) => response.json()
    ).then((response) => response.content);


---
<Layout title="">
  <></>
</Layout>
<style></style>`;
};

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
    import Layout from '../../../../layouts/Layout.astro';
    import InnerPageContainer from '../../../../components/innerPageComponent/innerPageComponent.vue';
    import SubjectCard from '../../../../components/postBodyComponent/multiColorBackground.vue';
    
    import { yearArray } from '../../../../utils/const/index';
    
    // constants
    const programName = '${programName}';
    const schemeName = '${schemeName}';
    const yearName = '${yearName}';
    const branchName = '${branchName}';
    const { slug } = Astro.params;
    const { post } = Astro.props;
    
    // Fetch the branch year data
    const getBranchYearData = await fetch(
        'http://backend.rgpvnotes.in/api/v1/search.php?program_name=${programName}&scheme_name=${schemeName}&subject_branch=${branchName}&subject_year=${yearName}',
    )
        .then((response) => response.json())
        .then((response) => response.content).catch((error)=> {console.error(error)});
    
    const filteredYearObject = yearArray.find(
        (yearObject) => yearObject.longDisplayText === yearName,
    );

    const staticTitle = branchName + ' - ' + filteredYearObject?.shortDisplayText;

const pathArray = Astro.url.pathname.split('/');
const breadCrumbsArray = [];

for (let index = pathArray.length - 1; index >= 0; index--) {
    let name = '';
    if (0 === index) {
        name = 'Home';
    } else if (1 === index) {
        name = programName;
    } else if (2 === index) {
        name = schemeName;
    } else if (3 === index) {
        name = staticTitle;
    }

    breadCrumbsArray.push({ name: name, url: pathArray.join('/') });
    pathArray.pop();
}
    ---
    
    <Layout title="" isInnerPage={true}>
    <InnerPageContainer
        staticTitle={staticTitle}
        breadCrumbsArray={breadCrumbsArray.reverse()}
    >
        <div>
            <h1 class="page-static-title d-flex justify-content-center mb-4">
                {staticTitle}
            </h1>

            <SubjectCard getBranchYearDataArray={getBranchYearData} />
        </div>
    </InnerPageContainer>
</Layout>
    <style></style>
    `;
};

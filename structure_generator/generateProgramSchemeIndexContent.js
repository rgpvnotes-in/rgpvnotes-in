/**
 * This function generates the content for an index file
 * @param {string} [programName=''] - The name of the program for which the index file is being generated
 * @param {string} [schemeName=''] - The name of the scheme for which the index file is being generated
 * @returns {string} The content of the index file
 */
export const programSchemeIndexContent = (
    programName = '',
    schemeName = '',
) => {
    return `---
import Layout from "../../../layouts/Layout.astro";
import SearchAndSelector from '../../../components/homePage/heroComponent/partials/SearchAndSelector.vue';
import InnerPageContainer from '../../../components/innerPageComponent/innerPageComponent.vue';

// constants
const programName = '${programName}';
const schemeName = '${schemeName}';
---
<Layout title="" isInnerPage={true}>
<div class="container-fluid" data-aos="fade-up">
    <div class="row justify-content-center align-items-center">
        <SearchAndSelector client:load isInnerPage={true} selectedProgramProp="${programName}" selectedSchemeProp="${schemeName}"/>
    </div>
</div>
</InnerPageContainer>
</Layout>
<style></style>`;
};

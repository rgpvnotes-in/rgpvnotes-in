/**
 * This function generates the content for an index file
 * @param {string} [programName=''] - The name of the program for which the index file is being generated
 * @returns {string} The content of the index file
 */
export const programIndexContent = (programName = '') => {
    return `---
import Layout from "../../layouts/Layout.astro";
import SearchAndSelector from '../../components/homePage/heroComponent/partials/SearchAndSelector.vue';
import InnerPageContainer from '../../components/innerPageComponent/innerPageComponent.vue';

// constants
const programName = '${programName}';

const seoData = {
    pageTitle: programName + ' notes & question papers for RGPV students',
    canonicalUrl: new URL(Astro.url.pathname, Astro.site),
    description: programName + ' latest notes & question papers for RGPV students',
    keywords: programName + ', ' + ', latest notes, previous year question papers',
    imageUrl: '',
} 
---
<Layout seoData={seoData} isInnerPage={true}>
<InnerPageContainer staticTitle='' breadCrumbsArray={[]}>
<div class="container-fluid" data-aos="fade-up">
    <div class="row justify-content-center align-items-center">
        <SearchAndSelector client:load isInnerPage={true} selectedProgramProp="${programName
            .replace(/\./gm, '')
            .toLowerCase()}"/>
    </div>
</div>
</InnerPageContainer>
</Layout>
<style></style>`;
};

/**
 * This function returns the content for a slug file
 * @param {string} programName - The name of the program for which the slug file is being generated
 * @param {string} schemeName - The name of the scheme for which the slug file is being generated
 * @returns {string} The content of the slug file
 */
export const programSchemeSlugContent = (programName = '', schemeName = '') => {
    return `---
import Layout from "../../../layouts/Layout.astro";
import InnerPageContainer from '../../../components/innerPageComponent/innerPageComponent.vue';

// constants
const programName = '${programName}';
const schemeName = '${schemeName}';
export async function getStaticPaths() {
  const getSlugsData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/all_post.php?program_name=${programName}&scheme_name=${schemeName}'
  ).then((response) => response.json()).catch((error)=> {console.error(error});
  return getSlugsData.content.map((post) => {   
    return {
      params: { slug: post.slug },
      props: { post },
    };
  });
}
const { slug } = Astro.params;
const { post } = Astro.props;
---
<Layout title="" isInnerPage={true}>
  <h1>{slug}</h1>
  <h1>{JSON.stringify(post.post_id)}</h1>
  <></>
</Layout>
<style></style>`;
};

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
import SubjectCard from '../../../components/postBodyComponent/multiColorBackground.vue';

// constants
const programName = '${programName}';
const schemeName = '${schemeName}';
export async function getStaticPaths() {
  const getSlugsData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/all_post.php?program_name=${programName}&scheme_name=${schemeName}'
  ).then((response) => response.json()).catch((error)=> {console.error(error)});

  return getSlugsData.content.map((post: any) => {   
    return {
      params: { slug: post.slug },
      props: { post },
    };
  });
}
const { slug } = Astro.params;
const { post } = Astro.props;

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
    }

    breadCrumbsArray.push({ name: name, url: pathArray.join('/') });
    pathArray.pop();
  }

---
<Layout title="" isInnerPage={true}>
<InnerPageContainer staticTitle={post.rendered_title} breadCrumbsArray={breadCrumbsArray.reverse()}>
<h1>{slug}</h1>
<h1>{JSON.stringify(post)}</h1>
</InnerPageContainer>
</Layout>
<style></style>`;
};

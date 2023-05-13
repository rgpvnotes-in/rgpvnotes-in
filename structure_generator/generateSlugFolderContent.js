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
import MultiColorCard from '../../../components/postBodyComponent/multiColorBackground.vue';
import StaticTitleCard from '../../../components/postBodyComponent/blackBackground.vue';
import TitleTextBlock from '../../../components/postBodyComponent/titleTextBlock.vue'
import TagsBlock from '../../../components/postBodyComponent/tagsBlock.vue';

// constants
const programName = '${programName}';
const schemeName = '${schemeName}';
export async function getStaticPaths() {
  const getSlugsData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/all_post.php?program_name=${programName}&scheme_name=${schemeName}'
  ).then((response) => response.json())
  .then((response) => response.content)
  .catch((error)=> {console.error(error)})


  return getSlugsData.map((post: any) => {   
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
<div class="row">
<div class="col-12 col-sm-12 col-md-8 col-lg-8">
    <img src={post.banner_url} alt="" srcset="" />
    <TitleTextBlock title="Objective" textArray={post.objective} />
    <StaticTitleCard>Syllabus</StaticTitleCard>
    <MultiColorCard index={1} content={post.unit_1_syllabus} />
    <MultiColorCard index={2} content={post.unit_2_syllabus} />
    <MultiColorCard index={3} content={post.unit_3_syllabus} />
    <MultiColorCard index={4} content={post.unit_4_syllabus} />
    <MultiColorCard index={5} content={post.unit_5_syllabus} />
    <MultiColorCard index={6} content={post.unit_7_syllabus} />
    <MultiColorCard index={7} content={post.unit_7_syllabus} />
    <MultiColorCard index={8} content={post.unit_8_syllabus} />
    <MultiColorCard index={9} content={post.unit_9_syllabus} />
    <MultiColorCard index={10} content={post.unit_10_syllabus} />

    <TitleTextBlock title="Outcome" textArray={post.outcome} />
    <TitleTextBlock
        title="Recommended Text Books"
        textArray={post.recommended_text_books}
    />
    <TitleTextBlock title="practical" textArray={post.practical} />
    <TitleTextBlock
        title="books_recommended"
        textArray={post.books_recommended}
    />
    <TitleTextBlock
        title="list_of_experiments"
        textArray={post.list_of_experiments}
    />
    <TitleTextBlock
        title="evaluation"
        textArray={post.evaluation}
    />
    <TitleTextBlock
        title="references"
        textArray={post.references}
    />
    <TitleTextBlock
        title="lab_assignments"
        textArray={post.lab_assignments}
    />
    <TitleTextBlock
        title="books_list"
        textArray={post.books_list}
    />

    <TagsBlock labelArray={post.labels} />

    <p>{JSON.stringify(post)}</p>
</div>
<div class="col-12 col-sm-12 col-md-4 col-lg-4">
    <StaticTitleCard>Labels</StaticTitleCard>
    <MultiColorCard index={1} content={post.unit_1_syllabus} />

</div>
</div>

<p>{JSON.stringify(post)}</p>
</InnerPageContainer>
</Layout>
<style></style>`;
};

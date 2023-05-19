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
import AuthorBlock from '../../../components/postBodyComponent/authorBlock.vue';
import PopularPostsBlock from '../../../components/postBodyComponent/popularPostsBlock.vue';
import YouMayAlsoLikeBlock from '../../../components/postBodyComponent/youMayAlsoLikeBlock.vue';
import PreviousYearQuestionPaperBlock from '../../../components/postBodyComponent/previousYearQuestionPaper.vue';
import NotesBlock from '../../../components/postBodyComponent/notesBlock.vue';

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
    } else if (3 === index) {
        name = post.rendered_title;
    }

    breadCrumbsArray.push({ name: name, url: pathArray.join('/') });
    pathArray.pop();
  }

---
<Layout title="" isInnerPage={true}>
<InnerPageContainer staticTitle={post.rendered_title} breadCrumbsArray={breadCrumbsArray.reverse()}>
<div class="row">
<div class="col-12 col-sm-12 col-md-8 col-lg-8 left-block-container pb-5 px-0">

<div class="px-4">
<div class="d-flex justify-content-center">
<img
    src={post.banner_url}
    alt={post.rendered_title + " banner image"}
/>
</div>

<TitleTextBlock title="Course Objective" textArray={post.objective} />
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

<NotesBlock notesDataObject={post.subject_notes} affiliateBooksList={post.affiliate_books_list} subjectName={post.subject_name} />
<TitleTextBlock title="Course Outcome" textArray={post.outcome} />
<TitleTextBlock
    title="Recommended Text Books"
    textArray={post.recommended_text_books}
/>
<TitleTextBlock title="Practical" textArray={post.practical} />
<TitleTextBlock
    title="Books Recommended"
    textArray={post.books_recommended}
/>
<TitleTextBlock
    title="List Of Experiments"
    textArray={post.list_of_experiments}
/>
<TitleTextBlock
    title="Course Evaluation"
    textArray={post.evaluation}
/>
<TitleTextBlock
    title="References Books"
    textArray={post.references}
/>
<TitleTextBlock
    title="Lab Assignments"
    textArray={post.lab_assignments}
/>

<YouMayAlsoLikeBlock programName={post.subject_program} schemeName={post.subject_system_or_scheme} subjectBranch={post.subject_branch} subjectYear={post.year} subjectSemester={post.semester} />

<PreviousYearQuestionPaperBlock questionPaperDataArray={post.previous_year_question_papers} />

<TagsBlock labelArray={post.labels} showTag={true} />
</div>
    <AuthorBlock />



</div>
<div class="offset-md-half col-12 col-sm-12 col-md-3 col-lg-3">
<div class="right-block-container pb-4 px-3 mt-2">
    <StaticTitleCard>Labels</StaticTitleCard>
    <TagsBlock labelArray={post.labels} showTag={false} />
</div>

<div class="right-block-container pb-4 px-3 mt-3">
    <StaticTitleCard>Popular Posts</StaticTitleCard>
    <PopularPostsBlock postsArray={post.popular_posts} />
</div>

</div>
</div>

</InnerPageContainer>
</Layout>
<style scoped>
.left-block-container {
    background-color: #f2f6f9;
}

.right-block-container {
    background-color: #f2f6f9;
}
</style>`;
};

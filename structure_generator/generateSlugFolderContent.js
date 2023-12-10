/**
 * This function returns the content for a slug file
 * @param {string} programName - The name of the program for which the slug file is being generated
 * @param {string} schemeName - The name of the scheme for which the slug file is being generated
 * @returns {string} The content of the slug file
 */
export const programSchemeSlugContent = (programName = '', schemeName = '') => {
return `---
// Import statements
import Layout from "@layouts/Layout.astro";
import InnerPageContainer from '@components/innerPageComponent/innerPageComponent.vue';
import MultiColorCard from '@components/postBodyComponent/multiColorBackground.vue';
import StaticTitleCard from '@components/postBodyComponent/blackBackground.vue';
import TitleTextBlock from '@components/postBodyComponent/titleTextBlock.vue';
import TagsBlock from '@components/postBodyComponent/tagsBlock.vue';
import AuthorBlock from '@components/postBodyComponent/authorBlock.vue';
import PopularPostsBlock from '@components/postBodyComponent/popularPostsBlock.vue';
import YouMayAlsoLikeBlock from '@components/postBodyComponent/youMayAlsoLikeBlock.vue';
import PreviousYearQuestionPaperBlock from '@components/postBodyComponent/previousYearQuestionPaper.vue';
import NotesBlock from '@components/postBodyComponent/notesBlock.vue';
import { simpleGetJsonRequest } from "@utils/http/index.js";
import "@css/slug-style.css"

// constants
const programName = '${programName}';
const schemeName = '${schemeName}';


interface PopularPost {
  rendered_title: string;
  slug: string;
  banner_url: string;
}

interface SubjectNote {
  download_server_1: string;
  download_server_2: string;
  view_server_1: string;
  view_server_2: string;
}

interface Post {
  post_id: string;
  rendered_title: string;
  slug: string;
  subject_program: string;
  subject_system_or_scheme: string;
  subject_branch: string[];
  semester: string;
  year: string;
  meta_description: string;
  subject_name: string;
  subject_code: string;
  subject_optional_title: string;
  banner_url: string;
  labels: string[];
  unit_1_syllabus: string[];
  unit_2_syllabus: string[];
  unit_3_syllabus: string[];
  unit_4_syllabus: string[];
  unit_5_syllabus: string[];
  unit_6_syllabus: string[];
  unit_7_syllabus: string[];
  unit_8_syllabus: string[];
  unit_9_syllabus: string[];
  unit_10_syllabus: string[];
  objective: string[];
  affiliate_books_list: string[];
  outcome: string[];
  recommended_text_books: string[];
  practical: string[];
  books_recommended: string[];
  list_of_experiments: string[];
  evaluation: string[];
  references: string[];
  lab_assignments: string[];
  previous_year_question_papers: string[];
  subject_notes: {
    [unit: string]: SubjectNote;
  };
  popular_posts: PopularPost[];
}

  
// Fetch label array from API
const fetchedLabelArray = (await simpleGetJsonRequest('http://backend.rgpvnotes.in:8000/api/v1/labels.php?program_name=${programName}&scheme_name=${schemeName}')).content;

// Function to get static paths
export async function getStaticPaths() {
  try {
    const response = await simpleGetJsonRequest('http://backend.rgpvnotes.in:8000/api/v1/all_post.php?program_name=${programName}&scheme_name=${schemeName}');
    const posts = response.content;
    return posts.map((post: Post) => ({ params: { slug: post.slug }, props: { post } }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Astro parameters and props
const { slug: astroSlug } = Astro.params;
const { post }: { post: Post } = Astro.props;

// Breadcrumbs generation
const pathArray = Astro.url.pathname.split('/');
const breadCrumbsArray = ['Home', programName, schemeName, post.rendered_title]
  .map((name, index) => ({ name, url: pathArray.slice(0, index + 1).join('/') }))
  .reverse();



// SEO data
const seoData = {
    pageTitle: post.subject_name + ' ' + post.subject_code + ' notes & question papers for RGPV ' + post.subject_program + ' students',
    canonicalUrl: Astro.url.href,
  description: post.subject_name + ' ' + post.subject_code + ' notes & question papers for RGPV ' + post.subject_program + post.subject_branch + ' students',
  keywords: post.subject_name + ', ' + post.subject_code + ', ' + post.subject_branch + ', ' + post.subject_program + ' latest notes, previous year question papers',
  imageUrl: post.banner_url,
};
---
<Layout seoData={seoData} isInnerPage={true}>
  <InnerPageContainer staticTitle={post.rendered_title} breadCrumbsArray={breadCrumbsArray}>
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
                
                <NotesBlock notesDataObject={post.subject_notes} affiliateBooksList={post.affiliate_books_list} subjectName={post.subject_name} previousYearQP={post.previous_year_question_papers.length > 0}/>
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
                
                <YouMayAlsoLikeBlock programName={post.subject_program} schemeName={post.subject_system_or_scheme} subjectBranch={post.subject_branch} subjectYear={post.year} subjectSemester={post.semester} astroSlug={astroSlug}/>
                
                <PreviousYearQuestionPaperBlock questionPaperDataArray={post.previous_year_question_papers} />
                
                <TagsBlock labelArray={post.labels} showTag={true} />
        </div>
        <AuthorBlock />



      </div>
      <div class="offset-md-half col-12 col-sm-12 col-md-3 col-lg-3">
        {fetchedLabelArray.length > 0  && <div class="right-block-container pb-4 px-3 mt-2">
            <StaticTitleCard>Labels</StaticTitleCard>
            <TagsBlock labelArray={fetchedLabelArray} showTag={false} />
            </div>}
            
            {(post.popular_posts).length > 0  && <div class="right-block-container pb-4 px-3 mt-3">
            <StaticTitleCard>Popular Posts</StaticTitleCard>
            <PopularPostsBlock postsArray={post.popular_posts} />
            </div>}

      </div>
    </div>

  </InnerPageContainer>
</Layout>`;
};

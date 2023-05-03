import fs from 'fs';
import {
    programNamesArray,
    schemeNamesArray,
} from './src/utils/const/index.js';

try {
    const slugFileContent = (programName, schemeName) => `---
import Layout from "../../../layouts/Layout.astro";

export async function getStaticPaths() {

  // constants
  const programName = '${programName}';
  const schemeName = '${schemeName}';

  const getSlugsData = await fetch(
    'http://backend.rgpvnotes.in/api/v1/all_post.php?program_name=' + programName + '&scheme_name=' + schemeName
  ).then((response) => response.json());
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

<Layout title="">
  <h1>{slug}</h1>
  <h1>{JSON.stringify(post.post_id)}</h1>
  <></>
</Layout>

<style></style>`;

    const indexFileContent = (programName, schemeName) => ``;

    for (const programName of programNamesArray) {
        const programPath = `src/pages/${programName.shortDisplayText
            .toLowerCase()
            .replace(/\s/gm, '-')
            .replace(/\./gm, '')}`;
        // create folder with program name
        if (!fs.existsSync(programPath)) {
            console.log('creating new folder with path: ' + programPath);
            fs.mkdirSync(programPath);
        }

        for (const schemeName of schemeNamesArray) {
            const schemePath = `${programPath}/${schemeName
                .toLowerCase()
                .replace(/\s/gm, '-')
                .replace(/\./gm, '')}/`;

            // create folder with program name
            if (!fs.existsSync(schemePath)) {
                console.log('creating new folder with path: ' + schemePath);
                fs.mkdirSync(schemePath);
            }

            // create slug file
            fs.writeFile(
                `${schemePath}/[...slug].astro`,
                slugFileContent(programName.parameterText, schemeName),
                function (err) {
                    if (err) throw err;
                    console.log('File written successfully.');
                },
            );

            // create slug file
            fs.writeFile(
                `${schemePath}/index.astro`,
                indexFileContent(programName.parameterText, schemeName),
                function (err) {
                    if (err) throw err;
                    console.log('File written successfully.');
                },
            );
        }
    }
} catch (error) {
    console.log(error);
}

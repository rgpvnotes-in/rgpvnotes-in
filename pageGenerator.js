/**
 * This module generates index and slug files for each program and scheme
 * @module generateIndexFiles
 */
import fs from 'fs';
import {
    programNamesArray,
    schemeNamesArray,
    yearArray,
    branchArray,
} from './src/utils/const/index.js';

/**
 * This function generates the content for a slug file
 * @param {string} programName - The name of the program for which the slug file is being generated
 * @param {string} schemeName - The name of the scheme for which the slug file is being generated
 * @returns {string} The content of the slug file
 */
const getStaticPathsContent = (programName, schemeName) => {
    return `---
    import Layout from "../../../layouts/Layout.astro";
    // constants
    const programName = '${programName}';
    const schemeName = '${schemeName}';
    export async function getStaticPaths() {
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
};

/**
 * This function generates the content for an index file
 * @param {string} programName - The name of the program for which the index file is being generated
 * @param {string} [schemeName=''] - The name of the scheme for which the index file is being generated
 * @returns {string} The content of the index file
 */
const getIndexFileContent = (programName, schemeName = '') => {
    return `---
    import Layout from "../../../layouts/Layout.astro";
    // constants
    const programName = '${programName}';
    const schemeName = '${schemeName}';
    const { slug } = Astro.params;
    const { post } = Astro.props;
    ---
    <Layout title="">
      <></>
    </Layout>
    <style></style>`;
};

const getYearIndexContent = (programName, schemeName = '', yearName = '') => {
    return `---
    import Layout from "../../../../layouts/Layout.astro";
    // constants
    const programName = '${programName}';
    const schemeName = '${schemeName}';
    const yearName = '${yearName}';
    const { slug } = Astro.params;
    const { post } = Astro.props;
    ---
    <Layout title="">
      <></>
    </Layout>
    <style></style>`;
};

const getBranchYearIndexContent = (
    programName,
    schemeName = '',
    yearName = '',
    branchName = '',
) => {
    return `---
    import Layout from "../../../../layouts/Layout.astro";
    // constants
    const programName = '${programName}';
    const schemeName = '${schemeName}';
    const yearName = '${yearName}';
    const branchName = '${branchName}';
    const { slug } = Astro.params;
    const { post } = Astro.props;
    ---
    <Layout title="">
      <></>
    </Layout>
    <style></style>`;
};

try {
    // loop through each program
    for (const program of programNamesArray) {
        const programPath = `src/pages/${program.folderName}`;

        // create folder with program name if it does not exist
        if (!fs.existsSync(programPath)) {
            console.log(`creating new folder with path: ${programPath}`);
            fs.mkdirSync(programPath);
        }

        // write index file for program
        const programIndexContent = getIndexFileContent(
            program.shortDisplayText,
        );
        fs.writeFileSync(`${programPath}/index.astro`, programIndexContent);
        console.log(
            `index file written successfully for ${program.folderName}`,
        );

        // loop through each scheme
        for (const scheme of schemeNamesArray) {
            const schemePath = `${programPath}/${scheme.shortDisplayText}`;

            // create folder with program and scheme name if it does not exist
            if (!fs.existsSync(schemePath)) {
                console.log(`creating new folder with path: ${schemePath}`);
                fs.mkdirSync(schemePath);
            }

            // create slug file
            const slugFileContent = getStaticPathsContent(
                program.shortDisplayText,
                scheme.shortDisplayText,
            );
            fs.writeFileSync(`${schemePath}/[...slug].astro`, slugFileContent);
            console.log(
                `slug file written successfully for ${program.folderName}, ${scheme.shortDisplayText}`,
            );

            // create index file for scheme
            const schemeIndexContent = getIndexFileContent(
                program.shortDisplayText,
                scheme.shortDisplayText,
            );
            fs.writeFileSync(`${schemePath}/index.astro`, schemeIndexContent);
            console.log(
                `index file written successfully for ${program.folderName}, ${scheme.shortDisplayText}`,
            );

            for (const yearObject of yearArray) {
                if ('1st year' === yearObject.shortDisplayText) {
                    const yearPath = `${schemePath}/${yearObject.shortDisplayText}`;

                    // create folder with program and scheme name if it does not exist
                    if (!fs.existsSync(yearPath)) {
                        console.log(
                            `creating new folder with path: ${yearPath}`,
                        );
                        fs.mkdirSync(yearPath);
                    }

                    // create index file for scheme
                    const yearIndexContent = getYearIndexContent(
                        program.shortDisplayText,
                        scheme.shortDisplayText,
                        yearObject.shortDisplayText,
                    );
                    fs.writeFileSync(
                        `${yearPath}/index.astro`,
                        yearIndexContent,
                    );
                    console.log(
                        `index file written successfully for ${program.folderName}, ${scheme.shortDisplayText}, ${yearObject.shortDisplayText}`,
                    );
                } else {
                    for (const branchObject of branchArray) {
                        const yearBranchPath = `${schemePath}/${branchObject.longDisplayText.toLowerCase()}-${
                            yearObject.shortDisplayText
                        }`;

                        // create folder with program and scheme name if it does not exist
                        if (!fs.existsSync(yearBranchPath)) {
                            console.log(
                                `creating new folder with path: ${yearBranchPath}`,
                            );
                            fs.mkdirSync(yearBranchPath);
                        }
                        // create index file for scheme
                        const branchYearIndexContent =
                            getBranchYearIndexContent(
                                program.shortDisplayText,
                                scheme.shortDisplayText,
                                yearObject.shortDisplayText,
                                branchObject.longDisplayText,
                            );
                        fs.writeFileSync(
                            `${yearBranchPath}/index.astro`,
                            branchYearIndexContent,
                        );
                        console.log(
                            `index file written successfully for ${program.folderName}, ${scheme.shortDisplayText}, ${yearObject.shortDisplayText}, ${branchObject.longDisplayText}`,
                        );
                    }
                }
            }
        }
    }
} catch (error) {
    console.log(error);
}

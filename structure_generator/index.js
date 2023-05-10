/**
 * This script generates the directory structure and files for a website.
 * It creates directories for programs, schemes, years, and branches, and generates index files for each.
 *  @module generateIndexFiles
 *
 * Dependencies:
 * - fs: Node.js built-in file system module
 * - programNamesArray: an array of program names imported from a constants file
 * - schemeNamesArray: an array of scheme names imported from a constants file
 * - yearArray: an array of year objects imported from a constants file
 * - branchArray: an array of branch objects imported from a constants file
 * - getFirstYearIndexContent: a function that generates the content for the first year index file
 * - getProgramSchemeIndexContent: a function that generates the content for the program/scheme index file
 * - getProgramSchemeSlugContent: a function that generates the content for the program/scheme slug file
 * - getYearBranchIndexContent: a function that generates the content for the year/branch index file
 */
import fs from 'fs';
import {
    programNamesArray,
    schemeNamesArray,
    yearArray,
    branchArray,
} from '../src/utils/const/index.js';

import { firstYearIndexContent as getFirstYearIndexContent } from './generateFirstYearAllBranchContent.js';
import { programSchemeIndexContent as getProgramSchemeIndexContent } from './generateProgramSchemeIndexContent.js';
import { programSchemeSlugContent as getProgramSchemeSlugContent } from './generateSlugFolderContent.js';
import { yearBranchIndexContent as getYearBranchIndexContent } from './generateYearBranchContent.js';
import { programIndexContent as getProgramIndexContent } from './generateProgramIndexContent.js';

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
        const programIndexContent = getProgramIndexContent(
            program.shortDisplayText,
        );
        fs.writeFileSync(`${programPath}/index.astro`, programIndexContent);
        console.log(
            `index file written successfully for ${program.folderName}`,
        );

        // loop through each scheme
        for (const scheme of schemeNamesArray) {
            const schemePath = `${programPath}/${scheme.folderName}`;

            // create folder with program and scheme name if it does not exist
            if (!fs.existsSync(schemePath)) {
                console.log(`creating new folder with path: ${schemePath}`);
                fs.mkdirSync(schemePath);
            }

            // create slug file
            const slugFileContent = getProgramSchemeSlugContent(
                program.shortDisplayText,
                scheme.shortDisplayText,
            );
            fs.writeFileSync(`${schemePath}/[...slug].astro`, slugFileContent);
            console.log(
                `slug file written successfully for ${program.folderName}, ${scheme.shortDisplayText}`,
            );

            // create index file for scheme
            const schemeIndexContent = getProgramSchemeIndexContent(
                program.shortDisplayText,
                scheme.shortDisplayText,
            );
            fs.writeFileSync(`${schemePath}/index.astro`, schemeIndexContent);
            console.log(
                `index file written successfully for ${program.folderName}, ${scheme.shortDisplayText}`,
            );

            for (const yearObject of yearArray) {
                if ('1st year' === yearObject.shortDisplayText) {
                    const yearPath = `${schemePath}/${yearObject.shortDisplayText.replace(
                        / /gm,
                        '-',
                    )}`;

                    // create folder with program and scheme name if it does not exist
                    if (!fs.existsSync(yearPath)) {
                        console.log(
                            `creating new folder with path: ${yearPath}`,
                        );
                        fs.mkdirSync(yearPath);
                    }

                    // create index file for scheme
                    const yearIndexContent = getFirstYearIndexContent(
                        program.shortDisplayText,
                        scheme.shortDisplayText,
                        yearObject.shortDisplayText.replace(/ /gm, '-'),
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
                        const yearBranchPath = `${schemePath}/${branchObject.longDisplayText
                            .toLowerCase()
                            .replace(/&/gm, 'and')
                            .replace(
                                / /gm,
                                '-',
                            )}-${yearObject.shortDisplayText.replace(
                            / /gm,
                            '-',
                        )}`;

                        // create folder with program and scheme name if it does not exist
                        if (!fs.existsSync(yearBranchPath)) {
                            console.log(
                                `creating new folder with path: ${yearBranchPath}`,
                            );
                            fs.mkdirSync(yearBranchPath);
                        }
                        // create index file for scheme
                        const branchYearIndexContent =
                            getYearBranchIndexContent(
                                program.shortDisplayText,
                                scheme.shortDisplayText,
                                yearObject.longDisplayText,
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

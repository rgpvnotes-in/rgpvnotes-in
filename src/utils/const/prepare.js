import fs from 'fs';
import { simpleGetJsonRequest } from '../http/index.js';

try {
    (async () => {
        const apiResponse = await simpleGetJsonRequest(
            `http://backend.rgpvnotes.in:8000/api/v1/info.php`,
        );

        const fileContent = `export const typeFilters = ${JSON.stringify(
            apiResponse.typeFilters,
        )};

export const programList = ${JSON.stringify(apiResponse.programList)};
        
export const programNamesArray = ${JSON.stringify(
            apiResponse.programNamesArray,
        )};
        
export const schemeNamesArray = ${JSON.stringify(apiResponse.schemeNamesArray)};
        
export const yearArray = ${JSON.stringify(apiResponse.yearArray)};
        
export const branchArray = ${JSON.stringify(apiResponse.branchArray)};
        
export const semesterArray = ${JSON.stringify(apiResponse.semesterArray)};`;

        fs.writeFileSync(`./src/utils/const/index.js`, fileContent);
        console.log('downloaded constants info from backend');
    })();
} catch (error) {
    console.log(error);
}

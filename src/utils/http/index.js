/**
 * Makes a GET request to the specified URL and returns the JSON response.
 *
 * @param {string} url - The URL to make the GET request to.
 * @returns {Promise<any>} A promise that resolves to the JSON response or rejects with an error message.
 */
export const simpleGetJsonRequest = async (url = "") => {
    try {
        if (!url) {
            const error = "Please provide a URL.";
            console.error(error);
            return Promise.reject(error);
        }

        const response = await fetch(url);
        const isJson = response.headers.get("content-type")?.includes("application/json") || false;

        if (!response.ok) {
            const responseData = isJson ? await response.json() : null;
            const error = (responseData && responseData.message) || response.status;
            console.error("response not ok ", error);
            return Promise.reject(error);
        }

        return isJson ? response.json() : null;
    } catch (error) {
        console.error("An error occurred:", error);
        return Promise.reject(error);
    }
};

/**
 * Makes a POST request to the specified URL with the provided data object and returns the JSON response.
 *
 * @param {string} url - The URL to make the POST request to.
 * @param {Object} dataObj - The data object to be sent in the request body.
 * @returns {Promise<any>} A promise that resolves to the JSON response or rejects with an error message.
 */
export const simplePostJsonRequest = async (url = "", dataObj = {}) => {
    try {
        if (!url) {
            const error = "Please provide a URL.";
            console.error(error);
            return Promise.reject(error);
        }

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(dataObj),
        });

        const isJson = response.headers.get("content-type")?.includes("application/json") || false;

        if (!response.ok) {
            const responseData = isJson ? await response.json() : null;
            const error = (responseData && responseData.message) || response.status;
            console.error("response not ok ", error);
            return Promise.reject(error);
        }

        return isJson ? response.json() : null;
    } catch (error) {
        console.error("An error occurred:", error);
        return Promise.reject(error);
    }
};

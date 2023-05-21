export const simpleGetJsonRequest = (url = '') => {
    try {
        if (!url) {
            // check if the url is passed or not
            const error = 'please provide a url';
            console.log(error);
            return [];
        }

        return fetch(url)
            .then(async (response) => {
                const isJson = response.headers.get('content-type')
                    ? response.headers
                          .get('content-type')
                          .includes('application/json')
                    : false;
                const responseData = isJson ? await response.json() : null;

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error =
                        (responseData && responseData.message) ||
                        response.status;
                    return Promise.reject(error);
                }

                return responseData;
            })
            .catch((error) => {
                console.error('There was an error!', error);
                return false;
            });
    } catch (error) {
        console.error('default error!', error);
    }
};

export const simplePostJsonRequest = (url = '', dataObj = {}) => {
    try {
        if (!url) {
            // check if the url is passed or not
            const error = 'please provide a url';
            console.log(error);
            return [];
        }

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataObj),
        })
            .then(async (response) => {
                const isJson = response.headers.get('content-type')
                    ? response.headers
                          .get('content-type')
                          .includes('application/json')
                    : false;
                const responseData = isJson ? await response.json() : null;

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error =
                        (responseData && responseData.message) ||
                        response.status;
                    return Promise.reject(error);
                }

                return responseData;
            })
            .catch((error) => {
                console.error('There was an error!', error);
                return false;
            });
    } catch (error) {
        console.error('default error!', error);
    }
};

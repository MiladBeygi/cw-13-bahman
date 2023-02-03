import React, { useState, useCallback } from "react";
function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = useCallback(async (requestConfig, applyData) => {

        setIsLoading(true);
        setError(null);
        fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET', // or 'PUT'
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null,
        })
            .then((response) => response.json())
            .then((data) => {
                applyData(data);
                // console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setIsLoading(false);
    }, []);
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
};
export default useHttp;
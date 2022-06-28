export async function useFetch(url, method = 'GET') {
    let option = {
        method: method,
    }

    try {
        const response = await fetch(url, option);
        const result = await response.json();
        return result;
    }

    catch(error){
        console.error(error);
    }
}
import axios from "axios";

const urls = ['vehicles', 'films', 'people'];
const getApi = (url) => {
    return axios.get(url)
}
export const allData = () => {
    const data = { vehicles: [], films: [], people: [] };

    urls.forEach(async url => {
        let path = `https://swapi.dev/api/${url}/`;
        for (let i = 0; i < 10; i++) {
            if (!path) {
                break;
            }
            const { data: { results, next } } = await getApi(path);
            if (results) {
                data[url] = [...data[url], ...results];
                path = next;
            }
        }
    });
    return data;
}
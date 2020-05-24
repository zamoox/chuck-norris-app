import { getHoursAgo } from '../utils';

export default class ChuckNorrisService {

    _apiBase = `https://api.chucknorris.io/jokes/`;

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        return await response.json();
    }

    _transformData = (response) => {
        return {
            id: response.id,
            value: response.value,
            hoursAgo: getHoursAgo(response.updated_at),
            categories: response.categories,
            url: response.url,
            icon: response.icon_url
        }
    }


    getCategories = async () => {
        const res = await this.getResource('categories');
        return res;            
    }
    
    getRandomJoke = async () => {
        const res = await this.getResource('random');
        return this._transformData(res);
    }

    getJokeByCategory = async (category) => {
        const res = await this.getResource(`random?category=${category}`);
        return this._transformData(res);
    }

    getJokeBySearch = async (query) => {
        const res = await this.getResource(`search?query=${query}`);
        return this._transformData(res);
    }

}


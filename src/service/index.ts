import axios, {AxiosInstance} from "axios";
import {ResponseWiki} from "../reducers/types";

const api: AxiosInstance = axios.create({
    baseURL: 'https://en.wikipedia.org/w/api.php'
})

interface dataWiki {
    data?: ResponseWiki
    error?: Error
}

export const fetchWikiData = async (searchText: string): Promise<dataWiki> => {
    try {
        const { data } = await api.get('', {params: {
                action: 'query',
                prop: 'extracts',
                format: 'json',
                exintro: '',
                titles: searchText,
                origin: '*'
            }})
        return { data }
    } catch (error) {
        if (error instanceof Error) {
            return { error }
        } else {
            throw error
        }
    }

}
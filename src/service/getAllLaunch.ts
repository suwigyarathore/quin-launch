import fetch from 'isomorphic-fetch';

export const  getAllLaunch =  async <T>():Promise<T> => {
    return fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming").then(res => res.json()).then(data => data.results)
}
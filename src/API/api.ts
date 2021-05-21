import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com'
})

export const Api = {
    getUsers(user: string) {
        return instance.get<TypeResponseDataUser>(`/users/${user}`)
            .then(response => response)
    },
    getRepos(page: string, user: string) {
        return instance.get<TypeResponseDataRepos>(`/users/${user}/repos?per_page=4&page=${page}`)
            .then(response => response.data)
    }
}

export type TypeResponseDataUser = {
    avatar_url: string
    followers: number
    following: number
    html_url: string
    login: string
    name: string
    repos_url: string
    url: string
    public_repos: number
}
export type TypeRepos = {
    name: string
    svn_url: string
    description: null | string
}

export type TypeResponseDataRepos = TypeRepos[]

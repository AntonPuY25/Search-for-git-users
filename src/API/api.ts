import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.github.com'
})

export const Api = {
    getUsers(){
        return instance.get<TypeResponseDataUser>('/users/AntonPuY25')
            .then(response => response.data)
    }
}

export type TypeResponseDataUser = {
    avatar_url:string
    bio: null|string
    blog: string
    company:  null|string
    created_at: string
    email:  null|string
    events_url: string
    followers: number
    followers_url: string
    following: number
    following_url: string
    gists_url: string
    gravatar_id: string
    hireable:  null|string
    html_url:string
    id: number
    location: string
    login: string
    name: string
    node_id:string
    organizations_url: string
    public_gists: number
    public_repos: number
    received_events_url: string
    repos_url: string
    site_admin: boolean|string
    starred_url:string
    subscriptions_url:string
    twitter_username:  null|string
    type:string
    updated_at:string
    url: string
}
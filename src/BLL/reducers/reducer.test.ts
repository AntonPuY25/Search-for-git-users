import Reducer, {setErrorAC, setReposAC, setStatusAC, setUserAC, TypeInitialState} from './reducer'
import {TypeResponseDataUser} from '../../API/api'

let state: TypeInitialState

beforeEach(() => {
    state = {
        error: '',
        status: 'free',
        data: {} as TypeResponseDataUser,
        repos: [],

    }
})
test('setErrorAC', () => {
    const action = setErrorAC('Some Error')
    const result = Reducer(state, action)
    expect(result.error.length > 0).toBe(true)
    expect(result.error).toBe('Some Error')
})
test('setStatusAC', () => {
    const action = setStatusAC('succeed')
    const result = Reducer(state, action)
    expect(result.status).toBe('succeed')

})
test('setUserAC', () => {
    const action = setUserAC({
        public_repos: 11,
        html_url: 'https://testUrl',
        name: 'Den Abramov',
        avatar_url: 'https://photo/',
        url: 'https://URL',
        following: 10,
        followers: 1000,
        login: 'DEN',
        repos_url: 'https://repos'
    })
    const result = Reducer(state, action)
    expect(result.data.name).toBe('Den Abramov')
    expect(result.data.followers).toBe(1000)

})
test('setReposAC', () => {
    const action = setReposAC([
        {
            name: 'Redux',
            svn_url: 'http://Redux',
            description: 'Description for Redux Repository'
        },
        {
            name: 'Abramov_Blog',
            svn_url: 'http://Abramov_Blog',
            description: 'Description for Abramov_Blog Repository'
        }
    ])
    const result = Reducer(state, action)
    expect(result.repos.length).toBe(2)
    expect(result.repos[0].name).toBe('Redux')
    expect(result.repos[1].name).toBe('Abramov_Blog')

})
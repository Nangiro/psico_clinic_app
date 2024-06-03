import { useQuery } from "react-query"

async function request(path, config) {

    const customConfig = config

    const request = new Request(path, customConfig)
    const response = await fetch(request)

    if (!response.ok) {
        const errorBody = await response.json().then(res => res).catch(() => ({ message: "Request falhou", body: undefined }))

        if (response.status == 401) {
            window.localStorage.removeItem('jwt')
            window.location.replace(window.location.origin + '/login')
        }

        throw new Error(errorBody.message)
    }

    return response
}

export async function get(path, config) {
    let init = { method: 'GET', ...config }
    const jwt = window.localStorage.getItem('jwt')

    if (jwt)
        init = {
            ...init,
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'x-acess-token': jwt
            }
        }

    return ((await request(path, init)).json().catch(() => ({})))
}

export async function getWithNotCORS(path, config) {
    let init = { method: 'GET', ...config }

    return ((await request(path, init)).json().catch(() => ({})))
}

export async function post(path, body, config) {
    let init = { method: 'POST', ...config }
    const jwt = window.localStorage.getItem('jwt')

    if (body !== undefined) {
        if (jwt)
            init = {
                ...init,
                body: JSON.stringify(body),
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    'x-acess-token': jwt
                }
            }
        else
            init = {
                ...init,
                body: JSON.stringify(body),
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                }
            }
    } else {
        if (jwt)
            init = {
                ...init,
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    'x-acess-token': jwt
                }
            }
    }
    return ((await request(path, init)).json().catch(() => ({})))
}

export async function del(path, config) {
    let init = { method: 'DELETE', ...config }
    const jwt = window.localStorage.getItem('jwt')

    if (jwt)
        init = {
            ...init,
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'x-acess-token': jwt
            }
        }

    return ((await request(path, init)).json().catch(() => ({})))
}


export function useCEP(cep, enabled) {
    const response = useQuery(['cep', cep], () => getWithNotCORS < any > (`https://viacep.com.br/ws/${cep}/json/`).then((res) => res), { enabled: enabled, retry: 0 })

    return response
}

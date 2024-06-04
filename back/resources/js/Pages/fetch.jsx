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

export async function getWithNotCORS(path, config) {
    let init = { method: 'GET', ...config }

    return ((await request(path, init)).json().catch(() => ({})))
}

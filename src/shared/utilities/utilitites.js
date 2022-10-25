export function commonPost(url, data) {
    return fetch(process.env.REACT_APP_BE_URL + url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
        .then(a => a.json())
}


export function commonPut(url, data) {
    return fetch(process.env.REACT_APP_BE_URL + url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
        .then(a => a.json())
}




export function commonDelete(url) {
    return fetch(process.env.REACT_APP_BE_URL + url,
        {
            method: 'DELETE'
        }
    )
        .then(a => a.json())
}



export function commonGet(url) {
    return fetch(process.env.REACT_APP_BE_URL + url).then(a => a.json())
}
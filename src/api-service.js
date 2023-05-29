export class API {
    static loginUser(body) {
        return fetch(`https://rest-apis-flask-python-project-avlc.onrender.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())     
    }
    static registerUser(body) {
        return fetch(`https://rest-apis-flask-python-project-avlc.onrender.com/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())     
    }
    static getMovies(access_token){
        fetch(`https://rest-apis-flask-python-project-avlc.onrender.com/api/movie`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${access_token}`
            }
          }).then( resp => resp.json())
    }

    static updateMovie(mov_id, body, access_token) {
        return fetch(`https://rest-apis-flask-python-project-avlc.onrender.com/api/movie/${mov_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${access_token}`
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())     
    }
    static createMovie(body, access_token) {
        return fetch(`https://rest-apis-flask-python-project-avlc.onrender.com/api/movie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${access_token}`
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())     
    }
    static deleteMovie(mov_id, access_token) {
        return fetch(`https://rest-apis-flask-python-project-avlc.onrender.com/api/movie/${mov_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${access_token}`
            },
        })     
    }
}
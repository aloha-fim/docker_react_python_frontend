import React, { useState, useEffect } from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';

//function MovieForm(props) {  
function MovieForm(props) {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ access_token ] = useCookies(['access_token']);

    // useEffect( () => {
    //     setTitle(props.movie.title);
    //     setDescription(props.movie.description);
    // }, [props.movie])


    useEffect(() => {
        const url = `https://rest-apis-flask-python-project-avlc.onrender.com/api/movie`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const movie = await response.json();
                console.log(movie.title);
                console.log(movie.description);
                setTitle(movie.title);
                setDescription(movie.description);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const updateClicked = () => {
        //console.log('update here');
        API.updateMovie(props.movie.id, {title, description}, access_token['access_token'])
        .then( resp => props.updatedMovie(resp))
        .catch( error => console.log(error))
    }

    const createClicked = () => {
        API.createMovie({title, description}, access_token['access_token'])
        .then( resp => props.movieCreated(resp))
        .catch( error => console.log(error))
    }

    const isDisabled = movie.title.length === 0 || movie.description.length === 0;

    return (
        <React.Fragment>
            { props.movie ? (
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input id="title" type="text" placeholder="title" value={title}
                        onChange={ evt=> setTitle(evt.target.value)}
                    /><br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea id="description" type="text" placeholder="description" value={description}
                        onChange={ evt=> setDescription(evt.target.value)}
                    ></textarea><br/>
                    { props.movie.id ?
                        <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
                        <button onClick={createClicked} disabled={isDisabled}>Create</button>
                    }
                </div>
            ) : null }
        </React.Fragment>
    )
}

export default MovieForm;
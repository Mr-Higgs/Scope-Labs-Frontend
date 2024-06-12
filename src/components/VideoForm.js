import React, { useState } from 'react';
import api from '../api/axios';

//This component creates a video submission form to add a new video to the list.
const VideoForm = () => {
    //State variables to hold the title, description and url of the video, and any error that occurs.
    const [title, setTitle] = useState(''); //The title of the video
    const [description, setDescription] = useState(''); //The description of the video
    const [url, setUrl] = useState(''); //The URL of the video
    const [error, setError] = useState(null); //Any error that occurs during the submission process

    //This function handles the form submission and makes a post request to the API to add the new video.
    const handleSubmit = async (e) =>{
        //Prevent the default form submission behavior
        e.preventDefault();

        try {
            //Send a post request to the API with the new video data.
            const response = await api.post('/videos', {user_id: 'john_doe', title, description, video_url: url});
            //Log the response data to the console.
            console.log(response.data);

            //Reset the form by setting all the state variables to empty strings.
            setTitle('');
            setDescription('');
            setUrl('');

        } catch (error) {
            //If there is an error, set the error state variable to the error message.
            setError(error.message);
        }
    };

    //Render the form and display any error that has occurred.
    return(
        <form onSubmit={handleSubmit}> {/*Listen for the form submission event and call the handleSubmit function when it occurs.*/}
            <h2>Add a New Video</h2> 
            {error && <p className="error">{error}</p>} {/*If there is an error, display it to the user.*/}
            <label> Title: </label> 
            <input
                type="text" //Set the input type to text.
                value={title} //Set the value of the input field to the current title state variable.
                onChange={(e) => setTitle(e.target.value)} required //Listen for changes to the input field and update the title state variable accordingly.
            />
            <label> Description: </label> 
            <input
                type="text" //Set the input type to text.
                value={description} //Set the value of the input field to the current description state variable.
                onChange={(e) => setDescription(e.target.value)} required //Listen for changes to the input field and update the description state variable accordingly.
            />
            <label> Video URL: </label> 
            <input
                type="text" //Set the input type to text.
                value={url} //Set the value of the input field to the current URL state variable.
                onChange={(e) => setUrl(e.target.value)} required //Listen for changes to the input field and update the URL state variable accordingly.
            />
            <button type="submit">Add Video</button> 
        </form>
    );
};

export default VideoForm;
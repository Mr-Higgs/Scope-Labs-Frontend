import React, { useContext, useEffect, useState } from 'react';
import api from 'axios';
import { VideoContext } from '../context/VideoContext';


// This component fetches a list of videos from the API and displays them on the screen.
const VideoList = () => {
    // Access the video context, which contains the video list and selected video.
    const {videos, setVideos, setSelectedVideo} = useContext(VideoContext);

    // State variables for loading and error states.
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    // useEffect hook to fetch the list of videos from the API.
    // The hook runs after the component has rendered.
    // It fetches the videos when the component mounts and when the setVideos function changes.
    useEffect(()=>{
        const fetchVideos = async () => {
            try {
                // Send a GET request to the API to fetch the videos.
                // Include the user_id parameter in the request.
                const response = await api.get('/videos', {params: {user_id: 'john_doe'}});

                // Update the video list in the context with the response data.
                setVideos(response.data);

                // Set the loading state to false to indicate that the data has been fetched.
                setLoading(false);
            } catch (error) {
                // Set the error state if there is an error fetching the videos.
                setError(error.message);

                // Set the loading state to false to indicate that the data has been fetched.
                setLoading(false);
            }
        };

        // Call the fetchVideos function to fetch the videos.
        fetchVideos();
    }, [setVideos]);

    // Display a loader if the videos are still being fetched.
    if (loading) return <>Loading...</>;  

    // Display an error message if there was an error fetching the videos.
    if (error) return <>Error loading videos: {error}</>;

    // Display the list of videos on the screen.
    // When a video title is clicked, set the selected video in the context.
    return (
        <>
            <h2>Video List</h2>
            <ul>
                {videos.map((video) => (
                    <li key={video.id} onClick={() => setSelectedVideo(video)}>
                        {video.title}
                    </li>
                ))}
            </ul>
        </>
    );  
};

export default VideoList;
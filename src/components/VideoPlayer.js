import React, { useState, useContext, useEffect } from 'react';
import api from '../api/axios';
import { VideoContext } from '../context/VideoContext';
import { useParams } from 'react-router-dom';

// This component displays a video player and video details with playback controls.
const VideoPlayer = () => {
    // Use the useParams hook to get the video ID from the URL.
    const {videoId} = useParams();
    
    // Use the useContext hook to access the setSelectedVideo function from the VideoContext.
    const {setSelectedVideo} = useContext(VideoContext);
    
    // Use the useState hook to manage the state of the video, playback rate, volume, and error.
    const [video, setVideo] = useState(null); // The video object to be displayed.
    const [playbackRate, setPlaybackRate] = useState(1.0); // The playback rate of the video.
    const [volume, setVolume] = useState(1.0); // The volume of the video.
    const [error, setError] = useState(null); // Any error that occurs during video loading or playback.
    
    // This useEffect hook sends a GET request to the API to fetch the video data based on the video ID.
    // It updates the video state and the selected video in the context.
    useEffect(() => {
        const fetchVideo = async () => {
            try {
                // Send a GET request to the API to fetch the video data.
                const response = await api.get('/videos/single', {params: {video_id: videoId}});
                
                // Update the video state with the response data.
                setVideo(response.data);
                
                // Update the selected video in the context.
                setSelectedVideo(response.data);
            } catch (error) {
                // Set the error state if there is an error fetching the video.
                setError(error.message);
            }
        };
        
        // Only fetch the video if a video ID is provided.
        if (videoId) {
            fetchVideo();
        }
    }, [videoId, setSelectedVideo]);

    // Display a loader or error message if the video content has not loaded yet.
    if(!video) {
        return <>Select a video to play</>;
    }

    // Display the video player and video details with playback controls.
    return(
        <>
            {/* Display the title of the video */}
            <h2>{video.title}</h2>
            
            {/* Display the video player */}
            <video src={video.video_url}
                controls
                playbackRate={playbackRate}
                volume={volume}
                style={{width: '100%'}}
            />
            
            {/* Display the playback speed and volume controls */}
            <>
                <label>Playback Speed:</label>
                <input
                    type="range"
                    min="0.25"
                    max="2.0"
                    step="0.1"
                    value={playbackRate}
                    onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                />
                <label>Volume:</label>
                <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
            </>
        </>
    );
}; 

export default VideoPlayer;


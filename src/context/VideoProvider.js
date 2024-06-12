import React, { useState } from 'react';
import VideoContext from './VideoContext';

// VideoProvider is a React component that serves as a context provider.
// It manages the state of videos and the selected video.
// It uses the useState hook to create state variables for videos and selectedVideo.
// It accepts a prop called children, which represents the child components that will be rendered within the provider.
// The VideoProvider component returns a VideoContext.Provider component, which wraps the children components.
// The value prop of the VideoContext.Provider component is an object that contains the state variables and their corresponding setter functions.
// This allows child components to access the state variables and update them using the setter functions.
const VideoProvider = ({ children }) => {
    // Initialize the state variable videos with an empty array.
    // The setVideos function is used to update the videos state variable.
    const [videos, setVideos] = useState([]);
    
    // Initialize the state variable selectedVideo with null.
    // The setSelectedVideo function is used to update the selectedVideo state variable.
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Return the VideoContext.Provider component, which wraps the children components.
    // The value prop of the VideoContext.Provider component is an object that contains the state variables and their corresponding setter functions.
    return (
        <VideoContext.Provider
            value={{ videos, setVideos, selectedVideo, setSelectedVideo}}>
            {/* Render the children components */}
            {children}
        </VideoContext.Provider>
    );
}

export default VideoProvider;
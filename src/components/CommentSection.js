import React, { useState, useContext, useEffect } from 'react';
import api from '../api/axios';
import { VideoContext } from '../context/VideoContext';


// CommentSection component displays comments for a selected video and allows users to add new comments.
// It uses React hooks to manage state and side effects.
const CommentSection = () => {
    // Access the selected video from the video context.
    const { selectedVideo } = useContext(VideoContext);
    
    // Use state to manage the list of comments, the new comment input, and any error that occurs.
    const [comments, setComments] = useState([]); // List of comments for the selected video
    const [newComment, setNewComment] = useState(''); // New comment input by the user
    const [error, setError] = useState(null); // Error message if there is an issue with fetching or adding comments
    
    // useEffect hook to fetch the comments for the selected video from the API.
    // The hook runs after the component has rendered.
    // It fetches the comments when the selectedVideo changes.
    useEffect(() => {
        const fetchComments = async () => {
            try {
                // Send a GET request to the API to fetch the comments for the selected video.
                const response = await api.get('/videos/comments', {params: {video_id: selectedVideo.id}});
                
                // Update the comments state with the response data.
                setComments(response.data);
            } catch(error) {
                // Set the error state if there is an error fetching the comments.
                setError(error.message);
            }
        };

        // Only fetch the comments if a video is selected.
        if (selectedVideo) {
            fetchComments();
        }
    }, [selectedVideo]);

    // Function to handle adding a new comment.
    const handleAddComment = async () => {
        try {
            // Send a POST request to the API to add a new comment.
            const response = await api.post('/videos/comments', {
                video_id: selectedVideo.id, // ID of the selected video
                content: newComment, // Content of the new comment
                user_id: 'john_doe' // User ID of the comment author
            });

            // Add the new comment to the comments state.
            setComments([...comments, response.data]);
            
            // Reset the new comment input.
            setNewComment('');
        } catch (error) {
            // Set the error state if there is an error adding the comment.
            setError(error.message);
        }
    };

    // Display a message if no video is selected.
    if(!selectedVideo){
        return <> Select a videos to see comments </>;
    }

    // Render the comments section.
    return(
        <>
        <h2>Comments</h2>
        {error && <p>Error: {error}</p>} {/* Display an error message.*/}
        <ul>
            {comments.map((comment, index) => ( // Render each comment in the list.
                <li key={index}>{comment.content}</li>
            ))}
        </ul>
        <input
        value={newComment} // Set the value of the input field to the current new comment state.
        onChange={(e) => setNewComment(e.target.value)} // Listen for changes to the input field and update the new comment state accordingly.
        placeholder='Add a comment' // Placeholder text for the input field.
        />
        <button onClick={handleAddComment}>Add Comment</button> 
        </>
    );
};

export default CommentSection;
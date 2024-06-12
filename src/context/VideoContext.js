import { createContext } from 'react';


//Created a context for the video list using the createContext function from react
const VideoContext = createContext();

export default VideoContext;

//Facilitate globalstate management of the video list
//data will be passed through the component tree
//to child components that need access to the video list defined in VideoProvider
//without the need for props
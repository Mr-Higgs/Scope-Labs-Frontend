# Simple Web Application for Educational Videos

## Purpose

This task is designed to showcase my skills in web development, my ability to create a user-friendly and informative UI, and the organization and structure of code I write from scratch. This problem is left intentionally vague and open-ended in many regards because at Scope Labs, I will not always be given exact, precise, and detailed specifications for the functionality I will be implementing. I will often be responsible for making reasonable design decisions, and determining the precise spec for my work.

## The Problem

I am a software engineer, and I have been hired by an EdTech company to develop a simple web application that allows users to create, comment on, and watch educational videos. The application should interact with the given backend API and provide a seamless and engaging experience for users. The design and UI are up to me to create.

## Features

- **Video List**: Display a list of videos and allow users to select a video from the list.
- **Create Video**: Allow the user to create a new video object with a title, description, and a video URL.
- **Comments**: Enable users to comment on a video and view comments from other users.
- **Video Playback**: Open the videos in full screen with full playback functionality.
- **Playback Controls**: Include options for adjusting playback speed and volume.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js (proxy server) and Express.js
- **Styling**: SCSS
- **HTTP Client**: Axios
- **Routing**: React Router


## Getting Started

### Prerequisites

- Node.js
- npm or Yarn
- A running instance of the provided backend API

### Installation

1. Clone the repository:
   ```bash
   Educational Video Player
    - cd video-app https://github.com/Mr-Higgs/Scope-Labs-Frontend.git 
    - cd video-api https://github.com/Mr-Higgs/Scope-Labs-Backend.git 

   ```

2. **Install dependencies:**
   ```bash
    npm install
       # or
    yarn install
   ```

3. **Start the backend proxy server:**
   ```bash
   node server.js
   ```
4. **Start the frontend development server:**
    ```bash
    npm start
        # or
    yarn start
   ```

## Project Structure

FRONTEND
src/ - `src/`: Source code for the application
│
├── assets/ - `assets/`: Logos, icons, avatars, and images
│   ├── icons/ - `icons/`: SVG icons
│   ├── images/ - `images/`: PNG images
│   └── logo.png - `logo.png`: Logo for the application
│
├── components/ - `components/`: React components for various parts of the UI
│   ├── VideoList.js - `VideoList.js`
│   ├── VideoForm.js - `VideoForm.js`
│   ├── CommentSection.js - `CommentSection.js`
│   └── VideoPlayer.js - `VideoPlayer.js`
│
├── context/ - `context/`: Facilitates state management for components in the application
│   ├── VideoContext.js - `VideoContext.js`
│   └── VideoProvider.js - `VideoProvider.js`
│
├── styles/ - `styles/`: SCSS files and partials for styling
│   ├── _variables.scss - `variables.scss`
│   ├── _mixins.scss - `mixins.scss`
│   ├── _base.scss - `base.scss`
│   ├── _buttons.scss - `buttons.scss`
│   ├── _layout.scss - `layout.scss`
│   ├── _components.scss - `components.scss`
│   └── main.scss - `main.scss`
│
├── App.js - `App.js`: Root component for the application
├── api/axios.js - `api/`: API interaction logic
├── index.js - `index.js`: Main entry point for the application
 
 BACKEND - video-api - `video-api/`: Backend API - seperate from frontend
└── server.js - `server/`: API proxy for backend server
---


## Usage

1. **Access the application:**
   - Navigate to `http://localhost:3000` in your web browser.

2. **Video Listing:**
   - Browse and select videos to watch from the home page.

3. **Video Playback:**
   - Click on a video to play it in the built-in video player.

4. **Comment System:**
   - Leave comments on videos to share your feedback.

5. **Video Upload:**
   - Upload new educational videos through the provided interface.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

Project Structure
---



This README file provides a comprehensive guide to understanding, setting up, and contributing to the project. My goal is to create a functional and user-friendly educational video web application. Happy coding!
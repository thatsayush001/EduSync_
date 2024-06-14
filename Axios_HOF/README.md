[HOF_PPT_CODE-oF-DUTY.pdf](https://github.com/monarxxjain/Axios_HOF/files/11313941/HOF_PPT_CODE-oF-DUTY.pdf)
# xFOSS 
## Introduction:
The xFOSS  is a project that aims to streamline the Eductaion processes of the college IIIT Lucknow, including student management, course management, and more. The project is designed to provide an efficient and user-friendly system for both seniors and juniors for the wing courses
## Configuration
1. First, make sure you have Node.js and npm (Node Package Manager) installed on your computer, You can check this by running the following commands in your terminal:

    `node -v`
    `npm -v`

> Read docs here [Node.js Documentation](https://nodejs.org/en/docs/)

## Installation
1. Fork the repo :
> Read docs here: [Forking a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Clone the project from the forked repo :

    git clone https://github.com/monarxxjain/Axios_HOF

3. Once the project is cloned, navigate into the project directory and run the following command to install all the necessary dependencies:

    `npm install`

4. Finally, to start the development server, run the following command in your terminal:

   ` npm run dev`

> This will start the development server - you should be able to see your client running at [`http://localhost:5173`](http://localhost:5173).
## Usage:
To use the xFOSS , follow these steps:
1. Sign Up: 
>Users can sign up with their credentials, including their name, email address, and password, on the authentication page.
2. Verify Profile: 
>After signing up, users need to verify their profile by providing additional information, such as their role (e.g., student, committee member, warden, faculty, staff), contact details, and other relevant information.
3. Login: 
>Once the profile is verified, users can login using their credentials on subsequent visits to access the features and functionality of the xFOSS .
## Details:
The xFOSS   includes various features and functionality, including but not limited to:
1. Student Management: 
View the list of students and their progress levels,Track students progress levels, such as beginner, intermediate, and advanced,Add notes to each student's profile to keep track of their work and achievements
2. Feedback: 
Students recieve feedback from seniors about them in every course.Senior members can view the performance of juniors and can provide feedback on the them for each and every course the student participated.Feedback can be filtered by course or by student name.
3. Ranks and points Management:
The rank of every student was provided here and points was also displayeed along with ranks, so they can see where they stand out among their freinds 
4. Previous tech events: 
The application provides a brief description of previous tech events held in the college.Students can view the winners of each event and their profiles.They can refer the event description to get a basic idea about the event before they participate in it and get guidance from previous winners 
5. Alumini Network: 
The application provides a list of alumni who have registered on the system.Alumni profiles include their name, graduation year, photo, and a brief bio.
6. Class Scheduling :
This provides a timetable for both seniors and juniors which can be viewed by day or by week.The application checks for empty slots in the timetable.When an empty slot is found, the application sends a notification to both seniors and junior where a class can be taken by seniors
7. Study Materials :
The application provides a content management portal for seniors to upload study material where Seniors can upload study material for different courses so Students can access all the study material in one place.
## Language and Code Explanations:
The College Management System is built using React Framework for Frontend and Firebase for login system. The codebase follows:-
1. Firebase Integration
First, we created a Firebase project and initialized Firebase SDK in our React application using firebase and firebase-auth npm packages.We set up Firebase Authentication to allow users to sign up, sign in, and manage their authentication state across different pages of the web application.We used Firebase Realtime Database to store and retrieve data related to student progress, feedback, and study material. We defined database rules to ensure that only authenticated users can read and write data to the database.
2. React JS Components
 We created React components to display information related to students, including their progress, rank list, and points table.We also created components to display information related to previous tech events of the college and the alumni network.We created a component to display the time table of both seniors and juniors and send notifications to both based on available slots.We created a content management portal using React components where seniors can upload and manage study material for different courses.
3. React Router
 We used React Router to define routes for different pages of the web application and to manage navigation between them. We also used it to define protected routes that can only be accessed by authenticated users
 ## Contributors:
The xFOSS  project is maintained by the following contributors:

 1. Contributor 1:   https://github.com/monarxxjain
 2. Contributor 2:   https://github.com/KarthikAkshaj
 3. Contributor 3:   https://github.com/AkhileshJyotishi
 4. Contributor 4:   https://github.com/mohit07raghav19
 5. Contributor 5:   https://github.com/Harshit-Chordiya



## Links:
1. Project repository: https://github.com/monarxxjain/Axios_HOF
2. Issue tracker:https://github.com/monarxxjain/Axios_HOF/issues

import React from "react";
import styles from "./InformationPage.module.css";
import { Link } from "react-router-dom";

function InformationPage() {
  return (
    <div>
      <div className={styles.heading}>
        <h3>PhotoCloud</h3>
        <Link to='/' style={{ textDecoration: "none" }}>
          <p>Back</p>
        </Link>
      </div>
      <div className={styles.container}>
        <h4>Image Gallery Application Documentation</h4>
        <p>
          The Image Gallery Application is a web-based platform built using
          React, Firebase, React DnD Kit, and React Router DOM, offering users
          the ability to upload, organize, and manage images seamlessly.
        </p>

        <h4>Features:</h4>
        <ul>
          <li>
            <strong>Firebase Integration:</strong> The application leverages
            Firebase for image storage. Images are uploaded to Firebase Storage,
            and their references or URLs are stored in Firebase Firestore for
            efficient retrieval and management.
          </li>

          <li>
            <strong>Image Upload:</strong> Users can upload images using the
            provided image upload component. The component interfaces with
            Firebase SDK, facilitating secure and straightforward image uploads.
          </li>

          <li>
            <strong>Drag and Drop Functionality:</strong> The Image Gallery
            employs React DnD Kit to enable users to rearrange image positions
            within the gallery effortlessly. This intuitive drag-and-drop
            functionality enhances user experience while organizing images.
          </li>

          <li>
            <strong>Image Display and Management:</strong> Images are displayed
            in a gallery format, utilizing a grid or similar layout for an
            organized presentation. Users can delete images, and corresponding
            updates are made to Firebase Storage and Firestore.
          </li>

          <li>
            <strong>Routing with React Router DOM:</strong> React Router DOM
            manages navigation within the application. It defines routes for the
            Image Gallery, Image Upload, and potentially other components,
            ensuring a seamless user experience.
          </li>
        </ul>
        <small >©️ Fahim Sahriar</small>
      </div>
    </div>
  );
}

export default InformationPage;

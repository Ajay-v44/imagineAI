


# ImaginAI

ImaginAI is a mobile application built with React Native and powered by a Strapi CMS backend. It integrates AI-driven features to convert text to images, transform images, and enhance photo clarity. Additional functionalities include background removal, image enhancements, and image-to-image AI transformations, providing a versatile toolkit for creative image generation and editing.

## Features
- **Text-to-Image Conversion**: Convert textual descriptions into visually engaging AI-generated images.
- **Image-to-Image AI Transformations**: Apply AI models to transform existing images into creative visuals.
- **Background Removal**: Effortlessly remove backgrounds from images for a clean, professional look.
- **Photo Clarity Enhancement**: Enhance image quality with advanced AI tools.
- **Image Upload and Management**: Seamlessly upload and manage images with Cloudinary integration.

## Tech Stack
### Frontend
- **React Native**: Cross-platform mobile development framework for creating a responsive and intuitive user interface.
  
### Backend
- **Strapi CMS**: Headless CMS for easy content management and backend API handling.
  
### Database
- **PostgreSQL**: Reliable and robust relational database for managing user and app data.

### Cloud Integrations
- **Google Authentication**: Secure and seamless login with Google OAuth.
- **Cloudinary**: Efficient media management and optimization for storing and serving images.

## Getting Started
Follow these steps to set up and run ImaginAI on your local environment.

### Prerequisites
- Node.js
- Yarn or npm
- Expo CLI (for React Native)
- PostgreSQL (local or cloud instance)
- Cloudinary account
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ajay-v44/imagineAI.git
   cd imagineAI
   ```

2. **Backend Setup**
   - Navigate to the Strapi backend directory:
     ```bash
     cd imagineAI-strapi-backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure `.env` with your database, Cloudinary, and Google OAuth credentials:
     ```env
     DATABASE_URL=your_postgres_db_url
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```
   - Run the backend server:
     ```bash
     npm run develop
     ```

3. **Frontend Setup**
   - Navigate to the React Native frontend directory:
     ```bash
     cd imagineAI
     ```
      - Configure `.env` with your database, Cloudinary, and Google OAuth credentials:
     ```env
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
      EXPO_PUBLIC_STRAPI_API_KEY=
      EXPO_PUBLIC_IP_ADDRESS=
      EXPO_PUBLIC_Replica_API_Token=
      EXPO_PUBLIC_CLOUDINARY_NAME=
      EXPO_PUBLIC_CLOUDINARY_KEY=
      EXPO_PUBLIC_CLOUDINARY_SECRET=
      EXPO_PUBLIC_UPLOAD_PRESET_NAME=
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the app:
     ```bash
      npx expo start
     ```

### Running the App
- Use Expo Go on your mobile device or an emulator to view and test the application.
- You should be able to log in via Google Auth, upload images, and use AI functionalities.

## Screenshots

![mainimg](https://github.com/user-attachments/assets/afce7345-49cb-473e-9ac8-acff5a1771e5)
![imgtoimg](https://github.com/user-attachments/assets/f95c543a-aa35-429f-bc67-eba3211c9780)
![teext-img](https://github.com/user-attachments/assets/c9725c23-06a6-455d-97de-454bc43b3f2a)


## Roadmap
- **Additional AI Models**: Add more model options for text-to-image and image-to-image transformations.
- **User Profile Management**: Extend user settings and profile capabilities.
- **Sharing Options**: Allow users to share generated images to social media directly.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions, feel free to reach out:
- GitHub: [@Ajay-v44](https://github.com/Ajay-v44)

Enjoy creating with **ImaginAI**!

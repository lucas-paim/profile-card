import Profile from "./components/Profile/index.jsx";
import profilePicture from "./assets/profile-picture.jpg";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={profilePicture}
        name="Lucas Paim"
        bio="Software Developer at DB1 group"
        email="lucasbopaim@gmail.com"
        phone="+55 (44) 99923 - 9777"
        githubUrl="https://github.com/lucas-paim"
        linkedinUrl="https://www.linkedin.com/in/lucas-borba-paim-118698250/"
        instagramUrl="https://instagram.com/lucas_bp"
      />
    </div>
  );
}

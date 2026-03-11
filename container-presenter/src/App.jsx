//import UserProfile from "./messy-way/components/UserProfile";
import UserProfileContainer from "./with-pattern/components/profile/UserProfileContainer";
import "./App.css";

function App() {
  return (
    <>
      <UserProfileContainer userId={1} />
    </>
  );
}

export default App;

import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  return (
    <div className="bg-light p-3">
      <h1>Main App Screen </h1>
      <UserContext>
        <AppRouter />
      </UserContext>
    </div>
  );
};

export default MainApp;

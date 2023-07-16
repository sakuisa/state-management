import { UserProcider } from "./prviders/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProcider>
      <Router />;
    </UserProcider>
  );
}

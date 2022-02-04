import protectRoute from "../../helpers/protectRoute";

function Login() {
  return (
    <div>
        <h1>Login</h1>
    </div>
  );
}

export default protectRoute(Login, 'auth');

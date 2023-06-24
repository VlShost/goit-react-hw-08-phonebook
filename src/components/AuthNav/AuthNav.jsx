import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </>
  );
}

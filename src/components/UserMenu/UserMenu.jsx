import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </button>
    </div>
  );
};

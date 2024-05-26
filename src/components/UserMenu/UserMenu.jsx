// import { toast } from "react-hot-toast";
// import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const user = useSelector(selectUser);

  //   const handleLogout = () => {
  //     dispatch(logOut())
  //       .unwrap()
  //       .then(() => {
  //         toast.success("Success logout");
  //       })
  //       .catch(() => {
  //         toast.error("Error logout. Please, try again");
  //       });
  //   };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.userName}>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}

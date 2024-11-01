import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../features/store";
import { UserSignUp } from "../UserSignUp";
import { toggleForm } from "../../../features/Slice/user/User";
import styles from "./style.module.scss";
import { UserSignIn } from "../UserSignIn";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(
    (state: RootStateType) => state.user
  );
  const closeForm = () => {
    dispatch(toggleForm(false));
  };

  return showForm ? (
    <>
      <div
        className={styles.overlay}
        onClick={() => {
          closeForm();
        }}
      />
      {formType === "signup" ? <UserSignUp /> : <UserSignIn />}
    </>
  ) : (
    <></>
  );
};

export default UserForm;

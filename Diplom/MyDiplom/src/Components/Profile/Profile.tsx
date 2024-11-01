import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../Button";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/Slice/user/User";
import { RootStateType } from "../../features/store";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootStateType) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });
  useEffect(() => {
    if (!currentUser) return;
    setFormData(currentUser);
  }, [currentUser]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => !val);
    if (isEmpty) return;
    dispatch(updateUser(formData));
  };
  return (
    <div className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input
              type="email"
              placeholder="your email"
              name="email"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              placeholder="your name"
              name="name"
              value={formData.name}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="password"
              placeholder="your password"
              name="password"
              value={formData.password}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              placeholder="your avatar"
              name="avatar"
              value={formData.avatar}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className={styles.submit}>
            Update user
          </Button>
        </form>
      )}
    </div>
  );
};

export default Profile;

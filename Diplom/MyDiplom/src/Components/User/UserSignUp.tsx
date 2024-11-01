import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import Button from "../Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUser,
  toggleForm,
  toggleFormType,
} from "../../features/Slice/user/User";

export const UserSignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(toggleForm(false));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => !val);
    if (isEmpty) return;
    dispatch(createUser(formData));
    closeForm();
  };
  type FormType = "login" | "signup";
  const toggleCurrentFormType = (type: FormType) => {
    dispatch(toggleFormType(type));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.title}>Sign Up</div>
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
        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType("login")}
        >
          I have an account
        </div>
        <Button type="submit" className={styles.submit}>
          Create an account
        </Button>
      </form>
    </div>
  );
};

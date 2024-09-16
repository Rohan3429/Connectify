import React, { useState } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add sign-in logic here (e.g., form submission, API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.signIn}>
      <img className={styles.icon} alt="" src="05 1.png" />
      <div className={styles.signInChild} />
      <div className={styles.signInItem} />
      <div className={styles.signInInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.connectifyParent}>
        <b className={styles.connectify}>Connectify!</b>
        <div className={styles.anAllInOneSolution}>
          An all-in-one solution for your academic and club activity needs
        </div>
        <div className={styles.avatarGroup}>
          <img className={styles.avatarIcon} alt="" src="Avatar.png" />
          <img className={styles.avatarIcon} alt="" src="Avatar.png" />
          <img className={styles.avatarIcon} alt="" src="Avatar.png" />
          <div className={styles.overflow}>
            <div className={styles.initials}>+1</div>
          </div>
        </div>
        <div className={styles.newUserCreateContainer}>
          <span className={styles.newUser}>New user?</span>
          <span>
            {` `}
            <span className={styles.createANew}>Create a new account</span>
          </span>
        </div>
        <div className={styles.formLogIn}>
          <div className={styles.inputField}>
            <label className={styles.initials}>Email</label>
            <input
              className={styles.input}
              type="email"
              value={email}
              placeholder="john@gnu.ac.in"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputField}>
            <label className={styles.initials}>Password</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={handleSignIn}>
              Sign In
            </button>
          </div>
          <div className={styles.textLink}>
            <div className={styles.textLink1}>Forgot password?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

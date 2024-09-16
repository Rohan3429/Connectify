import React from "react";
import styles from "./Signinup.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <img className={styles.icon} alt="" src="05 1.png" />
      <div className={styles.signUpChild} />
      <div className={styles.signUpItem} />
      <div className={styles.signUpInner} />
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
        <div className={styles.alreadyAUserContainer}>
          <span className={styles.alreadyAUser}>Already a user?</span>
          <span>{` `}</span>
          <span>
            <span className={styles.signIn}>Sign In</span>
          </span>
        </div>
        <div className={styles.formLogIn}>
          <div className={styles.inputField}>
            <div className={styles.initials}>Email</div>
            <div className={styles.input}>
              <div className={styles.value}>john@gnu.ac.in</div>
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.initials}>Password</div>
            <div className={styles.input}>
              <div className={styles.value}>pizzaaa</div>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <div className={styles.button1}>Sign Up</div>
            </div>
          </div>
          <div className={styles.textLink}>
            <div className={styles.textLink1}>Forgot password?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import scss from "./Sign_in.module.scss";
import { Link } from "react-router-dom";

function Sign_in() {
  return (
    <>
      <section className={scss.sign_main}>
        <div className={scss.left_ornament}></div>
        <div className={scss.right_ornament}></div>
        <div className={scss.container}>
          <div className={scss.sign}>
            <img src="./images/signIn/logo.svg" alt="logo" />
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
            <Link to="#" className={scss.forgot}>
              Forgot password?
            </Link>
            <button>
              <h3>Sign in</h3>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sign_in;

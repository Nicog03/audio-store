const SignIn = () => {
  return (
    <>
      <h1>Sign In</h1>
      <p>It's modular and designed to last</p>
      <form action="">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <a href="#">Forgot Password</a>
        <button>Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="">Sign Up here</a>
      </p>
    </>
  );
};

export default SignIn;

import fbLogo from '../fb-logo.svg'

function Hero() {
  return (
    <div class="container col-12">
      <div class="row align-items-center g-lg-5 py-5">

        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
          <img src={fbLogo} alt="" width="75%" />
          </h1>
          <p class="col-lg-10 fs-4">
          Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div class="col-md-12 col-lg-6">
          <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Log in
            </button>
            <hr class="my-4" />

            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Create Account
            </button>

            <small class="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>

    
  );
}

export default Hero;

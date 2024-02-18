import fbLogo from '../fb-logo.svg'
import './hero.css'

function Hero() {
  return (
    <div className="container col-12">
      <div className="row align-items-center g-lg-5 py-5">

        <div className="left col-lg-6 text-center text-lg-start">

          <img src={fbLogo} alt=""/>
          
          <p>
          Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="right col-md-12 col-lg-6">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
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

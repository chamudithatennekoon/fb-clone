import fbLogo from '../fb-logo.svg'
import './hero.css'

function Hero() {
  return (
    <div className="container col-12 mt-5">
      <div className="row align-items-center g-lg-5 py-5">

        <div className="left col-lg-7 text-center text-lg-start">

          <img src={fbLogo} alt=""/>
          
          <p>
          Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div className="right col-md-12 col-lg-5">
            <div className="loginForm">
          <form className="p-4 p-md-3 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Log in
            </button>
            <div className="pwf">
            <a href="#">Forgotten password?</a>
            </div>
            <hr class="my-4" />
            <div className="container d-flex justify-content-center">
            <button className="create btn btn-lg">
              Create new account
            </button>
            </div>
          </form>
        </div>
        <p>
        <b><a href="">Create a Page</a></b> for a celebrity, brand or business.
        </p>
        
    
        </div>
      </div>
    </div>

    
  );
}

export default Hero;

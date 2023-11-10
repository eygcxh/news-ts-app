

function AuthRequired() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Sign in to your account</h1>
      <form className="flex flex-col">
          <input
            className=""
              name="email"
              type="email"
              placeholder="Email address"
              value=''
          />
          <input
              className=""
              name="password"
              type="password"
              placeholder="Password"
              value=''
          />
          <button>Log in</button>
      </form>
    </div>
  )
}

export default AuthRequired
import AuthRequired from "../components/AuthRequired" 

function Login() {

  return (
    <div className="py-28">
      <AuthRequired />
    </div>
  )
}

export default Login
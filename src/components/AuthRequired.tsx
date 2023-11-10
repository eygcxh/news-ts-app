import { ChangeEvent, FormEvent, useState } from "react"

type LoginFormData = {
  email: string;
  password: string;
}

function AuthRequired() {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({ email: "", password: "" })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="mb-6 text-3xl font-semibold text-gray-700">Sign in to your account</h1>
    <form className="flex flex-col bg-white p-8 rounded shadow-md">
        <input
          className="mb-4 p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          className="mb-4 p-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button onClick={handleSubmit} className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700">Log in</button>
    </form>
  </div>
  )
}

export default AuthRequired
import React from 'react'

const Login = () => {
  return (
    <>
      <form>
        <div
          className="mb-3 mt-5"
        >
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div
          className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
        >
          Login
        </button>
      </form>
    </>
  )
}

export default Login
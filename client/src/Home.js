import React from 'react'

const Home = (props) => {
    const logout = () => {
        localStorage.clear()
        window.location.replace('/')
      }
  return (
    <div>
      <p>Home page + {props.value}</p>
      <button
        className="bg-pink-600 p-4 border rounded-lg text-white hover:bg-orange-400"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )
}

export default Home

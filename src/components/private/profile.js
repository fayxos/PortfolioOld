import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from ".../services/auth"

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </>
)

export default Profile
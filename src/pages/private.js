import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/private/profile"
import Upload from "../components/private/upload"
import Login from "../components/private/login"
import PrivateRoute from "../components/private/privateRoute"

const Private = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/private/profile" component={Profile} />
      <PrivateRoute path="/private/upload" component={Upload} />
      <Login path="/private/login" />
    </Router>
  </Layout>
)

export default Private

//https://www.gatsbyjs.com/tutorial/authentication-tutorial/
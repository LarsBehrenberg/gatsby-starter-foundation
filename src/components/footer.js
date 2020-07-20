import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>
        &copy; {new Date().getFullYear()} <Link to="/">bearandgirl.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer

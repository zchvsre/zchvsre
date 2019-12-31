import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === "info" &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
          <div
            style={
              props.page === "info"
                ? { margin: "0.5rem 0px 0px 0px", color: "white" }
                : { margin: "0.5rem 0px 0px 0px", color: "#414141" }
            }
          >
            <h2 style={({ padding: "40 px" }, {})}>{props.subtitle}</h2>
          </div>
        </Link>
        <div>
          <h1>
            <Link
              to={props.page === "info" ? "/" : "/info"}
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === "info" ? "close" : "about"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}

import React from 'react'
import styles from "@/styles/navbar.module.css"

function Navbar() {
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <a href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </a>

        
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <a
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </a>
            <a href="/about" className={`${styles.nav_link}`}>
              About
            </a>
            <a href="/services" className={`${styles.nav_link}`}>
              Service
            </a>
            <a href="/menu" className={`${styles.nav_link}`}>
              Menu
            </a>
            <div className={`${styles.dropdown}`}>
              <a
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                style={{cursor:"pointer"}}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <a href="/reservation" className={`${styles.dropdown_item}`}>
                  Reservation
                </a>
                <a href="/testimonial" className={`${styles.dropdown_item}`}>
                  Testimonial
                </a>
              </div>
            </div>
            <a href="/contact" className={`${styles.nav_link}`}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
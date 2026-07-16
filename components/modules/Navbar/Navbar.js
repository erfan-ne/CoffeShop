import React, { useEffect, useState } from "react";
import styles from "@/styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar() {
  const route = useRouter();
  const [search, setSearch] = useState("");

  useEffect(()=>{   
    setSearch(route.query.q)
  }, [])

  const searchHandler = () => {
    if (search) {
      route.push(`/search?q=${search}`);
    }
  };

  const searchHandlerWithEnter = (e) => {
    if (e.key === "Enter") {
      if (search) {
        route.push(`/search?q=${search}`);
      }
    }
  };

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative">
          <a href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              Next-Coffee
            </h1>
          </a>

          <div style={{ marginLeft: "1rem" }}>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyUp={searchHandlerWithEnter}
              type="text"
              className={styles.search_input}
              placeholder="Search..."
            />
            <FontAwesomeIcon
              onClick={searchHandler}
              className={styles.search_icon}
              icon={Icons.faSearch}
            />
          </div>
        </div>

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
                style={{ cursor: "pointer" }}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
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
  );
}

export default Navbar;

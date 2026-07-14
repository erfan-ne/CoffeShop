import MenuPage from "@/components/templates/Menu/MenuPage";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import React from "react";

function Menu({ menu }) {
  return (
    <>
      <PageHeader route="Menu" />
      <MenuPage Menus={menu} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/menu");
  const data = await res.json();

  return {
    props: {
      menu: data,
    },
  };
}

export default Menu;

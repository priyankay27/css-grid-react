import React from "react";
import Footer_Menu from "./footer_menu";
function Footer() {
  return (
    <footer class="footer">
      <ul class="nav">
        <Footer_Menu text="Find your dream home" />
        <Footer_Menu text="Request proposal" />
        <Footer_Menu text="Download home planner" />
        <Footer_Menu text="Contact us" />
        <Footer_Menu text="Submit your property" />
        <Footer_Menu text="Come work with us!" />
      </ul>
      <p class="copyright">&copy; Copyright 2020 by Priyanka.</p>
    </footer>
  );
}
export default Footer;

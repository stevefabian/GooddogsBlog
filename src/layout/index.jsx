import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import siteConfig from "../../data/SiteConfig";
import brand from "../../content/images/gooddogslogo.png";
import "../components/Icons/FontAwesome";
import "../styles/shiba.min.css";
import "../../content/styles/customize.scss";

const MainLayout = ({ children, hasFooter = true }) => (
  <div>
    <Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
      <meta name="description" content={siteConfig.siteDescription} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <Navigation 
      brand={brand}
      title={siteConfig.navTitle} 
      links={siteConfig.navLinks} 
    />
    <div class="banner">
      <h4>NOTICE</h4>
      <p>This site is currently being re-designed, and as such does not contain any meaningful content at this time. 
        Eventually, there will be blog posts that may (or may not) be of interest to software developers and
        architects, but for now...
      </p>
      <p>There's nothing to see here, please move on</p>
    </div>
    {children}
    {hasFooter && (
      <Footer 
        socials={siteConfig.socialLinks}
        links={siteConfig.footerLinks}
        copyright={siteConfig.copyright}
      />
    )}
    <ScrollToTop 
      color="#FFF"
      bgColor="grey-half"
    />
  </div>
)

export default MainLayout;

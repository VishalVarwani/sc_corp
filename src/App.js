import logo from './logo.svg';
import './App.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './styles.css'; // Import the CSS file with the :root block

function App() {


  const whatsappLink = 'https://api.whatsapp.com/send?phone=+917977593625&text=Hi%20I%20need%20to%20know%20about%20your%20project';
  const phoneNumber = '+917977593625';

  const circleButtonStyle = {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '140px',
    right: '15px',
    color: '#131046',
    backgroundColor: '#ffd700',
    borderRadius: '50%', // Set the border radius to 50% for a circular shape
    textAlign: 'center',
    fontSize: '30px',
    zIndex: '9999999999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    marginTop: '2px', // Adjust the margin-top to center the icon inside the circle
  };
  return (
    
    <div>
           <a href={whatsappLink} style={circleButtonStyle} target="_blank">
        <FaWhatsapp style={iconStyle} />
      </a>
      <a href={`tel:${phoneNumber}`} style={{ ...circleButtonStyle, bottom: '60px'} }>
        <FaPhone  style={iconStyle}/>
      </a>
      <div>
  <div style={{width: '100vw',
    height: '100vh',
    backgroundcolor:'rgba(255, 255, 255, 1)',
    position: 'fixed',
    top: '0',
    left:' 0',
    zindex: '1040'}} id="loader">
   
  </div>
  <style dangerouslySetInnerHTML={{__html: " .more-cont{ display: inline; } .more{ display: none; } @media only screen and (max-width: 992px){ */ .more-cont{ display: none; } .more{ display: inline-block; } }*/ .btn-sm.more{ color: #000; text-decoration: underline; padding-left: 0; } " }} /> <style dangerouslySetInnerHTML={{__html: " @media only screen and (min-width: 992px){ .info-box{ width: 27vw; top: 8px; left: 10px; background-color: #fff; color: #000; text-align: center; border-radius: 8px; padding: 0 10px; font-weight: 400; } .pro-status{ display: block; text-shadow: none; color: var(--colorPrimary); background-color: transparent; padding: .6vw 2.5vw .3vw 2vw; font-weight: 700; } .pro-title, .pro-add, .pro-dev, ul.pro-spec, .info-box span.heading, .pro-tag-line, .pro-price, .pro-rera{ text-shadow: none; color: #000; font-weight: 400; } .pro-title{ padding: .5vw .8vw .3vw; } .pro-title, .pro-add, .pro-price{ font-weight: 700; } ul.pro-spec{ background-color: transparent; margin-bottom: 0; } .info-box span.list-icon{ display: none; } .pro-rera{ font-size: .8vw; } } .offer{ display: block; padding: 8px; font-size: 13px; font-weight: 700; } .offer-top{ background: #76BC4E; border-radius: 8px 8px 0px 0px; } .offer-bottom{ background: #D6EBCA; border-radius: 0px 0px 8px 8px; } .offer-bg-animation{color: #ffffff;display: block;background: linear-gradient(-45deg,var(--main-bg-color),var(--main-text-color),var(--main-bg-color),var(--main-text-color));background-size: 400% 400%;-webkit-animation: Gradient 3s ease infinite;-moz-animation: Gradient 3s ease infinite;animation: Gradient 3s ease infinite;}\n    " }} />
  <header className="micro-nav fixed-top pload"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-white micro-navbar">
      <a className="navbar-brand" href="#" onclick="return false">

        <img src="assets/media/developer/1640783210_logo_(2).jpg" className="logo" />
        <img src="assets/media/developer/sc.jpeg" className="logo" />

        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" /> 
      </button> 
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-fill"> 
          <li className="nav-item">
            <a className="nav-link" href="#home"><i className="mi mi-home nav-icon" /><span className="d-sm-inline d-md-none"> Home</span></a></li> 
          <li className="nav-item"><a className="nav-link" href="#pricing"><i className="mi mi-price nav-icon" /> Price</a></li>
          <li className="nav-item"><a className="nav-link" href="#sitefloorplan"><i className="mi mi-siteplan nav-icon" /> Site &amp; Floor Plan</a></li>
          <li className="nav-item"><a className="nav-link" href="#sitevisit"><i className="mi mi-sitevisit nav-icon" /> Virtual Site Tour</a></li> 
          <li className="nav-item overflow-hidden"><a className="nav-link enqModal" href="#" data-form="md" data-title="Download brochure" data-btn="Download now" data-enquiry="Ebook Download" data-redirect="enquiry" data-redirect-file="thanks.php" data-toggle="modal" data-target="#enqModal"><i className="mi mi-download nav-icon d-inline-block animated slideInDown infinite" /> Brochure</a></li>
        </ul> 
      </div>
    </nav> 
  </header>
  
<main style={{}}className="pload"> 
  <div id="home" className="carousel slide micro-main-slider" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#home" data-slide-to={0} className="active" />
    </ol> 
    <div className="carousel-inner">
      <div className="carousel-item">
        <picture> 
          <source className="lazyload d-block micro-main-slider-img" media="(max-width: 750px)" data-srcset="https://www.new-project.in/assets/media/microsite_banners/1664442214_elevation.jpg" type="image/webp" /> 
          <source className="lazyload d-block micro-main-slider-img" media="(min-width: 751px)" data-srcset="https://www.new-project.in/assets/media/microsite_banners/1664442214_elevation.jpg" type="image/webp" /> 
          <img data-sizes="auto" className="lazyload d-block micro-main-slider-img" data-srcset="https://www.new-project.in/assets/media/microsite_banners/1664442214_elevation.jpg 750w,https://www.new-project.in/assets/media/microsite_banners/1664442214_elevation.jpg" />
        </picture>
      </div>
    </div> 
  </div>
  
  <div className="info-box overflow-hidden">
    <span className="pro-status">Booking Open</span> 
    <span className="pro-title">Lodha Woods</span>
    <span className="pro-add">At Kandivali East</span> 
    <span className="pro-dev">by Lodha Group</span> 
    <ul className="pro-spec" style={{paddingInlineStart: 20}}>
      <li style={{listStyleType: 'none'}}>
        <span className="list-icon" style={{fontWeight: 'bold'}}>▸</span> <span className="heading" style={{fontWeight: 'bold'}}>Land Parcel</span>
        : 4.8 Acre | Total Units : NA</li>
    </ul>
    <div className="offer offer-top offer-bg-animation text-white overflow-hidden mt-1 text-uppercase mx-1 mx-md-0">
      <span className="animated bounceIn infinite d-block" style={{animationDuration: '3s'}}> Pay Only 10% On Booking </span>
    </div> 
    <div className="offer offer-top offer-bg-animation text-white overflow-hidden my-1 text-uppercase mx-1 mx-md-0"> Possession In Next year Dec 2023 and 2024 </div>
    <div className="offer offer-top offer-bg-animation text-white overflow-hidden mt-1 text-uppercase mx-1 mx-md-0"> Best of Air Quality as Close to Nature 
    </div> 
    <div className="offer offer-bottom overflow-hidden mb-1 mx-1 mx-md-0">
      <span className="animated bounceIn infinite d-block" style={{animationDuration: '3s'}}>  30000 Sq Ft Roof Top Sports Arena on MLCP </span>
    </div> 
    <div className="offer offer-bottom overflow-hidden mb-1 mx-1 mx-md-0">
      <span className="animated bounceIn infinite d-block" style={{animationDuration: '3s'}}> 14000 SQ FT Grand Club House with 7 Amenities</span>
    </div> 
    <div className="offer offer-bottom overflow-hidden mb-1 mx-1 mx-md-0">
      <span className="animated bounceIn infinite d-block" style={{animationDuration: '3s'}}> Mix Of Nature + Modern Infrastructure</span>
    </div> 
    <div className="offer offer-bottom overflow-hidden mb-1 mx-1 mx-md-0">
      <span className="animated bounceIn infinite d-block" style={{animationDuration: '3s'}}> Spacious 2, 3 &amp; 4 Bhk Air Conditioned Homes with Exclusive DECKS </span>
    </div> 
    <span className="pro-price"><i className="mi mi-rs-light info-icon" />1.81 Cr* Onwards <small /></span>
    <button className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale" data-form="lg" data-title="Mail me pricing details" data-btn="Send now" data-enquiry="Enquire Now" data-redirect="enquiry" data-toggle="modal" data-target="#enqModal">Enquire Now</button>
    <span className="pro-rera">
      <span className="heading">RERA No</span>
      :  P51800031346</span>
  </div> 
  <section className="section shadow-sm lazyload" id="developer">
    <div className="d-block pt-2 pb-1 text-center"> <img src="assets/media/developer/sc.jpeg" style={{maxWidth: 350, height: 80, display: 'inline-block', objectFit: 'contain'}} /> </div> <span className="d-block section-heading-sub text-capitalize">About SC Corp</span>
    <p /><p>Lodha Group or Macrotech Developers is an Indian real estate company with its headquarters in Mumbai, India. It was founded in 1980 by Mangal Prabhat Lodha. It has developed residential and commercial properties in Mumbai, Thane, Hyderabad, Pune, and London.</p>
  </section>
  <section className="section shadow-sm lazyload" id="overview"> 
    <span className="head text-capitalize d-none d-md-block">Overview</span>
    <span className="d-block section-heading color-primary text-capitalize">Lodha Woods</span> 
    <span className="d-block section-heading-sub color-primary text-capitalize">At Kandivali East</span>
    <p /><p>LAUNCHING LODHA WOODS: BORDERING 25,000 ACRES OF FOREST GREENS</p>
    <p>Lodha Woods invites you to live in the lap of nature. Spacious residences with grand decks* and WFH spaces*, offering views of the verdant Sanjay Gandhi National Park, and its very own forest garden within. Strategically located just off the Western Expressway Highway in Kandivali, Lodha Woods comes with a grand clubhouse and 30+ world-class amenities. An opportunity to live in a bigger and better home, in harmony with Mother Nature, may never come again.</p>
    <button className="btn btn-sm btn-outline-info sectio-bro-btn overflow-hidden enqModal" data-form="md" data-title="Download brochure" data-btn="Download now" data-enquiry="Ebook Download" data-redirect="brochure" data-redirect-file="brochure.pdf" data-toggle="modal" data-target="#enqModal">
      <span className="d-inline-block mi mi-download mr-1 animated slideInDown infinite" /> Download Brochure</button> </section>
  <section className="section shadow-sm lazyload"> <span className="section-link" id="pricing" /> <span className="head text-capitalize">Price</span>
    <div className="row">
      <div className="col-md-8">
        <table className="table table-striped table-borderless border micro-price-table table-pricing">
          <thead>
            <tr>
              <th scope="col" className="border border-bottom-0 mb-w">Type</th>
              <th scope="col" className="border border-bottom-0 mb-w">Area</th>
              <th scope="col" className="border border-bottom-0 border-right-0">Price</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-type">2 BHK</td>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">719 sq. ft</td>
              <td className="price-amt"><i className="mi mi-rs-light" /> 1.81 Cr* Onwards</td>
              <td><button className="btn btn-sm btn-info effetGradient effectScale enqModal" data-form="lg" data-title="Send me costing details" data-btn="Send now" data-enquiry="Request Price" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">Price Breakup</button></td>
            </tr>
            <tr>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-type">2 BHK With Deck</td>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">766 sq. ft</td>
              <td className="price-amt"><i className="mi mi-rs-light" /> 1.99 Cr* Onwards</td>
              <td><button className="btn btn-sm btn-info effetGradient effectScale enqModal" data-form="lg" data-title="Send me costing details" data-btn="Send now" data-enquiry="Request Price" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">Price Breakup</button></td>
            </tr>
            <tr>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-type">3 BHK With Deck</td>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">1026 sq. ft</td>
              <td className="price-amt"><i className="mi mi-rs-light" /> 2.79 Cr* Onwards</td>
              <td><button className="btn btn-sm btn-info effetGradient effectScale enqModal" data-form="lg" data-title="Send me costing details" data-btn="Send now" data-enquiry="Request Price" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">Price Breakup</button></td>
            </tr>
            <tr>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-type">3 BHK With Deck &amp; Study</td>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">1142 sq. ft</td>
              <td className="price-amt"><i className="mi mi-rs-light" /> 2.98 Cr* Onwards</td>
              <td><button className="btn btn-sm btn-info effetGradient effectScale enqModal" data-form="lg" data-title="Send me costing details" data-btn="Send now" data-enquiry="Request Price" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">Price Breakup</button></td>
            </tr>
            <tr>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-type">4 BHK With Deck</td>
              <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">1540 sq. ft</td>
              <td className="price-amt"><i className="mi mi-rs-light" /> 4.08 Cr* Onwards</td>
              <td><button className="btn btn-sm btn-info effetGradient effectScale enqModal" data-form="lg" data-title="Send me costing details" data-btn="Send now" data-enquiry="Request Price" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">Price Breakup</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
        <a href="#" className="text-decoration-none enqModal" data-form="lg" data-title="Send me costing details" data-btn="Send now" data-enquiry="Costing Details" data-toggle="modal" data-target="#enqModal">
          <div className="at-property-item shadow-sm border border-grey mt-1">
            <div className="at-property-img">
              <picture>
                <source className="lazyload w-100" data-srcset="https://www.woods-kandivali.co.in/site_assets/template_2/images/costing-details-320w.webp" type="image/webp" /> 
                <img data-sizes="auto" className="lazyload w-100" data-srcset="https://www.woods-kandivali.co.in/site_assets/template_2/imag/costing-details-320w.jpg" /> 
              </picture>
              <div className="at-property-overlayer" /> 
              <span className="btn btn-default at-property-btn">Enquire Now</span> 
            </div>
            <div className="at-property-dis effetGradient">
              <h5>Complete Costing Details</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  <section className="section shadow-sm lazyload"> <span className="section-link" id="sitefloorplan" /> <span className="head text-capitalize">Site &amp; Floor Plan</span>
    <div className="row">
      <div className="col-12 col-md-4"> <span className="d-block section-heading-sub text-capitalize">Master Plan</span>
        <a data-fancybox="masterplan" href="assets/media/masterplan/21/1640783355_ezgif_com-gif-maker_(25).jpg" data-srcset="https://www.new-project.in/assets/media/masterplan/21/1640783355_ezgif_com-gif-maker_(25).jpg?1613824886 800w,https://www.new-project.in/assets/media/masterplan/21/1640783355_ezgif_com-gif-maker_(25).jpg?1613824886" target="_blank">
          <div className="at-property-item mt-1">
            <div className="at-property-img master-plan text-center">
              <picture>
                <source className="lazyload shadow-sm border border-grey" data-srcset="https://www.new-project.in/assets/media/masterplan/21/1640783355_ezgif_com-gif-maker_(25).jpg" type="image/webp" /> <img data-sizes="auto" className="lazyload shadow-sm border border-grey" data-srcset="https://www.new-project.in/assets/media/masterplan/21/1640783355_ezgif_com-gif-maker_(25).jpg" /> 
              </picture>
              <div className="at-property-overlayer" /> <span className="at-property-btn">View Master Plan</span> </div>
          </div>
        </a>
      </div>
      <div className="col-12 col-md-8"> <span className="d-block section-heading-sub text-capitalize">Floor Plan</span>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <a href="#" className="text-decoration-none enqModal" data-form="lg" data-title="Send me plan details" data-btn="Send now" data-enquiry="Floor Plan" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">
              <div className="at-property-item shadow-sm border border-grey mt-1">
                <div className="at-property-img">
                  <picture>
                    <source className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-3.jpeg" type="image/webp" /> <img data-sizes="auto" className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-3.jpeg" /> </picture>
                  <div className="at-property-overlayer" /> <span className="btn btn-default at-property-btn" role="button">Enquire Now</span> </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-decoration-none enqModal" data-form="lg" data-title="Send me plan details" data-btn="Send now" data-enquiry="Floor Plan" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">
              <div className="at-property-item shadow-sm border border-grey mt-1">
                <div className="at-property-img">
                  <picture>
                    <source className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-4.jpeg" type="image/webp" /> <img data-sizes="auto" className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-4.jpeg" /> </picture>
                  <div className="at-property-overlayer" /> <span className="btn btn-default at-property-btn" role="button">Enquire Now</span> </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-decoration-none enqModal" data-form="lg" data-title="Send me plan details" data-btn="Send now" data-enquiry="Floor Plan" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">
              <div className="at-property-item shadow-sm border border-grey mt-1">
                <div className="at-property-img">
                  <picture>
                    <source className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-5.jpeg" type="image/webp" /> <img data-sizes="auto" className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-5.jpeg" /> </picture>
                  <div className="at-property-overlayer" /> <span className="btn btn-default at-property-btn" role="button">Enquire Now</span> </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-decoration-none enqModal" data-form="lg" data-title="Send me plan details" data-btn="Send now" data-enquiry="Floor Plan" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">
              <div className="at-property-item shadow-sm border border-grey mt-1">
                <div className="at-property-img">
                  <picture>
                    <source className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-5.jpeg" type="image/webp" /> <img data-sizes="auto" className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-5.jpeg" /> </picture>
                  <div className="at-property-overlayer" /> <span className="btn btn-default at-property-btn" role="button">Enquire Now</span> </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-decoration-none enqModal" data-form="lg" data-title="Send me plan details" data-btn="Send now" data-enquiry="Floor Plan" data-redirect="floorplan" data-toggle="modal" data-target="#enqModal">
              <div className="at-property-item shadow-sm border border-grey mt-1">
                <div className="at-property-img">
                  <picture>
                    <source className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-6.jpeg" type="image/webp" /> <img data-sizes="auto" className="lazyload floor-plan-img blur" data-srcset="https://www.new-project.in/assets/media/floorplan/21/1657782947_fp-6.jpeg" /> </picture>
                  <div className="at-property-overlayer" /> <span className="btn btn-default at-property-btn" role="button">Enquire Now</span> </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section shadow-sm lazyload"> <span className="section-link" id="sitevisit" /> <span className="head text-capitalize">Virtual Site Tour</span>
    <a href="#" className="enqModal" data-form="lg" data-title="Virtual Site Visit" data-btn="Start Tour" data-enquiry="Virtual Site Tour" data-redirect="virtualtour" data-toggle="modal" data-target="#enqModal">
      <div className="at-property-item my-2 pt-md-0">
        <div className="at-property-img vsv-img">
          <picture>
            <source className="lazyload w-100" media="(max-width: 750px)" data-srcset="https://www.new-project.in/assets//media/microsite_banners/1664442214_elevation.jpg" type="image/webp" />
            <source className="lazyload w-100" media="(min-width: 751px)" data-srcset="https://www.new-project.in/assets//media/microsite_banners/1664442214_elevation.jpg" type="image/webp" /> <img data-sizes="auto" className="lazyload w-100" data-srcset="https://www.new-project.in/assets/media/microsite_banners/1664442214_elevation.jpg 750w,https://www.new-project.in/assets/media/microsite_banners/1664442214_elevation.jpg" /> </picture>
          <div className="vsv-text-bk">
            <div className="vsv-text-bg">
              <div className="vsv-icon lazyload" /> <span className="text-uppercase h1 font-weight-bold mb-0 d-none d-lg-block">Virtual Tour</span> <span className="text-capitalize text-center d-none d-lg-block"> At Kandivali East</span> </div>
          </div>
        </div> <span className="d-block text-capitalize text-center d-sm-block d-md-none pt-2"> At Kandivali East</span> </div>
    </a>
  </section>
  <section className="section shadow-sm lazyload" id="developer">
    <div className="d-block pt-2 pb-1 text-center"> <img src="assets/media/developer/1659091574_logo1.png" style={{maxWidth: 350, height: 80, display: 'inline-block', objectFit: 'contain'}} /> </div> <span className="d-block section-heading-sub text-capitalize">About Lodha Group</span>
    <p /><p>Lodha Group or Macrotech Developers is an Indian real estate company with its headquarters in Mumbai, India. It was founded in 1980 by Mangal Prabhat Lodha. It has developed residential and commercial properties in Mumbai, Thane, Hyderabad, Pune, and London.</p>
  </section>
  <div className="micro-side text-center">
    <div className="og-section pb-2">
      <ul className="nav nav-fill og-block">
        <li className="nav-item enqModal" data-form="lg" data-title="Organize Site Visit" data-btn="Request Site Visit" data-enquiry="Organize Site Visit" data-toggle="modal" data-target="#enqModal">Organize Site Visit</li>
        <li className="nav-item" onclick="window.open('https://api.whatsapp.com/send?phone=918527602954&text=Hi!%20I\'m%20Interested%20In%20Lodha%20Woods%20Please%20Share%20Details.', '_blank');"><span className="mi mi-whatsapp action-icon"><span className="path1" /><span className="path2" /><span className="path3" /></span>  8527602954</li>
      </ul> <button className="btn btn-sm btn-info micro-form-btn-sm effetGradient effectScale enqModal mt-1" data-form="sm" data-title="Immediate Call Back" data-btn="Request Call Now" data-enquiry="Immediate Call Back" data-toggle="modal" data-target="#enqModal"><span className="mi mi-call action-icon" /> Request Call Back</button>      </div> <span className="d-block form-heading font-weight-bold my-2">Pre-Register here for Best Offers</span>
    <div id="suc_fm_msg_1">
      <form className="form-side">
        <div className="form-group"> 
          <input type="text" pattern="[a-zA-Z ]+" className="form-control rounded-0 micro-form-field" placeholder="Name" name="user_name_1" id="user_name_1" required /> 
          <span id="user_name_1_error" />
        </div>
        <div className="form-group form_number"> 
          <select id="country_code" onchange="set_country_code(this.value);return false;"><option selected="selected" value={91} data-id={99}>+91 (IND)</option><option value={971} data-id={224}>+971 (UAE)</option><option value={44} data-id={225}>+44 (UK)</option><option value={1} data-id={226}>+1 (USA)</option></select>            
          <input type="tel" pattern="[0-9]+" className="intTelInput form-control rounded-0 micro-form-field w-100" placeholder="Mobile No" id="user_mobile_1" name="user_mobile_1" required /> 
          <span id="user_mobile_1_error" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control rounded-0 micro-form-field" placeholder="E-Mail Address" name="user_email_1" id="user_email_1" required /> 
          <span id="user_email_1_error" />
        </div> 
        <button type="button" name="enq_formBtn" className="btn btn-info micro-form-btn mt-2 effetMoveGradient" onclick="complete_enquiry_form_with_thanks('user_name_1','user_email_1','user_mobile_1','suc_fm_msg_1','>PRE_REGISTER_Now');return false;">Pre-Register Now</button>        
      </form>
    </div>
  </div>
  <ul className="mob-action nav nav-fill d-sm-block d-lg-none">
    <li className="nav-item" onclick="javascript:location.href='tel: +91 74288 96609'"><span className="mi mi-call action-icon" /> Call</li>
    <li className="nav-item enqModal" data-form="lg" data-title="Mail me pricing details" data-btn="Send now" data-enquiry="Enquire Now" data-redirect="enquiry" data-toggle="modal" data-target="#enqModal"><span className="mi mi-enquire action-icon" /> Enquire</li>
    <li className="nav-item" onclick="window.open('https://api.whatsapp.com/send?phone=918527602954&text=Hi!%20I\'m%20Interested%20In%20Lodha%20Woods%20Please%20Share%20Details.', '_blank');"><span className="mi mi-whatsapp action-icon"><span className="path1" /><span className="path2" /><span className="path3" /></span> WhatsApp</li>
  </ul>
  <div className="modal fade" id="enqModal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered enq-modal" role="document">
      <div className="modal-content">
        <div className="modal-body text-center"> <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
          <div className="modal-head d-none"><span className="modal-title">Title</span></div>
          <div className="d-flex">
            <div className="flex-fill align-self-center flex-shrink-1 modal-highlight-bg d-none d-lg-block"> <span className="modal-highlight-title">We Promise</span>
              <ul className="modal-highlight">
                <li><i className="mi mi-support-call" /><span>Instant Call Back</span></li>
                <li><i className="mi mi-support-visit" /><span>Free Site Visit</span></li>
                <li><i className="mi mi-support-price" /><span>Unmatched Price</span></li>
              </ul>
            </div>
            <div className="flex-fill align-self-center"> <img src="assets/media/developer/1640783210_logo_(2).jpg" className="modal-logo" /> <span className="modal-title-secondary">Register here and Avail the <span className="text-danger">Best Offers!!</span></span>
              <div id="suc_fm_msg_12">
                <form className="form-modal">
                  <div className="form-group"> 
                    <input type="text" pattern="[a-zA-Z ]+" className="form-control rounded-0 micro-form-field" required placeholder="Name" name="user_name_12" id="user_name_12" /> 
                    <span id="user_name_12_error" />
                  </div>
                  <div className="form-group form_number"> 
                    <select id="country_code" onchange="set_country_code(this.value);return false;"><option selected="selected" value={91} data-id={99}>+91 (IND)</option><option value={971} data-id={224}>+971 (UAE)</option><option value={44} data-id={225}>+44 (UK)</option><option value={1} data-id={226}>+1 (USA)</option></select>                                              <input type="tel" pattern="[0-9]+" className="intTelInput form-control rounded-0 micro-form-field" required placeholder="Mobile No" id="user_mobile_12" name="user_mobile_12" /> 
                    <span id="user_mobile_12_error" />
                  </div>
                  <div className="form-group form-md"> 
                    <input type="email" className="form-control rounded-0 micro-form-field" required placeholder="E-Mail Address" name="user_email_12" id="user_email_12" /> 
                    <span id="user_email_12_error" />
                  </div>
                  <button type="button" name="enq_formBtn" className="btn btn-info micro-form-btn effetGradient effectScale" onclick="complete_enquiry_form_with_thanks('user_name_12','user_email_12','user_mobile_12','suc_fm_msg_1','>Get_Instant_Call_Back');return false;">Get Instant Call Back</button> 
                </form>
              </div> 
            </div> </div> <a href="tel:+91 74288 96609" className="modal-call-btn"><i className="mi mi-call">
            </i> +91 74288 96609</a> 
        </div> 
      </div> 
    </div> 
  </div>
  <div className="loading" style={{ height: '0',
    width: '0',
    padding:' 4vw',
    border: '.8vw solid #ccc',
    borderrightcolor: '#888',
    borderradius:' 6vw',
    webkitanimation:' rotate 1s infinite linear',display: 'none'}}>Loading…</div>
</main>

</div>
</div>
  );
}

export default App;

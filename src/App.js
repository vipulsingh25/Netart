import './App.css';
import Logo from './asserts/logo.png';
import Award from './asserts/1.png';
import GroupImg from './asserts/2.png';
import InstruImg from './asserts/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
    <div>
      <div class="header">
        <div class="logo"><img alt="" src={Logo}></img></div>
      </div>
      <div class="mid_section1">
        <div class="award_img"><img alt="" src={Award}></img></div>
        <div class="content">
          <p id="content_head">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <img alt="" src={GroupImg}></img>
          <p>Government of India has awarded the <span id="highlight">"National Energy Conservation Award 2018" </span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div class="mid_section2">
        <div class="instru_head"><p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p></div>
        <div class="instru_img"><img alt="" src={InstruImg}></img></div>
        <div class="instru_name"><p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p></div>
      </div>
      


      <div class="mid_section3">
        <div class="sec_head"><h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5></div>
        <div class="sec_list"><p>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p></div>
      </div>


      <div class="footer">
        <div class="social_icon"><FontAwesomeIcon icon={faPhone} /><div><p>Toll free <span id="footer_bold">1800 200 1234</span></p></div></div>
        <div class="social_icon"><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}} /><div><a href='www.facebook.com/cripumps'>www.facebook.com/cripumps</a></div></div>
        <div class="social_icon"><FontAwesomeIcon icon={faGlobe} /><div><a href='www.crigroups.com'>www.crigroups.com</a></div></div>
      </div>
    </div>
    </>
  );
}

export default App;

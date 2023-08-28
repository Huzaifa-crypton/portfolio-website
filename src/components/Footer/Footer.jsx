import React, { useState , useEffect } from 'react';
import "./Footer.css";
import { FaFacebook,FaGithub ,FaLinkedin,FaInstagram,FaMedium} from "react-icons/fa";
const Footer = () => {
 const [date,setDate] = useState();
  useEffect(() => {  
    let date = new Date();
    setDate(date.getFullYear());
  }, [])
  
  return (
    <footer>
      <div className="footerIcons">
        <a href='https://wwww.facebook.com/muhammadhuzaaifa.khan'>
        <FaFacebook className='socialIcons' ></FaFacebook>
        </a>
        <a href='https://github.com/Huzaifa-crypton'>
        <FaGithub className='socialIcons' ></FaGithub>
        </a>
        <a href='https://www.linkedin.com/in/huzaifa-khan-ab961b228/'>
        <FaLinkedin className='socialIcons' ></FaLinkedin>
        </a>
        <a href='https://www.instagram.com/huzaifahaha/'>
        <FaInstagram className='socialIcons' href=''></FaInstagram>
        </a>
        
        <a href='https://medium.com/@huzaifa_khan'>
        <FaMedium className='socialIcons' href=''></FaMedium>
        </a>

      </div>
      <h3>Copyright &copy; {date} Muhammad Huzaifa Khan </h3>
    </footer>

  )
}

export default Footer
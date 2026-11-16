import React from 'react'
import { Contact } from './index';
import { AboutImg } from '../assets';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ContactPage = (props) => {
  const { language } = props;
  const { t } = useTranslation();

  return (
    <div className='flex flex-col'>
        {/* First Section */}
        <div className='flex flex-row justify-between sm:px-5 md:px-10 lg:px-28 py-10 items-center' animateIn='fadeInLeft'>
          <div className='flex flex-col gap-3'>
              <p className='font-bold text-4xl text-[#002856]'>{t("onlineReservation")}</p>
              <p className='font-medium text-[#002856]'><Link to="/">{t("home")}</Link> - <span className='text-[#00ACB1]'>{t("onlineReservation")}</span></p>
          </div>
          <img src={AboutImg} alt="About Img" className='sm:w-24 md:w-36 lg:w-40'/>
        </div>
        {/* Contact Section */}
        <Contact language={language}/>
    </div>
  )
}

export default ContactPage
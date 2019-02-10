import React from 'react';
import styles from './Sidebar.module.css';
import logoImage from '../../assets/GiantRobotLTD_Logo.svg';

const sidebar = props => {
  var container = window.isMobile ? styles.mobileContainer : styles.webContainer;
  var contentContainer = window.isMobile ? styles.mobileContentContainer : styles.webContentContainer;

  return (
    <div className={container}>
      <div className={contentContainer}>
        <img className={styles.logo} src={logoImage} alt='logo' />
        <div className='mt4'>
          <div className={styles.headingText}>
            Welcome
          </div>
          <div className={styles.greetingText}>
            Please tell us a bit about yourself to get started.
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar;
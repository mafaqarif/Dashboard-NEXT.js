import React from "react";
import styles from "../../../styles/settings/setting.module.css";
import SettingProfile from "../../../components/setting/SettingProfile";

const page = () => {
  return (
    <div className={styles.mainSettings}>
      <div>
        <ul className={styles.settingNav}>
          <li className={styles.selectedSetting}>Edit Profile</li>
          <li>Preferences</li>
          <li>Security</li>
        </ul>
        <hr className={styles.settingNavHr} />
      </div>
      <SettingProfile />
    </div>
  );
};

export default page;

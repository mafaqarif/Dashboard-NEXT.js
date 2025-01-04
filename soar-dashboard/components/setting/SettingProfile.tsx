import Image from "next/image";
import styles from "../../styles/settings/settingProfile.module.css";
import { FaPencilAlt } from "react-icons/fa";
import SettingForm from "./SettingForm";

const SettingProfile = () => {
  return (
    <div className={styles.profileMain}>
      <div className={styles.profilePictureSection}>
        <Image
          src="/profile-settings.png"
          alt="setting profile picture"
          width={90}
          height={90}
        />
        <span className={styles.editButtonSpan}>
          <FaPencilAlt className={styles.profileEditButton} />
        </span>
      </div>
      <div className={styles.profileForm}>
        <SettingForm />
      </div>
    </div>
  );
};

export default SettingProfile;

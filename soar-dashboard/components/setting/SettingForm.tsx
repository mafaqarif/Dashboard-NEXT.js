import styles from "../../styles/settings/settingForm.module.css";

const SettingForm = () => {
  return (
    <>
      <div className={styles.settingsFromMain}>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Your Name</label>
          <input className={styles.input} type="text" placeholder="John Doe" />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>User Name</label>
          <input className={styles.input} type="text" placeholder="John Doe" />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="JohnDoe@example.com"
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="John Doe"
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Date of Birth</label>
          <input className={styles.input} type="date" placeholder="John Doe" />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Present Address</label>
          <input
            className={styles.input}
            type="text"
            placeholder="San Jose, California, USA"
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Permanent Address</label>
          <input
            className={styles.input}
            type="text"
            placeholder="San Jose, California, USA"
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>City</label>
          <input className={styles.input} type="text" placeholder="San Jose" />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Postal Code</label>
          <input className={styles.input} type="text" placeholder="32255" />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Country</label>
          <input className={styles.input} type="text" placeholder="USA" />
        </div>
      </div>
      <div className={styles.formSave}>
        <button className={styles.submitBtn}>Save</button>
      </div>
    </>
  );
};

export default SettingForm;

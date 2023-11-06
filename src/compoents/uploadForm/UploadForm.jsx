import React, { useState } from "react";
import styles from "./UploadForm.module.css";
import UseStorage from "../hooks/UseStorage";
import SyncLoader from "react-spinners/SyncLoader";
function UploadForm({ setImageList }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("Add image");
  const [spinner, setSpinner] = useState(false);

  //validating the file format
  const types = ["image/png", "image/jpeg", "image/webp"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(false);
      setSpinner(true);
    } else {
      setFile(null);
      setError("Wrong file");
    }
  };

  if (file) {
    UseStorage(file, setImageList, setSpinner);
    setFile(null);
  }
  return (
    <>
      <input
        type='file'
        id='file-input'
        className={`${styles.fileinput} ${styles.box}`}
        name='file-input'
        onChange={changeHandler}
      />
      <label className={styles.fileinputlabel} htmlFor='file-input'>
        {spinner ? (
          <SyncLoader color='#36d7b7' />
        ) : (
          <>
            <img src='images/image.png' alt='' />
            <div>{error ? error : "Add image"}</div>
          </>
        )}
      </label>
    </>
  );
}

export default UploadForm;

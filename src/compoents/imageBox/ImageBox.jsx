import React from "react";
import styles from "./ImageBox.module.css";

//for drag and drop
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ImageBox({ url, handleChange }) {
  //for drag and drop
  const { attributes, listeners, setNodeRef, transform, transition, isSorting } =
    useSortable({ id: url });

  const style = {
    // transform: CSS.Transform.toString(transform),
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div
      className={styles.box}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <input
        className={styles.tick}
        type='checkbox'
        name=''
        id={url}
        onChange={(url) => {
          handleChange(url);
        }}
        key={`${url} {'0'}`}
      />
      <div className={styles.innerBox}>
        <label htmlFor='url' key={`${url} {'1'}`}>
          <div key={`${url} {'2'}`}>
            <img src={url} alt='' />
          </div>
        </label>
      </div>
    </div>
  );
}

export default ImageBox;

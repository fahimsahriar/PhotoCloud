import React from "react";
import styles from "./gallery.module.css";
import UploadForm from "../uploadForm/UploadForm";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { projectStorage } from "../../firebase/config";
import ImageBox from "../imageBox/ImageBox";
import DeleteImage from "../delete/DeleteImage";
import Help from "../help/Help";
import SyncLoader from "react-spinners/SyncLoader";

//for drag and drop
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

function Gallery() {
  const [imageList, setImageList] = useState([]);
  const [deleteList, setdeleteList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  //creating reference of firebase storage
  const listRef = ref(projectStorage, "/");
  async function listAllImages() {
    const res = await listAll(listRef);
    // res.prefixes.forEach((folderRef) => { });

    const requests = res.items.map((itemRef) => getDownloadURL(itemRef));
    const urls = await Promise.all(requests);

    urls.forEach((url) => {
      setImageList((prev) => [...prev, url]);
    });
  }
  // getting all the image stored on firebase
  useEffect(() => {
    setisLoading(true);
    setImageList([]);
    listAllImages()
      .then(() => {
        setisLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  //upload form's function
  const handleChange = (data) => {
    if (data.target.checked) {
      setdeleteList((prev) => [...prev, data.target.id]);
    } else {
      setdeleteList((current) =>
        current.filter((prev) => {
          // removeing the image which is marked as unselectd
          return prev !== data.target.id;
        })
      );
    }
  };
  //delete button's function
  const handleDelete = () => {
    DeleteImage(deleteList, setImageList, setdeleteList);
  };

  //starting here for drag and drop
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setImageList((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
  return (
    <>
      <div className={styles.heading}>
        <h3>
          {deleteList.length == 0
            ? "PhotoCloud"
            : `${deleteList.length} selected`}
        </h3>
        <p onClick={handleDelete}>{deleteList.length == 0 ? "" : "Delete"}</p>
      </div>
      {isLoading ? (
        <div className={styles.placeholder}>
          <SyncLoader color='#36d7b7' />
        </div>
      ) : (
        <div className={styles.container}>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={imageList} strategy={rectSortingStrategy}>
              {imageList.map((url) => {
                return (
                  <ImageBox key={url} url={url} handleChange={handleChange} />
                );
              })}
            </SortableContext>
          </DndContext>
          <div className={styles.last}>
            <UploadForm setImageList={setImageList} />
          </div>
        </div>
      )}
      <Help />
    </>
  );
}

export default Gallery;

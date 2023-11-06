import { getStorage, ref, deleteObject } from "firebase/storage";

const DeleteImage = (deleteList, setImageList, setdeleteList) => {
  const storage = getStorage();

  // deleting from front end
  deleteList.forEach((element) =>{
    setImageList(current =>
      current.filter(prev => {
        // removeing the image which is marked as unselectd
        return prev !== element;
      }),
    );
  });
  
  let clonedeleteList = deleteList;
  setdeleteList([]);
  //deleting from backend
  clonedeleteList.forEach((element) => {
    // Create a reference to the file to delete
    const desertRef1 = ref(storage, element);

    console.log(desertRef1.name);
    const desertRef = ref(storage, desertRef1.name);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        console.log("deleted!!");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
  });
};

export default DeleteImage;

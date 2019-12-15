import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
import { insertPlace } from "../helpers/db";

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        "Dummy Address",
        12.3,
        14.8
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: { id: dbResult.insertId, title: title, image: newPath }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

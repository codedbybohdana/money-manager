import { db } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./imageService";

export const updateUser = async (
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> => {
  try {
    if (updatedData.image && updatedData?.image?.uri) {
      const imageUploadResponse = await uploadFileToCloudinary(
        updatedData.image,
        "users"
      );

      if (!imageUploadResponse.success) {
        return {
          success: false,
          msg: imageUploadResponse.msg || "Failed to upload image",
        };
      }

      updatedData.image = imageUploadResponse.data;
    }

    // Створюється посилання на документ користувача у Firestore
    const userRef = doc(db, "users", uid);

    // Оновлюються дані користувача у базі
    await updateDoc(userRef, updatedData);

    // Fetch the updated user data Отримуються оновлені дані користувача
    const updatedUserDoc = await getDoc(userRef);

    return {
      success: true,
      msg: "Updated successfully",
    };

    if (updatedUserDoc.exists()) {
      return {
        success: true,
        data: updatedUserDoc.data(),
      };
    } else {
      return {
        success: false,
        msg: "User not found",
      };
    }
  } catch (error: any) {
    console.error("Error updating user:", error);
    return {
      success: false,
      msg: error.message,
    };
  }
};

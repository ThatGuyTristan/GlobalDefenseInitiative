import firebase from "firebase/compat/app"
import "firebase/compat/database"

export const db = firebase
  .initializeApp({ databaseURL: "https://globaldefenseinitiative-154c8-default-rtdb.firebaseio.com"})
  .database()
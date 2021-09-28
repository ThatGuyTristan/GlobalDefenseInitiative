import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());

function readDatabase(name='feedback/') { 
  console.log("inside the function");
  get(child(dbRef, name))
    .then((snapshot) => {
      console.log("in the then", snapshot)
      if(snapshot.exists()){
        console.log("SNAPSHOT", snapshot.val())
        return snapshot.val();
      } else {
        console.log("no snapshot")
      }
    }).catch((error) => {
      console.log(error)
    })
}

// const dbRef = ref(getDatabase());
// function accessDb(name){
//   console.log("inside accessDb");
//   get(child(dbRef, name)).then((resp) => {
//     if(resp){
//       return resp
//     } else {
//       console.log("No response found")
//     }
//   })
// }

export default readDatabase;

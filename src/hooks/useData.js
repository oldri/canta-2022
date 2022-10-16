import { projectFirestore } from "../firebase/config";
import { useEffect, useState } from "react";

export default function useData(data){
    const [ newData, setNewData ]  = useState([{ null: null}]);

    useEffect(() => {
        projectFirestore.collection(data)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let document = doc.data();
                let data = newData;
                data.push(document);
                setNewData(data);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    },[])

    return [ newData ];
}
import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

export default function useData(data){
    const [ newData, setNewData ]  = useState(null);
    const docRef = projectFirestore.collection(data).doc(data);
    
    useEffect(() => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                setNewData(doc.data().homepage)
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [docRef])

    return [ newData ];
}
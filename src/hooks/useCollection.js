import { useEffect, useState } from 'react';
import { projectStorage } from '../firebase/config'

export default function useCollection(collection) {
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
      const getImages = () => {
        let listRef = projectStorage.ref().child(collection);
        listRef.listAll().then((result) => {
            const promises = [];
            result.items.forEach((imageRef) => { 
            promises.push(imageRef.getDownloadURL());
            });
            return Promise.all(promises);
        })
        .then(urlsArray => {
          setAllImages(urlsArray);
        });
      }
      getImages();
    },[collection]);
    return [ allImages ];
}


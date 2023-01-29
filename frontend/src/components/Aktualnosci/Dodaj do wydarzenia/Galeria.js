import { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../../sass/components/gallery.css";

const Galeria = (props) => {
  // when render use function to get images
  useEffect(() => {
    getFiles();
  }, []);

  // states for storing images for gallery and loading state and errors
  const [file, setFile] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [errors, setErrors] = useState();
  const [gallery, setGellery] = useState([]);

  useEffect(() => {
    const Photos = [];
    file.map((download) => {
      if (download.wydarzenie === parseInt(props.wydarzenie)) {
        Photos.push({
          original: download.image,
          thumbnail: download.image,
        });
      }
      setGellery(Photos);
    });
  }, [file]);

  useEffect(()=>{
    getFiles()
  }, [props.addedImage])

  // function fetching photos to gallery from backend
  function getFiles() {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "/api/photos/",
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setFile(data);
      })
      .catch((error) => {
        setErrors(error);
      });
  }

  return <>{gallery.length > 0 && <ImageGallery items={gallery} />}</>;
};

export default Galeria;

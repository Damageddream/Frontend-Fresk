import axios from "axios";
import {
    MDBIcon,
  } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const DeleteImage = (props) => {

    // redirecting after delete
    let navigate = useNavigate();

    // state for handling loading
    const [isLoading, setIsLoading] = useState(false);

    //deleting props file from database
    const deleteHandler = () => {
        setIsLoading(true);
        axios({
            method: 'DELETE',
            url: `/api/photos/${props.image}/`,
        })
        setIsLoading(false);
    }

    return(
        <>
            <MDBIcon onClick={deleteHandler} style={{ cursor: 'pointer' }} fas icon="trash" />
        </>
    )
}

export default DeleteImage;
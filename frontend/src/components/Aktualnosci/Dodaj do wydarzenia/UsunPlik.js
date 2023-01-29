import axios from "axios";
import {
    MDBIcon,
} from "mdb-react-ui-kit";
import { useState, useEffect } from 'react';



const DeleteFile = (props) => {

    // state for handling loading
    const [isLoading, setIsLoading] = useState(false);


    //deleting props file from database
    const deleteHandler = () => {
        setIsLoading(true);
        axios({
            method: 'DELETE',
            url: `/api/files/${props.file}/`,
        }).then(() => {
            props.getFiles()
            setIsLoading(false)
    })

    }

    return (
        <>
            <MDBIcon fas icon="trash" style={{ cursor: 'pointer' }} onClick={deleteHandler} />
        </>
    )
}

export default DeleteFile;
import React from 'react';
import { useParams } from 'react-router-dom';

function DeleteStock() {
    let {ticker}=useParams()
    return (
        <div>
            this is delete {ticker}
        </div>
    );
}

export default DeleteStock;
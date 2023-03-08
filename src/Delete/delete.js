import React from 'react';
import axios from 'axios';
import { useState} from 'react';
// import signup from '.login/signup';
function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/hi/del?id=' + id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <>
            
        <div className='control_block'> 
        <center>
            <h2>Delete User</h2>
            <div>

                <input type="number" placeholder='Enter ID Number' className="formStyle" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>

            <button type="submit" class="btn btn-primary bttt" onClick
                ={del}>Submit</button>
                </center>
           
            <h2>
                {error}
            </h2>
            <div className='F'>

            </div>
            </div> 
        </>
    );
}

export default Deleteform;
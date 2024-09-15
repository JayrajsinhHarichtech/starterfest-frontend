import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Cms = () => {
    // State to store time remaining
    const { id } = useParams();
    useEffect(() => {
        fetchData()
    }, [id])

    const [content, setContent] = useState('')

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/startup-cms/get-content/${id}`)
            console.log(res)
            if (res.status === 200) {
                setContent(res.data)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleClick = async () => {
        console.log("ggg", id)
        try{
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/update-vote/StartUpDetailsMaster/${id}`)
            console.log("ppop",res)
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="container">
            {content &&
                (
                    <div>
                        {React.createElement('div', { dangerouslySetInnerHTML: { __html: content.Content } })}

                        {/* {content.Content} */}
                    </div>
                )}

            <div className="text-center m-2 bg-light p-2" >
                <button className="btn btn-lg vote-btn" onClick={handleClick} >VOTE NOW</button>
            </div>

        </div>

    )

}

export default Cms

import React,{useState} from "react";
import { Modal,ModalHeader,ModalBody } from "reactstrap";

const UserName = () =>{
    const [uname,setUname] = useState(false)
    const updateUname = () =>{
        setUname(true);
    }
    return(
        <div className="user-btn">
            <Modal
            className="modal-btn"
            isOpen={uname}
            toggle={()=>setUname(!uname)}
            >
                <ModalHeader
                className="hmodal-btn"
                 toggle={()=>setUname(!uname)}>
                    Add User
                </ModalHeader>
                <ModalBody className="mbody-btn">
                    <form>
                        <div>
                            <label>User First name</label>
                            <input type="text" placeholder="Enter first name"/>
                        </div>
                        <div>
                            <label>User Last name</label>
                            <input type="text" placeholder="Enter first name"/>
                        </div>
                        <div>
                            <label>User Email Add.</label>
                            <input type="text" placeholder="Enter email"/>
                        </div>
                        <div>
                            <label>User Mobile No.</label>
                            <input type="text" placeholder="Enter mobile number"/>
                        </div>
                        <div>
                            <label>User Home Add.</label>
                            <input type="text" placeholder="Enter home address"/>
                        </div>
                        <div>
                            <input type="checkbox" id="T/C"/>
                            <label>Accept terms and conditions</label>
                        </div>
                        <div >
                            <button className="submit-btn" type="submit">Submit</button>
                        </div>
                    </form>
                
                </ModalBody>
            </Modal>
            <h2>Static User list</h2>
            <p>Click on below button for add user </p>
            <button onClick={updateUname} className="add-btn">Add User</button>
        </div>
    )
}
export default UserName;
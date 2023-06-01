import Modal from "react-modal/lib/components/Modal";
import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function AddNewTransaction() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="">
            <button className="btn btn-success" onClick={openModal}>
                <AddIcon />
            </button>

            <Modal isOpen={modalOpen}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Farm Transaction</h5>

                        <button onClick={closeModal} className="btn">
                            <CloseIcon className='text-danger'/>
                        </button>
                    </div>

                    <div className="modal-body">
                        <select className="form-select mt-3 mb-4">
                            <option selected value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>

                        <div className="form-floating m-4">
                            <input type='text' className="form-control text-end" id="floatingInput" placeholder="Enter amount $"/>

                            <label for="floatingInput">Enter amount ($)</label>
                        </div>

                    </div>
                    
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" className="btn btn-success">Add</button>
                    </div>
                </div>    
            </Modal>
        </div>
    );
}

export default AddNewTransaction;
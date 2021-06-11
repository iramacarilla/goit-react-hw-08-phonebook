import React, { useState } from "react";
import { connect } from "react-redux";
import { updateContactOperation } from "../../redux/contacts/contactsOperation";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import Modal from "../modal/Modal";
import styles from "./FormEdit.module.css";

const initialState = {
  name: "",
  phone: "",
};
const FormEdit = ({
  setFormEditOpen,
  onUpdate,
  user = { ...initialState },
}) => {
  const [state, setState] = useState({ ...user });
  const onHandelChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onClose = (e) => {
    e.preventDefault();
    setFormEditOpen(false);
    const id = e.target.dataset.id;
    //console.log(state);
    onUpdate(state);
  };
  const onCloseModal = () => {
    setFormEditOpen(false);
  };
  return (
    <Modal closeModal={onCloseModal}>
      <form onSubmit={onClose} className={styles.editWraper}>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Name"
          onChange={onHandelChange}
        />
        <input
          type="tel"
          name="number"
          value={state.number}
          placeholder="Number"
          onChange={onHandelChange}
        />
        <button type="submit" /*type="button"*/ onClick={onClose}>
          Save
        </button>
      </form>
    </Modal>
  );
};
//export default FormEdit;
const mapPropsToState = (state) => ({
  items: contactsSelectors.getItems(state),
});
const mapDispatchToState = {
  onUpdate: updateContactOperation,
};
export default connect(mapPropsToState, mapDispatchToState)(FormEdit);

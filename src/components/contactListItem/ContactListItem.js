import React from "react";
import trash from "../../access/trash.svg";
import edit from "../../access/edit.svg";

const ContactListItem = ({
  idx,
  number,
  name,
  id,
  onDelete,
  setFormEditOpen,
}) => {
  return (
    <li>
      <div className="contact">
        <p>
          {idx + 1}. {name}
        </p>
        <p> {number}</p>
      </div>
      <button className="deleteBtn" type="button" onClick={onDelete}>
        <img src={trash} data-id={id} alt="Delete" />
      </button>
      <button type="button" onClick={setFormEditOpen}>
        <img src={edit} data-id={id} alt="edit" width="20px" />
      </button>
    </li>
  );
};

export default ContactListItem;

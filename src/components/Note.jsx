import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Tooltip title="Delete">
      <button onClick={handleClick}><DeleteIcon/></button>
    </Tooltip>
     
    </div>
  );
}

export default Note;

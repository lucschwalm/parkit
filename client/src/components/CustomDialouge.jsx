import React from 'react';

const CustomDialog = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="custom-dialog">
      <div className="dialog-content">
        <h2>Login Required</h2>
        <p>You need to be signed in to add a favorite park.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default CustomDialog;

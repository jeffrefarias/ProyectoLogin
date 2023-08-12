import React from 'react';

function Alert({ message, type }) {
  if (!message) {
    return null;
  }

  const alertClass = `alert alert-${type}`;

  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
}

export default Alert;
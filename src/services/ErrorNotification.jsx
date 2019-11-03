import React from "react";

const ErrorNotification = ({ text }) => {
  return (
    <div>
      <p>Oops, something went wrong: {text}</p>
    </div>
  );
};

export default ErrorNotification;

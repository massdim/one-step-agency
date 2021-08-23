import React from "react";
import Swal from "sweetalert2";

const MessageSuccess = (title, text) => {
  return Swal.fire({
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};

const MessageError = (title, text) => {
  return Swal.fire({
    icon: "error",
    title,
    text,
  });
};

export { MessageSuccess, MessageError };

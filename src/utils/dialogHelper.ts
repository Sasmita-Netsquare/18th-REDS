import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const dialogHelper = {
  error: (error: unknown, title = "Error") => {
    const errorMessage =
      typeof error === "string"
        ? error
        : error instanceof Error
        ? error.message
        : "Something went wrong";

    return Swal.fire({
      title,
      text: errorMessage,
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#d33",
    });
  },

  success: (message: string, title = "Success") => {
    return Swal.fire({
      title,
      text: message,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#28a745",
    });
  },

  warning: (message: string, title = "Warning") => {
    return Swal.fire({
      title,
      text: message,
      icon: "warning",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc107",
    });
  },

  confirm: (
    message: string,
    title = "Confirm",
    confirmButtonText = "Yes",
    cancelButtonText = "No"
  ) => {
    return Swal.fire({
      title,
      text: message,
      icon: "question",
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      return result.isConfirmed;
    });
  },

  confirmDelete: (
    message = "Are you sure you want to delete this item?",
    title = "Delete Confirmation"
  ) => {
    return Swal.fire({
      title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      return result.isConfirmed;
    });
  },

  form: (
    inputs: Array<{
      id: string;
      label: string;
      type: string;
      placeholder?: string;
      value?: string;
    }>,
    title = "Enter Information"
  ) => {
    const html = inputs
      .map(
        (input) => `
      <div class="swal2-input-group" style="margin-bottom: 15px;">
        <label for="${
          input.id
        }" style="display: block; text-align: left; margin-bottom: 5px;">${
          input.label
        }</label>
        <input 
          id="${input.id}" 
          type="${input.type}" 
          class="swal2-input" 
          placeholder="${input.placeholder || ""}" 
          value="${input.value || ""}"
          style="width: 100%;"
        />
      </div>
    `
      )
      .join("");

    return Swal.fire({
      title,
      html,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Submit",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const values: Record<string, string> = {};
        inputs.forEach((input) => {
          const inputElement = document.getElementById(
            input.id
          ) as HTMLInputElement;
          values[input.id] = inputElement.value;
        });
        return values;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        return result.value;
      }
      return null;
    });
  },

  closeAll: () => {
    Swal.close();
  },
};

export default dialogHelper;

import { toast } from "react-toastify";

export default function errorHelper(error: unknown) {
  const errorMessage =
    typeof error === "string" ? error : "Something went wrong";

  return toast.error(errorMessage);
}

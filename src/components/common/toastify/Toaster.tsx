// import useTheme from "../../../lib/client/hooks/useTheme";
import { Container } from "./Toast.styles";

import "react-toastify/dist/ReactToastify.css";

export default function Toaster() {
  return (
    <Container
      position="bottom-center"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      closeButton={false}
    />
  );
}

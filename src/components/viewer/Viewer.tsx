import { Viewer as ToastViewer, ViewerProps } from "@toast-ui/react-editor";

const Viewer = ({ ...rest }: ViewerProps) => {
  return <ToastViewer {...rest} />;
};

export default Viewer;

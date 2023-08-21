import {Alert} from "react-bootstrap"

export const AlertSuccess = ({ text}) => {
  return (
    <>
      <Alert key="success" variant="success">
        {text}
       
      </Alert>
    </>
  );
};

export const AlertCancel=({text})=>{
  return (
    <>
      <Alert key="error" variant="error">
       {text}
      </Alert>
    </>
  );
}

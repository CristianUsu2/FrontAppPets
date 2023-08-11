export const AlertSuccess = () => {
  return (
    <>
      <Alert key={variant} variant="success">
        Se ejecuto una operacion
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
    </>
  );
};

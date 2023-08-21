"use client";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetAllCuido } from "@/services/CuidoServices";
import { AlertCancel, AlertSuccess } from "@/components/Alerts";
import Link from "next/link";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreatePetS } from "@/services/PetsServices.js";
import { useRouter } from "next/navigation";

export default function CrearMascota() {
  const [cuido, setCuido] = useState("");
  const router = useRouter()
  const [images, setImages] = useState("");
  //const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    GetAllCuido()
      .then((data) => {
        console.log(data, "response");
        setCuido(data);
      })
      .catch((error) => AlertCancel("Error en carga de cuidos", error));
  }, []);
/*
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result;
        ArrayImages.push(base64Data);
        setBase64Image(ArrayImages);
      };

      reader.readAsDataURL(selectedImage);
    }
  };
*/
 
  const OperacionExitosa=()=>{
    console.log("llamda operacione exitosa funcion")
    return(
     <>
       <AlertSuccess text="Operacion exitosa" />
     
     </>

    )
  }

  const CreatePetF = (values) => {
    values.IdUsuario = 1;
    values.Fotos=images
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    CreatePetS(values, config)
      .then((result) =>{
        OperacionExitosa()
        router.push("/")})
      .catch((error) => <AlertCancel text={error} />);
  };

  const ValidationSchema = Yup.object().shape({
    Nombre: Yup.string().required("*Campo es requerido"),
    Edad: Yup.string().required("*Campo es requerido"),
    Tipo: Yup.string().required("*Campo es requerido"),
    Color: Yup.string().required("*Campo es requerido"),
    Peso: Yup.string().required("*Campo es requerido"),
    Raza: Yup.string().required("*Campo es requerido"),
    TipoPelaje: Yup.string().required("*Campo es requerido"),
    Vacunas: Yup.string().required("*Campo es requerido"),
    Fotos: Yup.mixed().required("*Campo es requerido"),
    IdCuido: Yup.string().required("*Campo es requerido"),
  });

  return (
    <>
      <Container>
        <Col className="mt-4 shadow p-3 mb-5 bg-white rounded">
          <Formik
            initialValues={{
              Nombre: "",
              Edad: "",
              Tipo: "",
              Color: "",
              Peso: "",
              Raza: "",
              TipoPelaje: "",
              Vacunas: "",
              IdCuido: "",
              Fotos: [],
            }}
            onSubmit={(values) => CreatePetF(values)}
            validationSchema={ValidationSchema}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <h1 className="text-center mt-2 mb-4">Agregar Mascota</h1>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Nombre</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="Cielo"
                        name="Nombre"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Nombre}
                      />
                      <ErrorMessage
                        name="Nombre"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Edad</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="8"
                        name="Edad"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Edad}
                      />

                      <ErrorMessage
                        name="Edad"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Tipo</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="Gato"
                        name="Tipo"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Tipo}
                      />
                      <ErrorMessage
                        name="Tipo"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Color</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="Negro"
                        name="Color"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Color}
                      />
                      <ErrorMessage
                        name="Color"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Peso</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="5kg"
                        name="Peso"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Peso}
                      />

                      <ErrorMessage
                        name="Peso"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Raza</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="Criollo"
                        name="Raza"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Raza}
                      />
                      <ErrorMessage
                        name="Raza"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Tipo pelaje</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="lizo"
                        name="TipoPelaje"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.TipoPelaje}
                      />
                      <ErrorMessage
                        name="TipoPelaje"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Cuido</h5>
                      </Form.Label>
                      <Form.Select
                        name="IdCuido"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.IdCuido}
                      >
                        <option value="">Seleccione cuido</option>
                        {cuido.length != 0
                          ? cuido.map((e) => (
                              <option key={e.IdCuido} value={e.IdCuido}>
                                {e.Nombre}
                              </option>
                            ))
                          : null}
                      </Form.Select>
                      <ErrorMessage
                        name="IdCuido"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col
                    lg={10}
                    md={10}
                    sm={10}
                    xs={10}
                    className="mt-2 mb-2  align-items-center justify-content-center"
                  >
                    <Form.Group>
                      <Form.Label>
                        <h5>Vacunas</h5>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Las vacunas que tiene la mascota"
                        style={{ height: "100px" }}
                        name="Vacunas"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Vacunas}
                      />

                      <ErrorMessage
                        name="Vacunas"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col
                    lg={6}
                    md={6}
                    sm={10}
                    xs={10}
                    className="mt-2 mb-2  align-items-center justify-content-center"
                  >
                    <Form.Group>
                      <Form.Label>
                        <h5>Adjuntar Fotos</h5>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="Fotos"
                        onBlur={handleBlur}
                        onChange={(e)=>{setImages(e.target.files)}}
                        multiple
                        accept="image/*"
                        
                      />
                    </Form.Group>
                    <ErrorMessage
                      name="Fotos"
                      component="div"
                      className="text-danger"
                    />
                  </Col>

                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Col lg={12} md={12} sm={12} xs={12} className="mt-3 mb-3">
                      <Link href="/">
                        <Button
                          variant="danger"
                          type="button"
                          className="mr-3"
                          style={{ marginRight: "5px" }}
                        >
                          Cancelar
                        </Button>
                      </Link>

                      <Button variant="success" className="ml-3" type="submit">
                        Guardar
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Container>
    </>
  );
}

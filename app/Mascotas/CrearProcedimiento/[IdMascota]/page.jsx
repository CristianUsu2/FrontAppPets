"use client";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import { AlertCancel, AlertSuccess } from "@/components/Alerts";
import Link from "next/link";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreatePetS } from "@/services/PetsServices.js";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CrearProcedimiento({ params }) {
  const [medicos, setMedicos] = useState("");
  const router = useRouter();
  const [images, setImages] = useState("");

  const ObtenerMedicos = async () => {
    const request = await axios.get(
      process.env.NEXT_PUBLIC_SERVER + "ObtenerMedicos"
    );
    const data = await request.data;
    setMedicos(data);
  };
  //const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    ObtenerMedicos();
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

  const OperacionExitosa = () => {
    console.log("llamda operacione exitosa funcion");
    return (
      <>
        <AlertSuccess text="Operacion exitosa" />
      </>
    );
  };

  const CrearProcedimientoServer = async (object, config) => {
    try {
      const request = await axios.post(
        process.env.NEXT_PUBLIC_SERVER + "CrearProcedimiento",
        object,
        config
      );
      const data = await request.data;
      return true;
    } catch (error) {
      return error;
    }
  };

  const CrearProcedimientoSalud = async(values) => {
    values.ArchivoProcedimiento = images;
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    console.log("values", values)
    const res=await CrearProcedimientoServer(values, config);
    if(res == true){
      router.back()
    }
  };

  const ValidationSchema = Yup.object().shape({
    Nombre: Yup.string().required("*Campo es requerido"),
    PesoMascota: Yup.string().required("*Campo es requerido"),
    Observaciones: Yup.string().required("*Campo es requerido"),
    MedicoIdMedico: Yup.string().required("*Campo es requerido"),
    ArchivoProcedimiento: Yup.mixed().required("*Campo es requerido"),
    MascotaIdMascota: Yup.string().required("*Campo es requerido"),
  });
  return (
    <>
      <Container>
        <Col className="mt-4 shadow p-3 mb-5 bg-white rounded">
          <Formik
            initialValues={{
              Nombre: "",
              ArchivoProcedimiento: "",
              PesoMascota: "",
              Observaciones: "",
              MascotaIdMascota: params.IdMascota,
              MedicoIdMedico: "",
            }}
            onSubmit={(values) => CrearProcedimientoSalud(values)}
            validationSchema={ValidationSchema}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <h1 className="text-center mt-2 mb-4">
                  Agregar procedimiento de salud
                </h1>
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
                        name="PesoMascota"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Edad}
                      />

                      <ErrorMessage
                        name="PesoMascota"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Observaciones</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="Observaciones"
                        name="Observaciones"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Tipo}
                      />
                      <ErrorMessage
                        name="Observaciones"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Medicos</h5>
                      </Form.Label>
                      <Form.Select
                        name="MedicoIdMedico"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.IdMedico}
                      >
                        <option value="">Seleccione medico</option>
                        {medicos.length != 0
                          ? medicos.map((e) => (
                              <option key={e.IdMedico} value={e.IdMedico}>
                                {e.NombreCompleto}-{e.Especialidad}
                              </option>
                            ))
                          : null}
                      </Form.Select>
                      <ErrorMessage
                        name="MedicoIdMedico"
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
                        <h5>Adjuntar Archivo</h5>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="ArchivoProcedimiento"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          setImages(e.target.files);
                        }}
                        multiple
                        accept="image/*"
                      />
                    </Form.Group>
                    <ErrorMessage
                      name="ArchivoProcedimiento"
                      component="div"
                      className="text-danger"
                    />
                  </Col>

                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Col lg={12} md={12} sm={12} xs={12} className="mt-3 mb-3">
                     
                        <Button
                          variant="danger"
                          type="button"
                          className="mr-3"
                          style={{ marginRight: "5px" }}
                          onClick={()=> router.back()}
                        >
                          Cancelar
                        </Button>
                    

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

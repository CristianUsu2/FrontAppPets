
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
  const [pets, setPets] = useState("");
  const router = useRouter();
 

  const ObtenerMascotas = async () => {
    const request = await axios.get(
      process.env.NEXT_PUBLIC_SERVER + "PetsAll"
    );
    const data = await request.data;
    setPets(data);
  };
  //const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    ObtenerMascotas();
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

 
  const CrearRecomendacionServer = async (object) => {
    try {
      const request = await axios.post(
        process.env.NEXT_PUBLIC_SERVER + "CrearRecomendaciones",
        object
      );
      const data = await request.data;
      return true;
    } catch (error) {
      return error;
    }
  };

  const CrearRecomendacion = async(values) => {
    values.MascotaIdMascota =params.IdMascota
    console.log("values", values)
    const res=await CrearRecomendacionServer(values);
    if(res == true){
        router.back()
      }
    console.log(res, "error")
   
  };

  const ValidationSchema = Yup.object().shape({
    Descripcion: Yup.string().required("*Campo es requerido"),
  
  
  });
  return (
    <>
      <Container>
        <Col className="mt-4 shadow p-3 mb-5 bg-white rounded">
          <Formik
            initialValues={{
              Descripcion: "",
              
              
            }}
            onSubmit={(values) => CrearRecomendacion(values)}
            validationSchema={ValidationSchema}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit} >
                <h1 className="text-center mt-2 mb-4">
                  Agregar recomendacion de salud
                </h1>
                <Row>
                  

                  <Col lg={12} md={12} sm={12} xs={12} className="mt-2 mb-2">
                    <Form.Group>
                      <Form.Label>
                        <h5>Descripcion</h5>
                      </Form.Label>
                      <Form.Control
                        placeholder="Descripcion"
                        name="Descripcion"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Descripcion}
                      />
                      <ErrorMessage
                        name="Descripcion"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
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

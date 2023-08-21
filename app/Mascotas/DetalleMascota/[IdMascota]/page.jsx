"use client";
import { useState, useEffect } from "react";
import { GetPetS } from "@/services/PetsServices.js";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import {
  CarrouselVD,
  CarrouselProcedimientosSalud,
  CarrouselCondicionesSalud,
  CarrouselRecomendaciones,
  CarrouselSeguimientos
} from "@/components/Carrousel";
import { useRouter } from "next/navigation";

export default function DetalleMascota({ params }) {
  const router=useRouter()
  const [pets, setPets] = useState(null);
  useEffect(() => {
    GetPetS(params.IdMascota)
      .then((data) => {
        setPets(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(pets, "mascota");
 
  return (
    <>
      {pets != null ? (
        <Container>
          <Col className="mt-2">
            <Row>
              <Col sm={12} md={12} lg={12}></Col>
              <Col>
                <CarrouselVD data={pets[0].fotos} />
              </Col>
              <Col className="shadow-lg p-3 mb-2 bg-white rounded">
                <h2>Informacion de la mascota</h2>
                <Row>
                  <Col xs={6} sm={12} md={12} lg={6} className="mt-2">
                    <h5>Nombre: {pets.Nombre}</h5>
                  </Col>
                  <Col xs={6} sm={12} md={12} lg={6} className="mt-2">
                    <h5>Edad: {pets.Edad}</h5>
                  </Col>
                  <Col xs={6} sm={12} md={12} lg={6} className="mt-2">
                    <h5>Raza: {pets.Raza}</h5>
                  </Col>

                  <Col xs={6} sm={12} md={12} lg={6} className="mt-2">
                    <h5>Color: {pets.Color}</h5>
                  </Col>

                  <Col xs={6} sm={12} md={12} lg={6} className="mt-2">
                    <h5>Peso: {pets.Peso}</h5>
                  </Col>

                  <Col xs={6} sm={12} md={12} lg={6} className="mt-2">
                    <h5>Tipo: {pets.Tipo}</h5>
                  </Col>

                  <Col xs={6} sm={12} md={12} lg={12} className="mt-2">
                    <h5>Vacunas</h5>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      defaultValue={String(pets.Vacunas)
                        .trim()
                        .replaceAll('"', "")}
                    />
                  </Col>
                </Row>
              </Col>

              <Col
                className="shadow-lg p-3 mb-2 bg-white rounded mr-3"
                style={{ marginRight: "0px" }}
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <Col>
                  <h2 className="text-center">Procedimientos de salud</h2>
                  <CarrouselProcedimientosSalud
                    data={pets[0].ProcedimientoDeSaluds}
                  />
                </Col>
              </Col>

              <Col
                className="shadow-lg p-3 mb-2 bg-white rounded"
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <Col>
                  <h2 className="text-center">Condiciones de salud</h2>
                  <CarrouselCondicionesSalud data={pets[0].CondicionesDeSaluds} />
                </Col>
              </Col>

              <Col
                className="shadow-lg p-3 mb-2 bg-white rounded"
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <Col>
                  <h2 className="text-center">Recomendaciones</h2>
                  <CarrouselRecomendaciones data={pets[0].Recomendaciones} />
                </Col>
              </Col>

                <Col
                className="shadow-lg p-3 mb-2 bg-white rounded"
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <Col>
                  <h2 className="text-center">Seguimientos</h2>
                  <CarrouselSeguimientos data={pets} />
                </Col>
              </Col>
              <Col className="mt-3 mb-3">
                <Row>
                  <Col>
                    <Button onClick={()=>router.push("/Mascotas/CrearProcedimiento/"+params.IdMascota)}>Crear procedimiento de salud</Button>
                  </Col>
                  <Col>
                    <Button  onClick={()=>router.push("/Mascotas/CrearRecomendacion/"+params.IdMascota)}>Crear recomendacion</Button>
                  </Col>

                  <Col>
                    <Button onClick={()=>router.push("/Mascotas/CrearCondiciones/"+params.IdMascota)}>Crear condicion de salud</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      ) : null}
    </>
  );
}

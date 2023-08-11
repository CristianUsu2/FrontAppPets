"use client";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import {Row,Col} from 'react-bootstrap';
import styles from "./page.module.css";
import { CardV } from "@/components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [pets, setPets] = useState("");
  useEffect(() => {
    GetAllPetsApi();
  }, []);

  const GetAllPetsApi = async () => {
    const request = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/PetsAll`
    );
    const data = await request.data;
    setPets(data);
  };
  console.log(pets, "llamada pets");
  return (
    <>
      <Container>
        
        <h1 className="mt-2 mb-2 text-center">Lista de mascotas</h1>

        <Row>
         <Col lg={12} md={12} sm={12} xs={12}>
          <Button variant="success">Crear mascota</Button>
         </Col> 
        {pets.length !=0 ? 
          pets.map(e=>
            <Col lg={4} md={12} sm={12} xs={12} className="mt-4 " >
            <CardV className="ml-3 mr-3 col-md-12" data={e} key={e.IdMascota} />
            </Col>
            
          )
         
        : null}
        </Row>
      </Container>
    </>
  );
}

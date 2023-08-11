"use client";
import { Card, Button,Col } from "react-bootstrap";
import { CarrouselV } from "./Carrousel";
export const CardV = ({data}) => {
  return (
    <>
      <Card style={{ width: "400px" }} className="col-sm-12 col-md-12 .col-lg-6 shadow p-3 mb-5 bg-white rounded" >
       
        <Card.Body>
            <CarrouselV data={data.fotos}/>
          <Card.Title className="text-center mt-3 mb-3">{data.Nombre}</Card.Title>
         
          <div style={{display: 'flex', justifyContent: "center"}}>
          <Button variant="dark" className="text-center justify-content-center" >Ver mas detalle</Button>
          </div>
          
          
          
        </Card.Body>
      </Card>
    </>
  );
};

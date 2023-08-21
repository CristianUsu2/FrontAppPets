"use client";
import { Card, Button,Col } from "react-bootstrap";
import { CarrouselV } from "./Carrousel";
import { useRouter } from "next/navigation";
import {AlertSuccess} from "@/components/Alerts"
export const CardV = ({data}) => {
  const router=useRouter()
  return (
    <>
     
      <Card style={{ width: "400px", marginRight:"5px" }} className=" shadow p-3 mb-5 bg-white rounded mr-3 ml-3" >
       
        <Card.Body>
            <CarrouselV data={data.fotos}/>
          <Card.Title className="text-center mt-3 mb-3">{data.Nombre}</Card.Title>
         
          <div style={{display: 'flex', justifyContent: "center"}}>
          <Button variant="dark" className="text-center justify-content-center" onClick={()=>{router.push("/Mascotas/DetalleMascota/"+data.IdMascota); }} >Ver mas detalle</Button>
          </div>
          
          
          
        </Card.Body>
      </Card>
    </>
  );
};

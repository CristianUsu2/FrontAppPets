import Carousel from 'react-bootstrap/Carousel';
import {Col,Row, Form} from "react-bootstrap"
import Image from 'next/image';
export const CarrouselV=({data})=>{
  return (
    <>
    <Carousel>
      {data.map(e=>
      <Carousel.Item key={e.Foto}>
        <Image loader={() => "http://"+e.Foto} src={"http://"+e.Foto} width={400} height={300} style={{objectFit:"cover"}} alt={e.IdFoto}/>   
      </Carousel.Item>) }
    </Carousel>
    </>
  )
}




export const CarrouselVD=({data})=>{
  return (
    <>
    <Carousel>
      {data.map(e=>
      <Carousel.Item key={e.Foto}>
        <Image loader={() => "http://"+e.Foto} src={"http://"+e.Foto} width="600" height={300} style={{objectFit:"cover"}} alt={e.IdFoto}/>   
      </Carousel.Item>) }
    </Carousel>
    </>
  )
}


export const CarrouselProcedimientosSalud=({data})=>{
  return (
    <>
    {data.length != 0 ?  <Carousel>
      {data.map(e=>
      <Carousel.Item key={e.Nombre}>
        <Row> 
        <Col sm={12} xs={12} md={12} lg={12}>
          <h5>Numero : {e.IdProcedimientoSalud}</h5>
        </Col>   

        <Col  sm={12} xs={12} md={12} lg={6}>
          <h5>Nombre : {e.Nombre}</h5>
        </Col>
        <Col  sm={12} xs={12} md={12} lg={6}>
          <h5>Peso : {e.Nombre}</h5>
        </Col>
        <Col  sm={12} xs={12} md={12} lg={6}>
          <h5>Archivo</h5>
          <a href={"http://"+e.ArchivoProcedimiento}>Archivo adjunto</a>
        </Col>

        <Col  sm={12} xs={12} md={12} lg={12}>
          <h5>Observaciones</h5>
          <Form.Control as="textarea" rows={3} defaultValue={String(e.Observaciones).trim().replaceAll('"','')}/>
        </Col>

        </Row>
       
      </Carousel.Item>) }
    </Carousel> :  <h5>No tiene procedimientos de salud</h5>}
   
    </>
  )
}


export const CarrouselCondicionesSalud=({data})=>{
  return (
    <>
    {data.length != 0 ?  <Carousel>
      {data.map(e=>
      <Carousel.Item key={e.Nombre}>
        <Row> 
        <Col sm={12} xs={12} md={12} lg={12}>
          <h5>Nombre : {e.Nombre}</h5>
        </Col>   

        <Col  sm={12} xs={12} md={12} lg={12}>
          <h5>Descripcion : {e.Descripcion}</h5>
        </Col>
        

        </Row>
       
      </Carousel.Item>) }
    </Carousel> :  <h5>No tiene condiciones de salud</h5>}
   
    </>
  )
}

export const CarrouselRecomendaciones=({data})=>{
  return (
    <>
    {data.length != 0 ?  <Carousel>
      {data.map(e=>
      <Carousel.Item key={e.Descripcion}>
        <Row> 
        <Col sm={12} xs={12} md={12} lg={12}>
          <h5>Recomendaciones : {e.Descripcion}</h5>
        </Col>   

       
        

        </Row>
       
      </Carousel.Item>) }
    </Carousel> :  <h5>No tiene condiciones de salud</h5>}
   
    </>
  )
}

export const CarrouselSeguimientos=({data})=>{
  console.log(data[1], "carrosuel seguimientos")
  let data2= data[1].filter(e=>e.SeguimientoDeSaluds.length !=0)
  data2= data2.flatMap(e=>e.SeguimientoDeSaluds)
  
  return (
    <>
    {data2.length != 0 ?  <Carousel>
      {data2.map(e=>
      <Carousel.Item key={e.Tratamiento}>
        <Row> 
       
        <Col sm={12} xs={12} md={12} lg={12}>
          <h5>Tratamiento : {e.Tratamiento}</h5>
        </Col>   

        <Col sm={12} xs={12} md={12} lg={12}>
          <h5>Evolucion : {e.Evolucion}</h5>
        </Col>   
        

        </Row>
       
      </Carousel.Item>) }
    </Carousel> :  <h5>No tiene condiciones de salud</h5>}
   
    </>
  )
}
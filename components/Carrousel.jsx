import Carousel from 'react-bootstrap/Carousel';
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
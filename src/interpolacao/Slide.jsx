import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {

  const urlImg1 = "https://cdn.discordapp.com/attachments/810935222819618857/1113075170341564488/3733640_1.jpg"
  const urlImg2 = "https://cdn.discordapp.com/attachments/810935222819618857/1113078619632324720/685_1.png"
  const urlImg3 = "https://cdn.discordapp.com/attachments/810935222819618857/1113079979689910353/Produtos-de-limpeza-mais-vendidos_1.png"

  return (
    <Carousel>
      <Carousel.Item>
        <img width={1920} height={500} src={urlImg1}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={500} src={urlImg2}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={500} src={urlImg3}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample;
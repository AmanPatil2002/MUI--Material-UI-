import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import carouselImage from '../assets/BG.jpg';

export default function Hero() {
  return (
    <div>
        <Container fluid style={{padding:0}}>
            <Carousel>
                <Carousel.Item>
                    <img src={carouselImage} alt="first slide" height={595} width='100%'/>
                    <Carousel.Caption>
                    <h3 style={{color:'white'}}>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img src={carouselImage} alt="second slide" height={595} width='100%'/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                     <img src={carouselImage} alt="third slide"  height={595} width='100%'/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>
  )
}

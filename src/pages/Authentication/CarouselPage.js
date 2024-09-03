import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Col } from "reactstrap"
import background from "assets/images/bgimage.jpg"

const CarouselPage = () => {
  return (
    <React.Fragment>
      <Col xl={9}>
        <div className="auth-full-bg">
            <img src={background} alt="" style={{objectFit:'cover',width:'100%',height:'100%'}} />
        </div>
      </Col>
    </React.Fragment>
  )
}
export default CarouselPage

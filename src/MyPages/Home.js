import React from 'react'
import img1 from './../images/e2.jpg'
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from './../images/e3.jpg'
import img4 from './../images/course2.jpg'
import img5 from './../images/course5.jpg'
import Footer from './../MyPages/Footer';
import Header from './../MyComponents/Header';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (

      <div>
        <Header/>
      <div>
        <img className='w-full h-[500px] ' src={img1} alt="" />
      </div>
      <div>
        <img className='w-full h-[400px] p-24 ' src={img1} alt="" />
      </div>

      <section class="text-gray-600 bg-black body-font">
        <div class="container px-5 py-12 ">
          <div>
            <h1 className='text-bold text-white text-center mb-12'>Testimonials</h1>
          </div>
          <div class="flex -m-4">
            +<div className="lg:w-1/3 lg:mb-0 mb-6 mx-2 bg-white rounded-xl hover:bg-amber-300 ">
              <div class="h-full text-center rounded-xl  hover:bg-yellow-400 ">
                <img alt="testimonial" class="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
                <p class="leading-relaxed ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 mx-2 bg-white rounded-xl hover:bg-amber-300 ">
              <div class="h-full text-center rounded-xl  hover:bg-yellow-400 ">
                <img alt="testimonial" class="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
                <p class="leading-relaxed ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 mx-2 bg-white rounded-xl hover:bg-amber-300 ">
              <div class="h-full text-center rounded-xl  hover:bg-yellow-400 ">
                <img alt="testimonial" class="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
                <p class="leading-relaxed ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            
          </div>
        </div>
  </section>

  <div className=' p-8  h-96 bg-black  text-white'>
              <h2 className='p-2  text-center '> Our Recruiters</h2>
              
              <Slider className='mx-4 mt-4' {...settings} >
                <div >
                 <Card className='p-2 mt-6' style={{ width: '18rem'  }}>
                  <Card.Img variant="top" src={img3} />
                   <Card.Body>
                    <Card.Title className='text-black'>iTest Factory</Card.Title>
                        {/* <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                    {/* <Button variant="warning">Apply</Button> */}
                  </Card.Body>
                </Card>
                </div>
                <div>
                <Card className='p-2 mt-6' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img4} />
                   <Card.Body>
                    <Card.Title className='text-black'>Digitech Galaxy</Card.Title>
                        {/* <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="warning">Apply</Button> */}
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2 mt-6' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img5} />
                   <Card.Body>
                    <Card.Title className='text-black'>Nesta Caterers</Card.Title>
                        {/* <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="warning">Apply</Button> */}
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2 mt-6' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1} />
                   <Card.Body>
                    <Card.Title className='text-black'>My Cakes</Card.Title>
                        {/* <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2 mt-6' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        {/* <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2 mt-6' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        {/* <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img3} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
                <div>
                  <Card className='p-2' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1} />
                   <Card.Body>
                    <Card.Title className='text-black'>Card Title</Card.Title>
                        <Card.Text className='text-black'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                </div>
              </Slider>
              
            </div>
            <Footer/>
           
    </div>

    
  )
}

export default Home
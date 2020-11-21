import React, { Component } from 'react';
import Card from './cardUI';

import img1 from './assets/rami.jpg'
import img2 from './assets/hadeel.jpg'
import img3 from './assets/khagijah.jpg'
import img4 from './assets/amal.jpg'
import img5 from './assets/shiwki.jpg'



class cards extends Component{
    render() {
        return (
            <div className="container-fluid d-felx justify-content-center" >
                <div className="row">
                    <div className="col-md-4"> <Card />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img1} title= "Rami Abu esamen" job="Coding Academy Manager  " link= "https://www.linkedin.com/in/rami-abu-al-samen-416a5126/ "  />
                                            </div>

                    
                    <div className="col-md-4">
                    <Card imgsrc={img2} title= "Hadeel Al Shahwan "  job="Job Coach " link= "https://www.linkedin.com/in/hadeel-alshahwan-0821a3196/ " />
                    </div>

                    
                    <div className="col-md-4">
                        <Card imgsrc={img3} title= "Khadeejah Hamdan" job=" Expert Lead Trainer" link= "https://www.linkedin.com/in/khadeejah-hamdan/ " />
                    </div>
                    

                    <div className="col-md-4">
                        <Card imgsrc={img4} title= "Amal Al Dajah "  job="Trainer Assistant " link= " https://www.linkedin.com/in/amal-al-dajah-b5b423193/"  />
                    </div>
                    

                    <div className="col-md-4">
                        <Card imgsrc={img5} title= "Mohammad Shwaiki "  job="Team Leader " link= "https://www.linkedin.com/in/mohammad-shwaiki/ "  />
                    
                    </div>

            </div>
            
            </div>  
        )
    }
}
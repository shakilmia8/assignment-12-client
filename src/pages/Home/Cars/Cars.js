import React from 'react';
import './Cars.css';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../Car/Car';

/* const products = [
    {
        key: 'car001',
        name: 'Volvo XC60',
        price: '61.9 Lakh',
        launched: '19-Oct-2021',
        describe: "The Volvo XC60 is a compact luxury crossover SUV manufactured and marketed by Swedish automaker Volvo Cars since 2008. ... The XC60 is part of Volvo's 60 Series of automobiles, along with the S60, S60 Cross Country, V60, and V60 Cross Country. The first generation model introduced a new style for the 60 Series models.",
        img: 'https://static.autox.com/uploads/cars/2021/10/volvo-xc60.jpg'
    },
    {
        key: 'car002',
        name: 'Volvo S90',
        price: '61.9 Lakh',
        launched: '19-Oct-2021',
        describe: "With a distinctive design inside and out and a plush driving experience, the Volvo S90 is a luxury sedan that prides itself on being different from the German competition. Its minimalist Scandinavian style makes for a cosseting cabin, and the quiet and comfortable ride foregoes sportiness in favor of relaxation.",
        img: 'https://static.autox.com/uploads/cars/2021/10/volvo-s901.jpg'
    },
    {
        key: 'car003',
        name: 'Tata Punch',
        price: '5.49 Lakh',
        launched: '18-Oct-2021',
        describe: "Tata Punch is a 5 seater Compact SUV available in a price range of ₹ 5.49 - 9.39 Lakh. It is available in 14 variants, 1 engine option and 2 transmission options : Manual and AMT. Other key specifications of the Punch include a Ground Clearance of 187 mm and Bootspace of 366 litres. The Punch is available in 7 colours.",
        img: 'https://static.autox.com/uploads/cars/2021/10/tata-punch.jpg'
    },
    {
        key: 'car004',
        name: 'MG Astor',
        price: '9.78 Lakh',
        launched: '11-Oct-2021',
        describe: "MG Astor is a 5 seater SUV available in a price range of ₹ 9.78 - 17.38 Lakh. It is available in 12 variants, 1 engine option and 3 transmission options : Manual, Automatic (CVT) and Automatic (Torque Converter). Other key specifications of the Astor include a Kerb Weight of 1245 kg.",
        img: 'https://static.autox.com/uploads/cars/2021/10/mg-astor.jpghttps://static.autox.com/uploads/cars/2021/10/mg-astor.jpg'
    },
    {
        key: 'car005',
        name: 'Mahindra XUV700',
        price: '11.99 Lakh',
        launched: '30-Sep-2021',
        describe: "Mahindra XUV700 is a 7 seater SUV available in a price range of Rs. 12.49 - 22.99 Lakh*. It is available in 23 variants, 2 engine options that are BS6 compliant and 2 transmission options: Manual & Automatic. Other key specifications of the XUV700 include a kerb weight of and boot space of Liters.",
        img: 'https://static.autox.com/uploads/cars/2021/10/mahindra-xuv700.jpg'
    },
    {
        key: 'car006',
        name: 'Volkswagen Taigun',
        price: '10.49 Lakh',
        launched: '23-Sep-2021',
        describe: "Volkswagen Taigun is a 5 seater SUV available in a price range of ₹ 10.49 - 17.50 Lakh. In the BS6 era, the Taigun is powered by 999 cc Petrol engine which produces 114bhp of power and 178Nm of torque. The 1498 cc Petrol engine which produces 148bhp of power and 250Nm of torque.",
        img: 'https://static.autox.com/uploads/cars/2021/09/volkswagen-taigun3.jpg'
    },
    {
        key: 'car007',
        name: 'Hyundai i20 N Line',
        price: '9.84 Lakh',
        launched: '02-Sep-2021',
        describe: "Hyundai i20 N Line is a 5 seater Hatchback available in a price range of ₹ 9.84 - 11.91 Lakh. It is available in 6 variants, 1 engine option and 2 transmission options : Clutchless Manual and Automatic (Dual Clutch).",
        img: 'https://static.autox.com/uploads/cars/2021/09/hyundai-i20-n-line.jpg'
    },
    {
        key: 'car008',
        name: 'Tata Tigor EV',
        price: '11.99 Lakh',
        launched: '31-Aug-2021',
        describe: "Tata Motors has launched the new Tigor EV in India with ex-showroom prices starting at Rs. 11.99 lakh for the base XE variant. The Tata Tigor EV is now on sale in four varaints- XE, XM, XZ+ and XZ+ DT. The new Tata Tigor EV has adopted the brand's ZipTron powertrain shared with the Nexon EV and will be the second Tata EV powered by the new technology.",
        img: 'https://static.autox.com/uploads/cars/2021/09/tata-tigor-ev.jpg'
    },
    {
        key: 'car009',
        name: 'Honda Amaze',
        price: '6.36 Lakh',
        launched: '18-Aug-2021',
        describe: "Honda Cars India has launched the facelifted Amaze in the country. The model is available in three variants including E, S, and VX, across five colour options such as Platinum White Pearl, Lunar Silver Metallic, Golden Brown Metallic, Radiant Red, and a new Meteroid Grey Metallic colour.",
        img: 'https://static.autox.com/uploads/cars/2021/08/honda-amaze.jpg'
    },
    {
        key: 'car010',
        name: 'Tata Tiago NRG',
        price: '6.57 Lakh',
        launched: '04-Aug-2021',
        describe: "Tata Tiago NRG is a 5 seater Hatchback available in a price range of ₹ 6.57 - 7.09 Lakh. It is available in 2 variants, 1 engine option and 2 transmission options : Manual and AMT. Other key specifications of the Tiago NRG include a Ground Clearance of 181 mm, Kerb Weight of 1006 kg and Bootspace of 242 litres.",
        img: 'https://static.autox.com/uploads/cars/2021/08/tata-tiago-nrg.jpg'
    },
    {
        key: 'car011',
        name: 'Mahindra Bolero Neo',
        price: '8.77 Lakh',
        launched: '13-Jul-2021',
        describe: "Mahindra has launched the Bolero Neo in India and this is now its fourth SUV in the sub four-metre range of vehicles. It is a revitalised version of the TUV300 and is now being offered across four variants, seven colour options and with one diesel engine option. In front, Mahindra has fitted the SUV with the Bolero’s signature grille to bring it into the iconic SUV’s family range. ",
        img: 'https://static.autox.com/uploads/cars/2021/07/mahindra-bolero-neo.jpg'
    },
    {
        key: 'car012',
        name: 'Hyundai Alcazar',
        price: '16.3 Lakh',
        launched: '18-Jul-2021',
        describe: "Hyundai Alcazar is a 6 seater SUV available in a price range of ₹ 16.30 - 20.15 Lakh. It is available in 18 variants, 1 engine option and 2 transmission options : Manual and Automatic (Torque Converter). Other key specifications of the Alcazar include a Ground Clearance of 200 mm and Bootspace of 180 litres.",
        img: 'https://static.autox.com/uploads/cars/2021/06/hyundai-alcazar.jpg'
    },
] */


const Cars = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fierce-fjord-96835.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <Container className='cars'>
            <h2>Our New Cars</h2>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        products.slice(0, 6).map(product => <Car key={product._id} product={product}></Car>)
                    ))}
                </Row>
            }
        </Container>
    );
};

export default Cars;
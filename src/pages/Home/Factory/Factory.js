import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Factory = () => {

    const employees = [
        { id: 1, img: 'https://etimg.etb2bimg.com/thumb/msid-82945191,width-1200,resizemode-4/.jpg', describe: "Factory workers operate machinery to manufacture different products, which can vary depending on the industry. Factory workers are responsible for a range of functions including processing, sorting, and packing the products, as well as operating the machines and monitoring the output to check it is in line with compliance standards." },
        { id: 2, img: 'https://www.tesla.com/sites/default/files/images/blogs/tesla-safety-factory.jpg', describe: "This job takes place in an industrial environment and is often shift-based, meaning workers can take on full or part-time roles depending on their needs. The ideal candidate for this job should be organized, reliable, able to work effectively as part of a team, and have stamina and dexterity." },
        { id: 3, img: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZJA4DGoLYa8/v0/1000x-1.jpg', describe: "Factory workers operate machinery, feeding products into the production line, possibly a conveyor line, such as in a canning factory. They monitor the machines, raising any issues with their manager, and as well, control and adjust machine settings, such as the speed." },
        { id: 4, img: 'https://images.axios.com/IJH9Nv7cdMoZdpFvj__DFkiXtjA=/0x127:3000x1815/1920x1080/2020/03/16/1584396982291.jpg', describe: "Factory workers have an in-depth knowledge of the products and materials they’re working with so they notice if a product doesn’t meet certain standards. They check the output to ensure that all products are exactly the same, keeping a record of any defective items." },
        { id: 5, img: 'https://media.timesfreepress.com/img/photos/2015/02/20/b330d18332e7451b9975fabfb8071277_t1070_h2b324a0aab7eb391f940cf92e3fe92066b7e458c.jpg', describe: "Health and safety procedures are critical in a factory setting, as accidents can occur easily if these processes are not followed. Factory workers are responsible for following these systems to ensure their safety and the safety of their team. They inform their manager of safety hazards." },
        { id: 6, img: 'https://s3-prod.autonews.com/s3fs-public/OEM01_305169953_AR_-1_IZRAJEPAOZFH.jpg', describe: "No formal qualification is required to become a factory worker, although employers generally require a high school diploma and previous experience working in a factory environment. Companies look for strong practical skills and, depending on the industry, may require skills such as forklift driving experience. Prior experience or knowledge of the products the factory manufactures are beneficial to an application for this job" },
    ]

    return (
        <Container className='cars'>
            <h2>Our Car Factory Employees</h2>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        employees.map(employee =>
                            <Col key={employee.id}>
                                <Card className='car-card'>
                                    <Card.Img className='car-img' variant="top" src={employee.img} />
                                    <Card.Body>
                                        <Card.Text>
                                            {employee.describe.slice(0, 200)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    ))}
                </Row>
            }
        </Container>
    );
};

export default Factory;
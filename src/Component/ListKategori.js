import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

class ListKategori extends React.Component {
    render() {
        return (
            <Col md={2} className="mt-2">
                <h3>Kategori</h3>
                <hr/>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Col>
        )
    }
}


export default ListKategori;
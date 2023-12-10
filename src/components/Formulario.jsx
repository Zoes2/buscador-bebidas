import { Button, Form, Row, Col } from "react-bootstrap"


const Formulario = () => {
    return (
        <Form className="mt-5">
            <Row>
                <Col md={6}>
                    <Form.Group >
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>

                        <Form.Control
                            id="nombre"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc"
                            name="nombre"
                        >

                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="categoria">Categoría Bebida</Form.Label>

                        <Form.Select
                            id="categoria"
                            name="categoria"
                        >
                            <option value="">- Selecciona Categoría -</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario
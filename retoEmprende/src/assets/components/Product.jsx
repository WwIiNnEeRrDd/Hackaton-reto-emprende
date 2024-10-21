import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Product({ nombre, descripcion, precio, comunidad, categoria, disponibilidad }) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* Asegurarte de que el src de la imagen sea válido. Reemplaza con una URL real o deja el placeholder */}
      <Card.Img variant="top" src="https://via.placeholder.com/150" alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
          <br />
          <strong>Precio:</strong> ${precio}
          <br />
          <strong>Comunidad:</strong> {comunidad}
          <br />
          <strong>Categoría:</strong> {categoria}
          <br />
          <strong>Disponibilidad:</strong> {disponibilidad ? "Disponible" : "No disponible"}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

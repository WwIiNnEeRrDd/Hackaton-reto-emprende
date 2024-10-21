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
          <strong>Precio:</strong> ${precio}
          <strong>Comunidad:</strong> {comunidad}
          <strong>Categoría:</strong> {categoria}
          <strong>Disponibilidad:</strong> {disponibilidad ? "Disponible" : "No disponible"}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;

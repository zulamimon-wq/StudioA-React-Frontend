import React, { useState } from 'react';

/**
 * COMPONENTE: CatalogoStudioA
 * DESCRIPCIÓN: Módulo de visualización de productos para la tienda StudioA.
 * CUMPLE CON: Historia de Usuario "Visualizar Catálogo de Prendas".
 */
const CatalogoStudioA = () => {
  // Estado para simular la carga de productos de la base de datos (Hooks)
  const [productos] = useState([
    { id: 1, nombre: "Beige Blouse", precio: 75000, categoria: "Damas" },
    { id: 2, nombre: "Blue Dress", precio: 80000, categoria: "Vestidos" },
    { id: 3, nombre: "Red-flowered Dress", precio: 145000, categoria: "Vestidos" }
  ]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>StudioA - Catálogo Frontend React</h1>
      </header>

      <section style={styles.grid}>
        {productos.map((prod) => (
          <div key={prod.id} style={styles.card}>
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
            <button style={styles.button}>Agregar al Carrito</button>
          </div>
        ))}
      </section>
    </div>
  );
};

// Estándares de codificación: Estilos organizados
const styles = {
  container: { padding: '20px', fontFamily: 'Arial' },
  header: { textAlign: 'center', color: '#d32f2f' },
  grid: { display: 'flex', gap: '20px', justifyContent: 'center' },
  card: { border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' },
  button: { backgroundColor: '#008cba', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }
};

export default CatalogoStudioA;
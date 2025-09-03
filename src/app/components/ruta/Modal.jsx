// src/components/AgregarRutaModal.jsx - CON ESTILOS INCORPORADOS

import React from 'react';
import { FaTruckMoving, FaTimes } from 'react-icons/fa';

const productos = [
    { id: 1, label: 'x 10 azul' },
    { id: 2, label: 'X 15' },
    { id: 3, label: 'x 15PRO' },
    { id: 4, label: 'X 30' },
    { id: 5, label: 'X45' },
    { id: 6, label: 'x 10 Amarillo' },
    { id: 7, label: 'USUARIO' }


];

export default function AgregarRutaModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    // Se aplica el estilo 'modalOverlay' a través de la prop 'style'
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        
        {/* Encabezado del Modal */}
        <div style={styles.modalHeader}>
          <div style={styles.modalTitle}>
            <FaTruckMoving />
            <h2>Agregar Ruta</h2>
          </div>
          <button onClick={onClose} style={styles.modalCloseButton}>
            <FaTimes />
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div style={styles.modalBody}>
          <div style={styles.selectorsContainer}>
            <select style={styles.customSelect}>
              <option>Seleccionar cliente</option>
            </select>
            <select style={styles.customSelect}>
              <option>Asignar Zona</option>
            </select>
            <select style={styles.customSelect}>
              <option>Asignar Vehículo</option>
            </select>
          </div>

          <div style={styles.productsContainer}>
            <h3 style={styles.productsTitle}>Seleccionar Productos</h3>
            {productos.map(prod => (
              <div key={prod.id} style={styles.productRow}>
                <div style={styles.productLabel}>
                  <input type="radio" name="producto" id={`prod-${prod.id}`} />
                  <label htmlFor={`prod-${prod.id}`}>{prod.label}</label>
                </div>
                <div style={styles.productQuantity}>
                  <label>Cant</label>
                  <input type="number" style={styles.quantityInput} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer del Modal */}
        <div style={styles.modalFooter}>
          <button style={styles.submitButton}>Agregar a Ruta</button>
        </div>
      </div>
    </div>
  );
}


// --- INICIO DE LA SECCIÓN DE ESTILOS ---
// Todo el CSS ahora vive aquí como un objeto de JavaScript.
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100, 116, 139, 0.5)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1e3a8a',
  },
  modalCloseButton: {
    backgroundColor: '#e0e7ff',
    color: '#4338ca',
    border: 'none',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  selectorsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  customSelect: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb',
    fontSize: '0.9rem',
    color: '#374151',
  },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  productsTitle: {
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '0.5rem',
  },
  productRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#374151',
  },
  productQuantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
  },
  quantityInput: {
    width: '60px',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    backgroundColor: '#f9fafb',
  },
  modalFooter: {
    marginTop: '1rem',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#374151',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};
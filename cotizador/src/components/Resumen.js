import React from "react";
import PropTypes from 'prop-types';
import { primerMayuscula } from "../helper";
import styled from '@emotion/styled';


const ContenedorResument = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResument>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)} </li>
        <li>Año: {year} </li>
      </ul>
    </ContenedorResument>
  );
};


Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;

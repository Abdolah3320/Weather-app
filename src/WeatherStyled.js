// src/WeatherStyled.js
import styled from 'styled-components';

export const WeatherContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const WeatherInfo = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Dropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-left: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
`;

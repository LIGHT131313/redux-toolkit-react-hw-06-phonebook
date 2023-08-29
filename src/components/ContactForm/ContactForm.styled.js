import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid black;
`;

export const StyledField = styled(Field)`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

export const AddBtn = styled.button`
  display: block;
  margin-top: 4px;
`;

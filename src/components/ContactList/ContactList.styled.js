import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.spacing(3)};
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};
  padding: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.green};
  height: 100%;
`;

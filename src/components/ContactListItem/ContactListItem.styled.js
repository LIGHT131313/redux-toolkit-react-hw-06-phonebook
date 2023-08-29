import styled from 'styled-components';

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
export const ListItemText = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

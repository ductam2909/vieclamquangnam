import styled from 'styled-components'

export const ItemWrapper = styled.div`
    gap: 10px;
    padding: 5px 10px;
    display: flex;
    align-items: flex-end;
    border: 0.5px solid #c2c2c2;
    border-radius: 8px;
    
  &:hover {
    box-shadow: 2px 2px 10px #0d8cae;
    border-radius: 8px;

  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

export const ItemTitleWtImage = styled.h3`
  margin: 0;
 
`;
export const ItemTitle = styled.h3`
  margin: 0;
  white-space: wrap;  
`;

export const Salary = styled.span`
  margin: 0;
  color: #dc362e;
`;

export const Infor = styled.div`
  display: flex;
  gap: 15px;
`;

export const Address = styled.span`
  margin: 0;
`;
export const Expired = styled.span`
  margin: 0;
  color: #dc362e;

`;
export const Hot = styled.span`
  position: absolute;
  top: -20px;
  right: 0px;
`;
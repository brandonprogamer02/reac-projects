import styled from 'styled-components'

export const DivErrorMessage = styled.div`
   background-color: ${({ bg }: { bg?: string }) => bg || 'red'};
   color: white;
   border-radius: 20px;
   padding: 5px;
   font-weight: bold;
   font-size: small;
   margin: 5px 10px;
`;









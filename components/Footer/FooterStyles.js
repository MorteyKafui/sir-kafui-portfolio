import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`  

from{
  color: #ff6b91;
}


to{
    color: #f5f6fb;
  
}

`;

export const StyledFooter = styled.section`
  background: linear-gradient(to right top, #191851, #001e3c);
  border-top: 1px solid #f5f6fb;
  color: #f5f6fb;
  padding: 5rem 0;

  .footer-container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h4 {
      font-size: 3rem;
      font-weight: 500;
      animation: ${changeColor} 1s ease-out alternate infinite;
    }

    p {
      font-size: 1.6rem;
      font-weight: 700;
      border-bottom: 1px dotted #f5f6fb;
    }
  }
`;

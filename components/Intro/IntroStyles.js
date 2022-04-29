import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: linear-gradient(to left bottom, #191851, #001e3c);
  height: 70vh;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;

    h1 {
      font-size: 10rem;
      color: #ff6b91;
    }

    p {
      font-size: 5rem;
      color: #f5f6fb;

      span {
        color: #ff6b91;
        font-weight: 500;
      }
    }

    a {
      display: inline-block;
      padding: 1rem 2.5rem;
      font-size: 2.5rem;
      border: 1px dotted #f5f6fb;
      color: #ff6b91;
      font-weight: 500;
      transition: all 0.3s ease-in;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }
`;

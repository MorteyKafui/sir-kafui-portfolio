import styled from 'styled-components';

export const StyledContact = styled.section`
  background: linear-gradient(to right bottom, #191851, #001e3c);
  color: #ff6b91;
  padding: 5rem 0;
  min-height: 50vh;

  h2,
  p {
    color: #ff6b91;
  }

  .connect {
    font-size: 3rem;
    margin: 5rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  a {
    font-weight: 500;
    color: #f5f6fb;
    padding-bottom: 0.5rem;
    transition: all 0.4s ease-in;

    &:hover {
      border-bottom: 1px dotted #f5f6fb;
      letter-spacing: 1.3px;
    }
  }
`;

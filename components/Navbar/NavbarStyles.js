import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: #f3f3f3;
  color: #001e3c;
  height: 10vh;

  .container {
    max-width: 144rem;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    h1 {
      font-family: 'Lobster Two', cursive;
      font-size: 3rem;
      letter-spacing: 1px;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      font-size: 2rem;
      font-weight: 500;

      a {
        padding: 0.5rem 2rem;
        transition: border-bottom 0.3s ease;
      }

      a:hover {
        border-bottom: 1px dotted #001e3c;
      }
    }
  }
`;

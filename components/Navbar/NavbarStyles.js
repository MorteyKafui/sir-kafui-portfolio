import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: #191851;
  color: #f5f6fb;
  height: 10vh;
  border-bottom: 1px solid #f5f6fb;

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

      a {
        color: #ff6b91;
      }
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      font-size: 2rem;
      font-weight: 500;

      a {
        color: #f5f6fb;
        padding: 0.5rem 2rem;
        transition: all 0.3s ease;
      }

      a:hover {
        color: #ff6b91;
        letter-spacing: 1.5px;
      }
    }

    img {
      background-color: #f5f6fb;
    }
  }
`;

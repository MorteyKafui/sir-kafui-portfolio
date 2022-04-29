import styled from 'styled-components';

export const StyledAbout = styled.section`
  background-color: #fff0f4;
  color: #191851;
  padding: 5rem 0;
  min-height: 60vh;

  .about-me {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;
    align-items: center;

    p {
      display: flex;
      align-items: flex-start;
      font-size: 1.7rem;
      gap: 2rem;

      span {
        font-size: 3rem;
        color: #001e3c;
        font-weight: 700;
      }
    }
  }
`;

import styled from 'styled-components';

export const StyledAbout = styled.section`
  background-color: #fff0f4;
  color: #191851;
  padding: 5rem 0;
  min-height: 60vh;

  h2 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-me {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.7rem;
    }
  }
`;

import styled from 'styled-components';

export const StyledProjects = styled.section`
  margin: 5rem 0;
  padding: 3rem 0;
  color: #191851;
  height: 90vh;
  font-size: 1.6rem;

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .card {
      box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.2), 0 8px 8px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;

      .card-content {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .links {
          display: flex;
          align-items: center;
          gap: 2rem;

          a {
            font-size: 2rem;
            color: #ff6b91;
            transition: all 0.3s ease;
            flex: 1;

            &:hover {
              transform: translateY(-2px);
            }
          }
        }

        a.view {
          display: inline-block;
          margin: 2rem 0;
          border: 1px dotted #191851;
          padding: 1.2rem 2.4rem;
          text-align: center;
          color: #191851;
          font-weight: 600;
          transition: all 0.3s ease-out;

          &:hover {
            background-color: #191851;
            color: #fff0f4;
            letter-spacing: 0.9px;
          }
        }
      }
    }
  }
`;

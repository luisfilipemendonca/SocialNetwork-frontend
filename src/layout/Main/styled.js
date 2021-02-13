import styled from 'styled-components';

export default styled.main`
  padding: ${(props) => `calc(${props.theme.header.heightSM} + 8px)`} 8px 8px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    padding: ${(props) => `calc(${props.theme.header.heightSM} + 8px)`} 16px 8px;
  }

  @media screen and (min-width: 992px) {
    padding: ${(props) => `calc(${props.theme.header.heightLG} + 8px)`} 8px 8px;
  }
`;

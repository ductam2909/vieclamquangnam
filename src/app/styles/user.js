import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: calc(100vh - 235px);
  padding: 16px 32px;
  .ant-breadcrumb {
    padding: 0 0 20px 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
`;
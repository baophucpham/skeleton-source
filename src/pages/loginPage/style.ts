import styled from "@emotion/styled";

const LoginStyle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 16px;
  }
  .imageBackground {
    /* width: 70%; */
    height: 900px;
  }
  .fromLogin {
    width: 40%;
    height: 900px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .LogoIMG {
    margin-bottom: 26px;
  }
  .titleLogin {
    margin-bottom: 26px;
  }
  .inputStyle {
    margin-bottom: 10px;
  }
  .userName {
    margin-bottom: 10px;
  }
`;
export default LoginStyle;

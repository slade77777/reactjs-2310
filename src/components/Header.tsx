import styled from "styled-components";

const Header = () => {
    return <div>
        <StyledTitle>
            Welcome to NexFlix website
        </StyledTitle>
        <SubStyledTitle aColor="red">
            Nice to see you
        </SubStyledTitle>
        <SubStyledTitle aColor="yellow">
            Please vote for us
        </SubStyledTitle>
    </div>
}

export default Header;

const StyledTitle = styled.p`
  font-size: 30px;
  text-align: center;
`

const SubStyledTitle = styled(StyledTitle)<{aColor: string}>`
    color: ${(attribute) => attribute.aColor}
`

import styled, {keyframes} from "styled-components";
import * as React from "react"

const AnimateTitleF = keyframes`
    0% {
      margin-top: -500px;
    }
    100% {
      margin-top: 0;
    }
`

const StyledWrapper = styled.div`
 position: relative;
  width: 100vw;
`

const StyledTitle = styled.h1`
  animation: ${AnimateTitleF} 0.8s linear ;
  font-size: 24px;
  margin-bottom: 12px;
`

interface ITitleProps {
    title: string
}

const Title = ({title}: ITitleProps) => {
    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
        </StyledWrapper>

    )
}

export default Title

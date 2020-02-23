import styled from '@emotion/styled';

const StyledA = styled.a`
	color: #243B53;
	background-image: linear-gradient(to bottom, transparent 65%, rgb(93,85,250,0.3) 0);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: all .2s ease;
  &:hover {
    background-size: 100% 100%;
}
`;
export default StyledA;

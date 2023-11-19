import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Header } = Layout;
const { Text } = Typography
const HeaderStyled = styled(Header)`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${props => props.theme.sizes.appbar};
`

const TitleStyled = styled(Text)`
    color: ${props => props.theme.colors.text};
    font-size: 19px;
    font-weight: bold;
`


export { HeaderStyled, TitleStyled }
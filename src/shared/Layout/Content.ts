import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const ContentStyled = styled(Content)`
    background-color: ${props => props.theme.colors.background};
    height: ${props => props.theme.sizes.bodyWithAppbar};
`

export {ContentStyled}
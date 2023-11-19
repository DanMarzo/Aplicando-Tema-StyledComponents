import { Layout, Switch } from "antd";
import { HeaderStyled, TitleStyled } from "../../shared/Layout/Appbar";
import { ContentStyled } from "../../shared/Layout/Content";

interface Props {
  toggle(): void;
}
const LayoutHome: React.FC<Props> = ({ toggle }) => {
  return (
    <Layout>
      <HeaderStyled>
        <TitleStyled>Aplicando Temas</TitleStyled>
        <div>
          <Switch defaultChecked onChange={toggle} />
        </div>
      </HeaderStyled>
      <ContentStyled>Testando...</ContentStyled>
    </Layout>
  );
};

export default LayoutHome;

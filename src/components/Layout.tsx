import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

type LayoutProps = {
  SiderComp: React.FC;
  HeaderComp: React.FC;
  ContentComp: React.FC;
  FooterComp: React.FC;
};

export const LayoutComp: React.FC<LayoutProps> = ({
  SiderComp,
  HeaderComp,
  ContentComp,
  FooterComp,
}) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <SiderComp />
      </Sider>
      <Layout>
        <Header>
          <HeaderComp />
        </Header>
        <Content>
          <ContentComp />
        </Content>
        <Footer>
          <FooterComp />
        </Footer>
      </Layout>
    </Layout>
  );
};

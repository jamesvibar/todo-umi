import { Layout } from 'antd';
import Link from 'umi/link';
const { Header, Content, Footer } = Layout;

function BasicLayout(props) {
  return (
    <Layout>
      <Header>
        <Link to="/">
          <strong>todo-umi</strong>
        </Link>
      </Header>
      <Content>
        <div
          style={{ maxWidth: '900px', margin: '2rem auto', background: 'white', padding: '2rem' }}
        >
          {props.children}
        </div>
      </Content>
      <Footer>
        <p style={{ textAlign: 'center' }}>todo-umi 2019</p>
      </Footer>
    </Layout>
  );
}

export default BasicLayout;

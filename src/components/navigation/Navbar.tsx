import { Image, Layout } from "antd";
import { Link } from "react-router-dom";
import { Header } from "antd/es/layout/layout";
import ProductSearch from "../shared/ProductSearch";
import NavTools from "../shared/NavTools";

const Navbar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FA5252",
          padding: "15px",
        }}
      >
        <Link to={"/"} className="flex">
          <Image
            width={200}
            height={80}
            preview={false}
            src="/logo.png"
            alt="logo"
          />
        </Link>
        <div className="hidden md:flex">
          <ProductSearch />
        </div>
        <div>
          <NavTools />
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;

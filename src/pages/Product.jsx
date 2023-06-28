import Productkopf from "../components/product/Productkopf";
import Card from "../components/product/Card";
import Carde from "../components/product/Carde";
import Footer from "../components/Footer";
import Searchbox from "../components/Searchbox";

const Product = () => {
  return (
    <div className="bg-gray-400 h-screen text-center">
      <Searchbox />
      <Productkopf />
      <Card />
      <Carde />
      <Footer />
    </div>
  );
};

export default Product;

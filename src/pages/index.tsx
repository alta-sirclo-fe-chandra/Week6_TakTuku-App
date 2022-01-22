import axios from "axios";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ImgProd1 from "../assets/images/pic1.png";

type item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  id_category: number;
};

const Home = () => {
  document.title = "TakTuku - Home ";
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    fetchData();
    setProduct([
      {
        id: 1,
        name: "Vas bunga",
        price: 20000,
        quantity: 1,
        id_category: 1,
      },
      {
        id: 2,
        name: "Vas bunga",
        price: 20000,
        quantity: 1,
        id_category: 1,
      },
      {
        id: 3,
        name: "Vas bunga",
        price: 20000,
        quantity: 1,
        id_category: 2,
      },
      {
        id: 4,
        name: "Vas bunga",
        price: 20000,
        quantity: 1,
        id_category: 2,
      },
    ]);
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://108.136.245.45:8080/products")
      .then((res) => {
        const { data } = res;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const thousandSeparator = (amount: number) => {
    if (
      amount !== undefined ||
      amount !== 0 ||
      amount !== "0" ||
      amount !== null
    ) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return amount;
    }
  };

  return (
    <div className="home">
      <div className="container mt-5">
        <div className="row justify-content-center banner rounded-3">
          <div className="banner-hero ms-5 mt-5">
            <h1 className="banner-title mt-4">
              Welcome To <br /> TakTuku Store
            </h1>
            <p className="banner-desc">Find what you need here</p>
          </div>
        </div>
        <div className="row category mt-5">
          <ul className="navbar-nav d-flex flex-row justify-content-center">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/">
                All
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/">
                Women
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/">
                Men
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/">
                Kids
              </a>
            </li>
          </ul>
        </div>
        <div className="row product-list mt-5 justify-content-center">
          {product.map((item: item) => (
            <div key={item.id} className="col-11 col-md-4 col-lg-3 mt-2">
              <div className="row product-item">
                <img className="rounded-3" src={ImgProd1} alt="product" />
                <h5 className="produc-name mt-3">{item.name}</h5>
                <p className="product-price">{`Rp. ${thousandSeparator(
                  item.price
                )}`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row pages justify-content-end my-4">
          <div className="col-12 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
            <div
              className="fs-5 me-3 mb-0 shadow rounded-circle"
              style={{ cursor: "pointer" }}
            >
              <BiChevronLeft className="m-2" />
            </div>
            <div className="fs-5 mb-0  mx-2">1</div>
            <div
              className="fs-5 mb-0  ms-3 shadow rounded-circle"
              style={{ cursor: "pointer" }}
            >
              <BiChevronRight className="m-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

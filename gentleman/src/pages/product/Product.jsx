import "./product.css";
import { Filter } from "../../components/filter/filter";
import { ProductListing } from "../../components/productListing/productListing";
import { FiFilter } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FilterResponsive } from "../../components/filter/filterResponsive";
import { useProductContext } from "../../context/product-context";

const Product = () => {
  const [filterState, setFilterState] = useState(false);
  const { filterData } = useProductContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        onClick={() => setFilterState((filterState) => !filterState)}
        className="bottom-responsive-button"
      >
        {filterState ? "APPLY" : "FILTER"}
        <FiFilter />
      </div>
      {!filterState && (
        <div>
          <div className="page-header">All Products({filterData.length})</div>
          <div className="main-content">
            <Filter />
            <ProductListing />
          </div>
        </div>
      )}
      {filterState && <FilterResponsive />}
    </div>
  );
};

export { Product };

import "./filter.css";
import { FaFilter } from "react-icons/fa";
import { useCategoryContext } from "../../context/category-context";
import { useProductContext } from "../../context/product-context";
const Filter = () => {
  const { category } = useCategoryContext();
  const { productState, productDispatch } = useProductContext();
  const ratingData = [
    "4 Star & above",
    "3 Star & above",
    "2 Star & above",
    "1 Star & above",
  ];
  return (
    <div className="sidebar p-1 m-1">
      <div className="sidebar-heading main-heading">
        Filters
        <button
          onClick={() => productDispatch({ type: "CLEAR_ALL" })}
          className="button contained-button secondary-button"
        >
          <u>clear</u>
        </button>
      </div>
      {/* ---------------- */}
      {/* priceRangeSlider */}
      {/* ---------------- */}
      <div className="sidebar-heading">Price</div>
      <div className="sidebar-item">
        <div className="price-range price">
          499 <span className="text-centre">---</span>{" "}
          <span className="text-end">{productState.range}</span>
        </div>

        <input
          onChange={(e) =>
            productDispatch({ type: "RANGE", payload: e.target.value })
          }
          list="priceRange"
          type="range"
          min="499"
          max="5000"
          step="100"
          className="price"
          value={productState.range}
        />
        <datalist id="priceRange">
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="1500">1500</option>
          <option value="2000">2000</option>
          <option value="2500">2500</option>
          <option value="3000">3000</option>
          <option value="3500">3500</option>
          <option value="4000">4000</option>
          <option value="4500">4500</option>
        </datalist>
      </div>

      {/* categories */}
      <div className="sidebar-heading">Categories</div>

      {category.map((item) => {
        return (
          <div class="checkbox sidebar-item">
            <label for={item.id}>
              <input
                onChange={() =>
                  productDispatch({
                    type: "CATEGORY",
                    payload: item.categoryName,
                  })
                }
                id={item.id}
                name="checkbox"
                type="checkbox"
                checked={
                  productState.category.find(
                    (element) => element === item.categoryName
                  ) === undefined
                    ? false
                    : true
                }
              />
              {item.categoryName}
            </label>
          </div>
        );
      })}

      {/* filtering */}
      <div className="sidebar-heading">Availability </div>
      <div className="checkbox sidebar-item">
        <label>
          <input
            onChange={() => productDispatch({ type: "ONLY_IN_STOCK" })}
            type="checkbox"
            name="filter"
          />
          ONLY IN STOCK
        </label>
      </div>

      <div className="sidebar-heading"> Delivery</div>

      <div className="checkbox sidebar-item">
        <label>
          <input
            onChange={() => productDispatch({ type: "FAST_DELIVERY" })}
            type="checkbox"
            name="filter"
          />{" "}
          FAST DELIVERY
        </label>
      </div>

      {/* Ratings */}
      <div className="sidebar-heading">Rating</div>
      {ratingData.map((item, index) => {
        return (
          <div className="radio sidebar-item">
            <label for={index}>
              <input
                id={index}
                name="radio"
                type="radio"
                checked={productState.rating === 4 - index ? true : false}
                onChange={() =>
                  productDispatch({ type: "RATING", payload: 4 - index })
                }
              />
              {item}
            </label>
          </div>
        );
      })}
      {/* sorting */}

      <div className="sidebar-heading">Sort by</div>
      <div className="radio sidebar-item">
        <label>
          <input
            onChange={() => productDispatch({ type: "HIGH_TO_LOW" })}
            type="radio"
            name="price"
            checked={productState.sort === "HIGH" ? true : false}
          />
          Price-High To Low
        </label>
      </div>
      <div className="radio sidebar-item">
        <label>
          <input
            onChange={() => productDispatch({ type: "LOW_TO_HIGH" })}
            type="radio"
            name="price"
            checked={productState.sort === "LOW" ? true : false}
          />{" "}
          Price-Low to high
        </label>
      </div>
    </div>
  );
};
export { Filter };

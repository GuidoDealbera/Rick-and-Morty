import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useEffect } from "react";
import Card from "../Card/Card";

const Favorites = (props) => {
  const mapFavorites = () => {
    return props.myFavorites?.map((e, i) => (
      <Card
        id={e.id}
        key={i}
        name={e.name}
        species={e.species}
        gender={e.gender}
        image={e.image}
        onClose={() => {
          props.onClose(e.id);
        }}
      />
    ));
  };

  const dispatch = useDispatch();
  const selectOrderHandler = (event) => {
    dispatch(filterCards("None"));
    dispatch(orderCards(event.target.value));
  };
  useEffect(() => {
    return () => {
      dispatch(filterCards("none"));
      dispatch(orderCards("ascendente"));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectFilterHandler = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div className="p-2">
      <div className="flex gap-5">
        <select
          className="bg-[#adff2f] outline-none rounded-xl py-1 px-2"
          onChange={selectOrderHandler}
        >
          <option
            className="italic font-medium"
            value="order"
            disabled="disable"
          >
            Order By A-Z
          </option>
          <option className="italic font-medium" value="ascendente">
            Ascendente
          </option>
          <option className="italic font-medium" value="descendente">
            Descendente
          </option>
        </select>
        <select
          className="bg-[#adff2f] outline-none rounded-xl py-1 px-2"
          onChange={selectFilterHandler}
        >
          <option
            className="italic font-medium"
            value="filter"
            disabled="disable"
          >
            Filter By Gender
          </option>
          <option className="italic font-medium" value="Male">
            Male
          </option>
          <option className="italic font-medium" value="Female">
            Female
          </option>
          <option className="italic font-medium" value="unknown">
            Unknown
          </option>
          <option className="italic font-medium" value="Genderless">
            Genderless
          </option>
        </select>
      </div>
      <div className="flex flex-wrap gap-10 justify-center pt-4">{mapFavorites()}</div>
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);

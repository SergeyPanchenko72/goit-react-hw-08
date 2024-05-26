import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectValueFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(selectValueFilter);
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={selectNameFilter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        type="text"
      />
    </div>
  );
}

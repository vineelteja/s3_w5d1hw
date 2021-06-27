import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../actions";
import { SwitchTheme } from "../utils";

const DarkThemeToggle = () => {
  const isDarkThemeOn = useSelector((state) => state.preference.isDarkThemeOn);
  const dispatch = useDispatch();
  return (
    <SwitchTheme>
      <h1>Theme App</h1>
      <p>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
          checked={isDarkThemeOn}
        />{" "}
        Use Dark Theme
      </p>
    </SwitchTheme>
  );
};

export default DarkThemeToggle;

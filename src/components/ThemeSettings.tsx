import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../states/store";
import {
  setBackgroundColor,
  setTextColor,
} from "../states/settings/themeSlice";

const ThemeSettings: React.FC = () => {
  const dispatch = useDispatch();
  const { backgroundColor, textColor } = useSelector(
    (state: rootState) => state.themeReducer
  );
  const [stateBackgroundColor, setStateBackgroundColor] =
    useState(backgroundColor);
  const [stateTextColor, setStateTextColor] = useState(backgroundColor);

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setBackgroundColor(stateBackgroundColor));
          dispatch(setTextColor(stateTextColor));
        }}
      >
        <label>
          Background Color:
          <input
            type="color"
            value={stateBackgroundColor}
            onChange={(e) => setStateBackgroundColor(e.target.value)}
          />
        </label>
        <label>
          Text Color:
          <input
            type="color"
            value={stateTextColor}
            onChange={(e) => setStateTextColor(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: 10 }}>
          save changes
        </button>
      </form>
    </div>
  );
};

export default ThemeSettings;

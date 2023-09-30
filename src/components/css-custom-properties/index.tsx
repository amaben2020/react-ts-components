import { useThemeConfig2 } from "./hooks/useThemeConfig2";
import "./style.css";
const CssCustomProperties = () => {
  const { variables } = useThemeConfig2("NoSugar");

  return (
    <div className="wrapper" style={variables}>
      CssCustomProperties
    </div>
  );
};

export default CssCustomProperties;

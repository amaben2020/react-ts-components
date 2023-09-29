import { useThemeConfig } from "./hooks/useThemeConfig";
import "./style.css";
const CssCustomProperties = () => {
  const { variables } = useThemeConfig("Oat");

  return (
    <div className="wrapper" style={variables}>
      CssCustomProperties
    </div>
  );
};

export default CssCustomProperties;

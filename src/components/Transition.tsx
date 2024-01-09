import { useLocation } from "react-router-dom";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return <div key={location?.pathname}>{children}</div>;
};

export default Transition;

import ClassComponent from "./1.1_myFirstReactComponent/ClassComponent";
import FunctionComponent from "./1.1_myFirstReactComponent/FunctionComponent";
import { FunctionalComponent } from "./1.1_myFirstReactComponent/FunctionalComponent";

export const Home = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center">
      <FunctionComponent earth="Earth" />
      <FunctionalComponent world="World" />
      <ClassComponent jsd="JSD7!" />
    </div>
  );
};

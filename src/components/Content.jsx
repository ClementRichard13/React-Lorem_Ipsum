import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="container">
      <Title name={props.title} />

      <Description text={props.description} />
    </div>
  );
};
export default Content;

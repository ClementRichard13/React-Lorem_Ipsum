import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Content
        title={"Lorem"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae dolor? Culpa, veritatis illo sequi eligendi dolorem rem magnam expedita sit, necessitatibus veniam quae. Recusandae dolorem laboriosam illum in dolore."
        }
      />
      <Content
        title={"ipsum"}
        description={
          "OUI Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, molestiae dolor? Culpa, veritatis illo sequi eligendi dolorem rem magnam expedita sit, necessitatibus veniam quae. Recusandae dolorem laboriosam illum in dolore."
        }
      />
    </div>
  );
}

export default App;

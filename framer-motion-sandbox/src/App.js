import Button from "./UI/Button";
import List from "./List/List";
import Card from "./UI/Card";

import "./App.css";

const App = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="container__card">
            <Card />
          </div>
          <div className="container__button">
            <Button />
          </div>
        </div>
      </section>
      <div className="stagger-container">
        <List />
      </div>
    </>
  );
};

export default App;

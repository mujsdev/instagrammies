import { toast, cssTransition } from "react-toastify";

import "./App.css";
import "./Transition.css";
import "react-toastify/dist/ReactToastify.min.css";

toast.configure();

const slideInTop = cssTransition({
  enter: "slide-in-blurred-top",
  exit: "slide-out-blurred-top",
});

const App = () => {
  const def = () =>
    toast("🍞 Such tasty, much wow.", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const info = () =>
    toast.info("🍞 Such tasty, much wow.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: slideInTop,
    });

  const success = () =>
    toast.success("🍞 Such tasty, much wow.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const warn = () =>
    toast.warn("🍞 Such tasty, much wow.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const err = () =>
    toast.error("🍞 Such tasty, much wow.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dark = () =>
    toast.dark("🍞 Such tasty, much wow.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, it's me.</h1>
        <code>&lt;the pee tag&gt;</code>

        <div className="App-grid">
          <a className="App-link" onClick={def}>
            <span className="App-link--default">default</span>
          </a>

          <a className="App-link" onClick={info}>
            <span className="App-link--info">info</span>
          </a>

          <a className="App-link" onClick={success}>
            <span className="App-link--success">success</span>
          </a>

          <a className="App-link" onClick={warn}>
            <span className="App-link--warn">warn</span>
          </a>

          <a className="App-link" onClick={err}>
            <span className="App-link--err">error</span>
          </a>

          <a className="App-link" onClick={dark}>
            <span className="App-link--dark">dark</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;

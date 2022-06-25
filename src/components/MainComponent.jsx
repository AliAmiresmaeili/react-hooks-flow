import * as React from "react";
import Child from "./ChildComponent";

export default function Main() {
  console.log("%cMain: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = React.useState(() => {
    console.log("%cMain: useState(() => false)", "color: tomato");
    return false;
  });

  React.useEffect(() => {
    console.log("%cMain: useEffect(() => {})", "color: LightCoral");
    return () => {
      console.log(
        "%cMain: useEffect(() => {}) cleanup 🧹",
        "color: LightCoral"
      );
    };
  });

  React.useEffect(() => {
    console.log("%cMain: useEffect(() => {}, [])", "color: MediumTurquoise");
    return () => {
      console.log(
        "%cMain: useEffect(() => {}, []) cleanup 🧹",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%cMain: useEffect(() => {}, [showChild])", "color: HotPink");
    return () => {
      console.log(
        "%cMain: useEffect(() => {}, [showChild]) cleanup 🧹",
        "color: HotPink"
      );
    };
  }, [showChild]);

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{" "}
        show child
      </label>
      <div
        style={{
          padding: 10,
          margin: 10,
          height: 50,
          width: 50,
          border: "solid",
        }}
      >
        {showChild ? <Child /> : null}
      </div>
    </>
  );

  console.log("%cMain: render end", "color: MediumSpringGreen");

  return element;
}

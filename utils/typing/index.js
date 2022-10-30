import { useRef, useEffect } from "react";
import Typed from "typed.js";
export const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "  پیش از آینده ات حرکت کن  ",

        " شرکت مدیریت سرمایه آتیه خواهان  ",
      ],

      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div style={{ color: "#75edf3", textAlign: "center" }}>
      <div>
        <span style={{ whiteSpace: "pre", fontSize: "25px" }} ref={el} />
      </div>
    </div>
  );
};

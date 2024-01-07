import { useState } from "react";

const Destination = () => {
  const [red, setRed] = useState<"even" | "odd">();
  const [total, setTotal] = useState<
    2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  >(2);

  return <div></div>;
};

export default Destination;

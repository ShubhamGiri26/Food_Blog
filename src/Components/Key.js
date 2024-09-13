import React from "react";

const array = [
  {
    fname: "food1",
    desc: "this is good",
  },
  {
    fname: "food2",
    desc: "this is good",
  },
  {
    fname: "food3",
    desc: "this is good",
  },
];
const Heading = ({ fname, desc }) => {
  return (
    <>
      <h1>
        {fname}
        {desc}
      </h1>
    </>
  );
};

const Key = () => {
  return (
    <>
      <Heading fname={array[2].fname} />
      <Heading desc={array[2].desc} />
    </>
  );
};

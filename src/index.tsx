import React from "react";

type Props = {
  src: string;
  alt: string;
};

export default function FancyRadius(props: Props) {
  let p = [];
  for (let i = 0; i < 4; i++) {
    const num = Math.floor(10 + Math.random() * 81);
    const left = 100 - num;
    p.push(num + "%");
    p.push(left + "%");
  }
  const shape = `${p[0]} ${p[1]} ${p[2]} ${p[3]} / ${p[4]} ${p[6]} ${p[7]} ${p[5]}`;

  return (
    <img src={props.src} alt={props.alt} style={{ borderRadius: shape }} />
  );
}

import React from "react";
import Styles from "../features/features.module.css";
import ListFeatures from "@/data/ListFeatures";

export default function Features() {
  return (
    <section>
      <div className={Styles.features}>
        <h2>What Makes My Custom Bio Link Special?</h2>
        <ul>
          {ListFeatures.map((feature, index) => (
            <li key={index}>
              <h3>{feature.tittle}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

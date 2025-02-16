import React from 'react';
import Styles from "../order/order.module.css";
import ListOrder from "@/data/ListOrder";

export default function Order() {
  return (
    <section>
      <div className={Styles.order}>
        <div>
            <h3>Want a Custom Bio Link? Order now below!</h3>
        </div>
        <div>
          <ul>
            {ListOrder.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt={item.text} width="20" height="20" />{" "}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

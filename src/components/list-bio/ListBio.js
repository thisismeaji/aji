import React from "react";
import ListLink from "@/data/ListLink";
import Styles from "../list-bio/listbio.module.css";

export default function ListBio() {
  return (
    <section>
      <div className={Styles.listBio}>
        <div>
          <h2>List of Bio Links I Have Created</h2>
        </div>
        <div>
          <ul>
            {ListLink.map((item, index) => (
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
  );
}

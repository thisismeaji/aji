import React from 'react';
import Styles from "../profile/profile.module.css";
import Image from 'next/image';

export default function Profile() {
  return (
    <section>
      <div className={Styles.profile}>
        <Image
          src="/assets/images/foto-profile.png"
          width={512}
          height={512}
          alt='Foto Profile aji'
        />
        <h1>Ajisaka Kamandanu</h1>
        <h3>Frontend Developer</h3>
        <p>For me, coding is more than just writing lines of code. It's about solving problems, creating smooth experiences, and bringing ideas to life</p>
      </div>
    </section>
  );
}

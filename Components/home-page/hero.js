import Image from "next/image";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/Mypic.jpg"}
          alt="My personal image"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi I'm Hooman</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias
        iusto deserunt laboriosam, vel, saepe at simi
      </p>
    </section>
  );
};

export default Hero;

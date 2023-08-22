import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { cache: "no store" },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            similique inventore cupiditate nostrum? Odio ab, temporibus iste
            suscipit maxime, ipsa repellendus iusto repudiandae enim cupiditate
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>shubham</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          facere dicta! Amet dignissimos, sit sunt reprehenderit assumenda
          ipsum, recusandae vitae aut tempore voluptatibus molestias eligendi
          dolores consequuntur. Saepe quae, voluptatum necessitatibus impedit
          ducimus quo ea. Corrupti odio recusandae dicta voluptatibus non libero
          sit deserunt architecto quod fuga ullam sint, consectetur minus
          officia minima! Iusto, nam facere consequuntur illo fuga eos! Ullam,
          et dolor molestias officiis iure dolore animi voluptas sed mollitia
          eum recusandae eos, provident esse nisi nobis non vel a.
          Necessitatibus perferendis, unde harum sint consectetur culpa quos aut
          nobis, voluptatem exercitationem sequi soluta? Aliquid neque nostrum
          ratione magni. Aut atque repellat quos iusto dolor ea velit culpa
          officiis non maxime voluptates quidem magni obcaecati eum excepturi
          sed quia explicabo quae at, deserunt provident corporis laborum
          nostrum. Sapiente nulla commodi delectus ullam! Aliquam, et nam
          voluptate neque incidunt placeat? Impedit illum mollitia error alias,
          nesciunt tempore, repellat iste facilis asperiores laudantium dolorum
          quis, nulla beatae neque illo ut. Adipisci minima possimus quae
          reprehenderit hic dolorum qui, porro aliquam! Laboriosam alias
          distinctio quo aperiam impedit doloremque, architecto tempora natus
          quod eaque, id ullam minima officiis deleniti iste eveniet nesciunt
          dolorum, cumque nostrum! Perspiciatis enim aut, minima harum dicta
          culpa non laudantium sint esse reprehenderit eius maiores doloribus
          ipsa iste impedit laboriosam aspernatur! Eaque aliquid dolore illo
          temporibus incidunt voluptatum impedit labore amet numquam
          perspiciatis culpa dolorum iusto aliquam voluptatem corrupti alias
          molestias placeat aspernatur quis, repellat perferendis iure.
          Perferendis labore at assumenda cum qui nostrum obcaecati unde animi
          quisquam ut.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

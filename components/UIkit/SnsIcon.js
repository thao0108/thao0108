import Image from "next/image";
import style from "../../styles/components/SnsIcon.module.scss";

export default function SnsIcon() {
  const imageIcons = [
    {
      path: "/images/github.svg",
      id: "github",
      page: "https://github.com/thao0108",
    },
    {
      path: "/images/twitter.svg",
      id: "twitter",
      page: "https://twitter.com/thao_0108",
    },
    {
      path: "/images/rss.svg",
      id: "zenn",
      page: "https://zenn.dev/thao_0108",
    },
    {
      path: "/images/door-open.svg",
      id: "wantedly",
      page: "https://www.wantedly.com/id/thao_0108",
    },
  ];
  return (
    <div className={style.snsIcons}>
      {imageIcons.map((icon) => (
        <div className={style.icon} key={icon.id}>
          <a href={icon.page}>
              <Image
              priority
              src={icon.path}
              className={style.image}
              height={40}
              width={40}
              alt="icon"
            />        
            <p>{icon.id}</p>
          </a>
         </div>
      ))}
    </div>
  );
}

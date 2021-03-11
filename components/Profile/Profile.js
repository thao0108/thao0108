import Image from 'next/image';
import style from './profile.module.css'
import SnsIcon from "../UIkit/SnsIcon";

export default function Profiler() {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        width={180}
        height={180}
        className={style.image}
        alt="profile"
      />
      <div className={style.description}>
          <h2 className={style.name}>tao</h2>
          <div className={style.location}>
            <Image src="/images/geo-alt.svg"width={20} height={20}/> 
            <p>神奈川県</p>
          </div>
          <p>学生やめてwebエンジニア目指して学習しています</p>
          <SnsIcon/>
      </div>
    </>
  );
}

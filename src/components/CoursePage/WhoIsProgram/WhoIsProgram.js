import { FaUserGraduate, FaArrowUp } from "react-icons/fa";

import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import Styles from "./WhoIsProgram.module.css";

function WhoIsProgram({ first, second, third, forth, genAI }) {
  return (
    <section className={Styles.container}>
      <h3>Who is this program for</h3>
      <div className={Styles.BoxDiv}>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineCastForEducation className={Styles.icon} />
            <p className={Styles.BgCont1}>Education</p>
          </div>
          <p className={Styles.BoxCont}>{first}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineWorkOutline className={Styles.icon} />
            <p className={Styles.BgCont2}>Work Exp.</p>
          </div>
          <p className={Styles.BoxCont}>{second}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <FaUserGraduate className={Styles.icon} />
{

  genAI ? (            <p className={Styles.BgCont1}>Course Prerequisites</p>):(            <p className={Styles.BgCont1}>Career Stage</p>)
}
          </div>
          <p className={Styles.BoxCont}>{third}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <FaArrowUp className={Styles.icon} />
            <p className={Styles.BgCont2}>Aspirations</p>
          </div>
          <p className={Styles.BoxCont}>{forth}</p>
        </div>
      </div>
    </section>
  );
}

export default WhoIsProgram;

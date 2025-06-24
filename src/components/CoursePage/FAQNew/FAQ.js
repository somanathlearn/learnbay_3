import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

function FAQ({ FaqData }) {
  const [state, setState] = useState(FaqData);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.FAQ}>
      {state.map((data, index) => {
        const {
          id,
          ques,
          ans1,
          dscoursefaq,
          dscoursefaq1,
          list1,
          list2,
          list3,
          list4,
          list5,
          list6,
          list7,
          list8,
          list9,
          list10,
          list11,
          list12,
          list13,
          list14,
          list15,
          list16,
          list17,
          list18,
          list19,
          list20,
          list21,
          list22,
          list23,
          list24,
          list25,
          list26,
          list27,
          list28,
          list29,
          list30,
          list31,
          ans,
          open,
          link1,
          linkText1,
          ansAfter,
          link2,
          linkText2,
          link3,
          linkText3,
          link4,
          linkText4,
          link5,
          linkText5,
          link6,
          linkText6,
          link7,
          linkText7,
          linkone,
          linksli,
          linkcode,
          linkthree,
          linkfour,
          linkfive,
          linksix,
          linktwo,
          linksone,
          linkstwo,
          linksthree,
          linksfour,
          linksfive,
          linkssix,
          span,
        } = data;

        return (
          <div
            key={id}
            className={styles.FaqWrapper}
            onClick={() => handleChange(index)}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            {open ? (
              <div className={styles.queshO} itemProp="name">
                <h3>{ques}</h3>
                <span>
                  {open ? (
                    <FaMinusCircle
                      className={styles.iconMinus}
                      style={{ fontSize: "18px" }}
                    />
                  ) : (
                    <FaPlusCircle
                      className={styles.iconPlus}
                      style={{ fontSize: "18px" }}
                    />
                  )}
                </span>
              </div>
            ) : (
              <div className={styles.quesh} itemProp="name">
                <h2>{ques}</h2>
                <span>
                  {open ? (
                    <FaMinusCircle
                      className={styles.iconMinus}
                      style={{ fontSize: "18px" }}
                    />
                  ) : (
                    <FaPlusCircle
                      className={styles.iconPlus}
                      style={{ fontSize: "18px" }}
                    />
                  )}
                </span>
              </div>
            )}

            {open ? (
              <div
                className={styles.ans}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p>
                  {ans}

                  {dscoursefaq ? (
                    <>
                      {" "}
                      <br /> <br />
                      <span>{list1}</span> <br />
                      <span>{list2}</span> <br />
                      <span>{list3}</span> <br />
                      <span>{list4}</span> <br />
                      <span>{list5}</span> <br />
                      {span && (
                        <>
                          <span>{span}</span>
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                  {dscoursefaq1 ? (
                    <>
                      <br />
                      <span>{list1}</span> <br />
                      <span>{list2}</span> <br />
                      <span>{list3}</span> <br />
                      <span>{list4}</span> <br />
                      <span>{list5}</span> <br />
                      <span>{list6}</span> <br />
                      <span>{list7}</span> <br />
                      <span>{list8}</span> <br />
                      {list9 && (<><span>{list9}</span><br/></>)}
                      {list10 && (<><span>{list10}</span><br/></>)}
                      {list11 && (<><span>{list11}</span><br/></>)}
                      {list12 && (<><span>{list12}</span><br/></>)}
                      {list13 && (<><span>{list13}</span><br/></>)}
                      {list14 && (<><span>{list14}</span><br/></>)}
                      {list15 && (<><span>{list15}</span><br/></>)}
                      {list16 && (<><span>{list16}</span><br/></>)}
                      {list17 && (<><span>{list17}</span><br/></>)}
                      {list18 && (<><span>{list18}</span><br/></>)}
                      {list19 && (<><span>{list19}</span><br/></>)}
                      {list20 && (<><span>{list20}</span><br/></>)}
                      {list21 && (<><span>{list21}</span><br/></>)}
                      {list22 && (<><span>{list22}</span><br/></>)}
                      {list23 && (<><span>{list23}</span><br/></>)}
                      {list24 && (<><span>{list24}</span><br/></>)}
                      {list25 && (<><span>{list25}</span><br/></>)}
                      {list26 && (<><span>{list26}</span><br/></>)}
                      {list27 && (<><span>{list27}</span><br/></>)}
                      {list28 && (<><span>{list28}</span><br/><br/></>)}
                      {span && (<><span>{span}</span><br/></>)}
                      {list29 && (<><span>{list29}</span><br/></>)}
                      {list30 && (<><span>{list30}</span><br/></>)}
                      {list31 && (<><span>{list31}</span><br/></>)}

                    </>
                  ) : (
                    <></>
                  )}

                  {linksli ? (
                    <>
                      <ul style={{ color: "#0072BC" }}>
                        <li>
                          <a href={linksone} target="_blank">
                            {linkone}
                          </a>
                        </li>

                        <li>
                          {" "}
                          <a href={linkstwo} target="_blank">
                            {linktwo}
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href={linksthree} target="_blank">
                            {linkthree}
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href={linksfour} target="_blank">
                            {linkfour}
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href={linksfive} target="_blank">
                            {linkfive}
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href={linkssix} target="_blank">
                            {linksix}
                          </a>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}

                  <a href={link1} target="_blank" className={styles.link}>
                    {linkText1}
                  </a>

                  <a href={link2} target="_blank" className={styles.link}>
                    {linkText2}
                  </a>
                  <a href={link3} target="_blank" className={styles.link}>
                    {linkText3}
                  </a>
                  <a href={link4} target="_blank" className={styles.link}>
                    {linkText4}
                  </a>
                  <a href={link5} target="_blank" className={styles.link}>
                    {linkText5}
                  </a>
                  <a href={link6} target="_blank" className={styles.link}>
                    {linkText6}
                  </a>
                  <a href={link7} target="_blank" className={styles.link}>
                    {linkText7}
                  </a>
                  {ansAfter}
                  {ans1}
                </p>
              </div>
            ) : (
              <div
                className={styles.ansV}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p>{ans}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default FAQ;

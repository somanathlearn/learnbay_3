import React from "react";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";

function ToolsCovered({
  devops,
  mbldevops,
  foundation,
  MarketingHR,
  Intern,
  Found,
  toolsdynamic,
}) {
  return (
    <div>
      <div className={styles.toolmain}>
        {toolsdynamic ? (
          <>
            {" "}
            <h2>Programming Languages & Tools Covered in Business Analytics</h2>
          </>
        ) : (
          <>
            {" "}
            <h2>Programming Languages & Tools Covered</h2>
          </>
        )}
        {Found ? (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/found-tool.webp"
            width={1200}
            height={150}
            loading="lazy"
            alt="tools covered"
          />
        ) : (
          <>
            {Intern ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/tools-fresher.webp"
                width={1103}
                height={300}
                loading="lazy"
                alt="tools covered"
              />
            ) : (
              <>
                {MarketingHR ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/frame_278_1x.webp"
                    width={1200}
                    height={400}
                    loading="lazy"
                    alt="tools covered"
                  />
                ) : (
                  <>
                    {foundation ? (
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group_796.webp"
                        width={1200}
                        height={400}
                        loading="lazy"
                        alt="tools covered"
                      />
                    ) : (
                      <>
                        {devops ? (
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-tools-min.webp"
                            width={1200}
                            height={400}
                            loading="lazy"
                            alt="tools covered"
                          />
                        ) : (
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/toolscover.webp"
                            width={1200}
                            height={400}
                            loading="lazy"
                            alt="tools covered"
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
      <div>
        <div className={styles.toolmobile}>
          <div className="imgWrapper">
            {Found ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/found-mbl.webp"
                width={1200}
                height={400}
                loading="lazy"
                alt="tools covered"
              />
            ) : (
              <>
                {Intern ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/freshers-mobile.webp"
                    width={400}
                    height={261}
                    loading="lazy"
                    alt="tools covered"
                  />
                ) : (
                  <>
                    {MarketingHR ? (
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Group+798.webp"
                        width={400}
                        height={400}
                        loading="lazy"
                        alt="tools covered"
                      />
                    ) : (
                      <>
                        {foundation ? (
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group_797+(1).webp"
                            width={400}
                            height={400}
                            loading="lazy"
                            alt="tools covered"
                          />
                        ) : (
                          <>
                            {mbldevops ? (
                              <Image
                                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-toolmobile-min.webp"
                                width={400}
                                height={400}
                                loading="lazy"
                                alt="tools covered"
                              />
                            ) : (
                              <Image
                                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/tools-cover-mobileview.webp"
                                width={400}
                                height={400}
                                loading="lazy"
                                alt="tools covered"
                              />
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsCovered;

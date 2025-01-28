import React from "react";
import Box from "./Box/Box";

export default function HomeContent({ show = "false" }) {
  return (
    <>
      <div
        className={`HomeContent noMob position-absolute centered w-100 
       ${show ? "show" : ""}`}
      >
        <Box position="left">
          We see a world where every business, no matter its size, can leverage
          technology to streamline operations, engage customers more
          effectively, and achieve lasting growth.
        </Box>
        <Box position="right">
          At 8-Bit Solutions, security is a top priority. We ensure all our
          solutions meet global compliance standards like GDPR, and we protect
          your intellectual property with robust legal safeguards.
        </Box>
      </div>
      <div className={`HomeContentMobile  ${show ? "show" : ""}`}>
        <div className="HomeBoxMobile">
          We see a world where every business, no matter its size, can leverage
          technology to streamline operations, engage customers more
          effectively, and achieve lasting growth.
        </div>
        <div className="HomeBoxMobile">
          At 8-Bit Solutions, security is a top priority. We ensure all our
          solutions meet global compliance standards like GDPR, and we protect
          your intellectual property with robust legal safeguards.
        </div>
      </div>
    </>
  );
}

// const HomeContentBox = styled.div`
//   display: flex;
//   max-width: 450px;
//   max-height: 250px;
//   padding: 32.5px 17.104px;
//   justify-content: center;
//   align-items: center;
//   flex-shrink: 0;
//   color: white;
//   border-radius: 25px;
//   border: 1px dashed #052453;
//   background: linear-gradient(
//       0deg,
//       rgba(0, 0, 0, 0.2) 0%,
//       rgba(0, 0, 0, 0.2) 100%
//     ),
//     linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
//     linear-gradient(
//       107deg,
//       rgba(11, 101, 238, 0.7) 2.77%,
//       rgba(0, 23, 58, 0.7) 117.6%
//     );
//   filter: blur(0.5px);
// `;

// export default function HomeContent() {
//   return (
//     <div className="position-absolute" style={{ bottom: "20%" }}>
//       <Image className="line" src={vector2} />
//       <HomeContentBox>
//         We see a world where every business, no matter its size, can leverage
//         technology to streamline operations, engage customers more effectively,
//         and achieve lasting growth.
//       </HomeContentBox>
//       <Image className="line" src={vector1} />
//       <HomeContentBox>
//         At 8-Bit Solutions, security is a top priority. We ensure all our
//         solutions meet global compliance standards like GDPR, and we protect
//         your intellectual property with robust legal safeguards.
//       </HomeContentBox>
//     </div>
//   );
// }

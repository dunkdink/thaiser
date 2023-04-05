import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

function Services() {
  return (
    <ServicesContainer id="tools">
      <ServicesH1>บริการของเรา</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Tools</ServicesH2>
          <ServicesP>
            ช่วยให้ผู้ใช้งานสามารถจัดการกับไฟล์เสียงไทยได้อย่างง่ายดายและมีประสิทธิภาพ
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>API</ServicesH2>
          <ServicesP>
            มีการเชื่อมต่อ API ที่อนุญาตให้นำเสียงไปประมวลผล
            เพื่อทำการจำแนกอารมณ์จากเสียงได้
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>How To</ServicesH2>
          <ServicesP>
            เพื่อช่วยให้ผู้ใช้งานสามารถเข้าใจและใช้งานได้อย่างถูกต้องและมีประสิทธิภาพสูงสุด
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;

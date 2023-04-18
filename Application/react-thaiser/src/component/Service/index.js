import React from "react";
import Icon1 from "../../images/tools-svgrepo-com.svg";
import Icon2 from "../../images/api-svgrepo-com.svg";
import Icon3 from "../../images/sounds-svgrepo-com.svg";
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
        <ServicesCard to="/tools">
          <ServicesIcon src={Icon1} />
          <ServicesH2>เครื่องมือ</ServicesH2>
          <ServicesP>
            ช่วยให้ผู้ใช้งานสามารถจัดการ
            <br />
            กับไฟล์เสียงไทยได้อย่างง่ายดาย
            <br />
            และมีประสิทธิภาพ
          </ServicesP>
        </ServicesCard>
        <ServicesCard to="/document">
          <ServicesIcon src={Icon2} />
          <ServicesH2>เอกสาร</ServicesH2>
          <ServicesP>
            มีการเชื่อมต่อ API ที่อนุญาต
            <br />
            ให้นำเสียงไปประมวลผล เพื่อทำ
            <br />
            การจำแนกอารมณ์จากเสียงได้
          </ServicesP>
        </ServicesCard>
        <ServicesCard to="/howto">
          <ServicesIcon src={Icon3} />
          <ServicesH2>วิธีใช้</ServicesH2>
          <ServicesP>
            เพื่อช่วยให้ผู้ใช้งานสามารถเข้าใจและใช้งานได้อย่างถูกต้องและ
            <br />
            มีประสิทธิภาพสูงสุด
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;

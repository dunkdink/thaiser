export const homeObjOne = {
  id: "home",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "การจําแนกอารมณ์จากเสียงพูดภาษาไทย",
  headline: "Classifying Emotion of Thai-Human Voice",
  description:
    `Classifying Emotion of Thai-Human Voice เป็นกระบวนการที่ใช้เทคโนโลยีการเรียนรู้เชิงลึก (deep learning) \nเพื่อจำแนกอารมณ์จากเสียงพูดของมนุษย์ภาษาไทย โดยกระบวนการนี้จะนำเสียงพูดภาษาไทยเข้าสู่ระบบแล้วให้โมเดล deep learning ทำการเรียนรู้และจำแนกว่าเสียงนั้นมีอารมณ์เป็นอย่างไร เช่น อารมณ์ของความสุข โกรธ หรือเศร้า เป็นต้น`,
  buttonLabel: "จำแนกอารมณ์",
  imgStart: false,
  img: require("../../images/svg-1.svg").default,
  alt: "emotions",
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "classify-emotions",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "การจําแนกอารมณ์",
  headline: "Classifying Emotion",
  description:
    `การจำแนกอารมณ์จากเสียงนั้นมีความสำคัญอย่างมากในการประยุกต์ใช้งานในหลายสาขาอาชีพ เช่น ด้านการแพทย์ \nที่สามารถใช้ในการวินิจฉัยโรคทางจิตเวชได้ หรือในการสื่อสารระหว่างมนุษย์และเครื่องจักร \n(human-machine interaction) เพื่อให้เครื่องจักรสามารถเข้าใจและตอบสนองต่อความต้องการของมนุษย์ได้ดียิ่งขึ้น`,
  buttonLabel: "เอกสารที่เกี่ยวข้อง",
  imgStart: true,
  img: require("../../images/svg-2.svg").default,
  alt: "emotions",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "howto",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: `สามารถจำแนกอารมณ์\nออกจากเสียงได้\nอย่างง่ายดาย\nเพียงคลิกเดียว`,
  description:
    "ด้วยเทคโนโลยี AI ที่ฉลาดของเรา คุณสามารถลดเวลาในการจัดการไฟล์เสียงของคุณ และช่วยให้การสื่อสารของคุณดูมีชีวิตชีวาขึ้น เมื่อรับรู้อารมณ์ของฝ่ายตรงข้าม",
  imgStart: false,
  buttonLabel: "วิธีการใช้งาน",
  img: require("../../images/undraw_click_here_re_y6uq.svg").default,
  alt: "emotions",
  dark: false,
  primary: true,
  darkText: true,
};

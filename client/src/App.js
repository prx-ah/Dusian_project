import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [val, setVal] = useState("Upload image to predict");
  
  const [filename, setFilename] = useState("No file uploaded")

  const [des, setDes] = useState("No disease found");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      });
  }, []);
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios.post("http://localhost:5000/upload", formData).then((res) => {
        console.log(res.data.class);
        if (res.data.class == "Healthy plants") {
          setVal("Healthy plants");
          setDes("พืชนี้ดูจะสุขภาพดีนะ! แต่จะดีกว่านี้ไหมถ้าเราสามารถป้องกันโรคระบาดได้ โดยโรคระบาดในสวนทุเรียนส่วนใหญ่จะมาพร้อมกับปัญหาภัยแล้งและปัญหาน้ำท่วม ท้าให้ต้นทุเรียนอ่อนแอและขาดสารอาหารได้ง่าย จึงง่ายต่อการเกิดโรคระบาดต่างๆ ได้ ศัตรูที่ส้าคัญของต้นทุเรียน ได้แก่ โรครากเน่าโคนเน่า โรคจากเชื้อราไฟทอฟธอรา โรคราใบติด โรคราสีชมพู โรคเพลี้ยไก่แจ้ แนวทางแก้ไข ได้แก่ 1. ควรดูแลเอาใจใส่ต้นทุเรียนอย่างใกล้ชิดทุกวัน โดยสังเกตอาการของต้นทุเรียนก่อนที่จะเป็นโรค อาทิสังเกตได้จากใบทุเรียนจะมีอาการสลดและใบตกใบเป็นสีเหลืองตั้งแต่ช่วงสายๆหรือตอนบ่ายซึ่งบ่งชี้ถึงการ เข้าท้าลายของโรครากเน่าและต้นเน่าอัน เนื่องมาจากเชื้อราไฟทอปเทอรา ดังนั้นให้รีบตัดแต่งใบที่มีอาการออกให้ หมด และฉีดพ่นยาป้องกันต่อไป 2. คัดเลือกพันธุ์ที่ทนต่อโรคระบาด อาทิ หมอนทอง ชะนี ก้านยาว ก่อนที่จะปลูกในสวนทุเรียน 3. เมื่อต้นทุเรียนมีลักษณะเกิดโรคระบาด ให้รีบก้าจัดต้นที่เป็นโรคทันที โดยการโค่นหรือตัดแต่งกิ่ง แล้วเผาท้าลายทิ้งทันที เพื่อไม่ให้ระบาดไปยังทุเรียนต้นอื่น 4. ฉีดพ่นยาเพื่อป้องกันโรค หรือใช้การบ้าบัดด้วยอินทรีย์ หรือสารชีวภาพที่สามารถท้าขึ้นเองได้ เพื่อใช้ในการควบคุมเชื้อโรค และเชื้อราต่างๆ 5. ใช้วิธีการรักษาตามอาการ โดยวิธีการตรวจหาตําแหน่งที่เป็นโรค เพื่อใช้การฝังเข็มยาที่บริเวณล้า ต้นที่มีอาการทิ้งไว้ แล้วใช้สารเคมีราดที่บริเวณโคนต้น หรือใช้มีดหรือสิ่งมีคมถากเปลือกบริเวณที่เป็นโรคออก บางๆ เพื่อให้ทราบขอบเขตของแผลที่ถูกเชื้อโรคเข้าท้าลายอย่างชัดเจน เพื่อให้ง่ายต่อการรักษา 6.ขอให้หน่วยงานของรัฐที่เกี่ยวข้องมีช่วยดูแลและแนะนําการกําจัดโรคระบาด เช่น เกษตรอําเภอ พัฒนาที่ดิน หรือปรึกษาผู้รู้ นักวิชาการ ร้านขายปุ๋ยและยา เป็นต้น");
        }
        else if(res.data.class == "Plants with powdery disease"){
          setVal("Plants with powdery disease");
          setDes("โรคราขาว สาเหตุเกิดจากเชื้อราออยเดียม (Oidium sp.) โดยพบกลุ่มของเชื้อราสีขาวมีลักษณะคล้ายฝุ่นแป้งปกคลุมผิวเปลือกทุเรียน เชื้อสามารถเข้าทําลายผล ทุเรียนได้ตั้งแต่เริ่มติดผลอ่อนจนกระทั่งผลแก่จําหน่ายได้ ซึ่งการเข้าทําลายของเชื้อในระยะติดผลใหม่ๆ ก็อาจจะทําให้ผลอ่อนนั้นร่วงหล่นได้ หรือถ้าเป็นกับผลที่กําลังเจริญเติบโตก็จะทําให้สีผิวของทุเรียนผิดปกติ ไม่เป็นที่ต้องการของตลาดและผู้บริโภค นอกจากนี้ยังทําให้ราคาผลผลิตตกต่ำลง โดยเชื้อรานี้มีการแพร่ระบาดทางลมในระยะที่อากาศเย็นและแห้งแล้ง สามารถป้องกันและกำจัดได้โดย 1. ในแหล่งปลูกที่สภาพแวดล้อมเอื้ออํานวยต่อการระบาดของโรค เกษตรกรควรตรวจตราผล ทุเรียนในแปลงปลูกอย่างสมํ่าเสมอ 2. ฉีดพ่นสารเคมีป้องกันกําจัดโรค เช่น เบนโนมิลหรือกํามะถันผงชนิดละลายน้ํา (wettable sulfur) เป็นต้น");
        }
        else if(res.data.class == "Plants with rust disease"){
          setVal("Plants with rust disease");
          setDes("โรคราสนิม มีเชื้อสาเหตุคือ รา Puccinia allii Rud. เกิดบนก้านผนังบาง ไม่มีสี รูปร่างกลมหรือค่อนข้างกลมเป็นส่วนใหญ่ พบเม็ด oil content อยู่ภายในสปอร์ สีอำพัน จนถึงเหลืองอ่อน ผนังสปอร์หนาเท่ากันทั้งสปอร์ และใสไม่มีสี โดยเกิดแผลเป็นจุด หรือขีดนูนเล็กๆ สีเหลืองอมส้ม ไปตามแนวความยาวของใบ เกิดทั้ง ด้านบนใบและใต้ใบ ต่อมาแผลขยายใหญ่ขึ้นและแตกปริออก เห็นสปอร์สีเหลืองส้มคล้ายสนิม เกิดกระจาย ทั่วใบ ถ้าเป็นรุนแรงใบจะเหลืองและแห้งตาย นอกจากเกิดโรคบนใบแล้วยังเกิดโรคที่ก้านดอกอีกด้วย โดยโรคจะแพร่ระบาดโดยสปอร์ของเชื้อราปลิวไปกับลม เข้าทำลายพืชอาศัย และมีชีวิต อยู่รอด ได้นานหลายปี โรคราสนิมจะระบาดได้ดี หากพืชอยู่ในสภาวะไม่เหมาะสมบางประการ เช่น แห้งแล้ง เกินไป หรือชื้นแฉะเกินไป พืชได้รับไนโตรเจนสูงเกินไป หรือขาดปุ๋ยโปแตสเซียมหรือปลูกพืชแน่นเกินไป โรค มักเกิดในช่วงอากาศเย็น คือปลายฤดูฝน-ฤดูหนาว สามารถป้องกันกำจัดได้โดย 1. เก็บเศษใบและต้นพืชที่เป็นโรคไปเผาทำลาย เพื่อขจัดแหล่งแพร่เชื้อ 2. ปรับปรุงดินด้วยปูนขาว และปุ๋ยอินทรีย์ 3. ปลูกพืชอื่นที่ไม่ใช่ พืชสกุลหอมกระเทียมสลับ เพื่อลดพืชอาศัยของเชื้อรา 4. เมื่อเกิดโรค พ่นสารป้องกันกำจัดโรคพืช ออกซีคาร์บอกซิน 20 % EC อัตรา 10-20 กรัม/น้ำ 20");
        }
      });
      // alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }

  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFilename(file.name);
  };
  


  return (
    <>
      <h1 className=" mt-[5rem] mb-4 text-3xl font-extrabold dark:text-indigo-800 md:text-5xl lg:text-6xl">
        <span className="bigtext">
          Dusian Machine Learning Model to
        </span>
        <br /> 
        <span className="centext">
          Detect Plant's Diseases
        </span>
      </h1>
      <br></br>
      <p className="text-lg font-normal text-white lg:text-xl">
        Upload the image file to detect.
      </p>
      <form onSubmit={handleSubmit}>
    
      <div className="flex w-full items-start justify-center bg-grey-lighter mb-5 mt-[5rem] ">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-600">
          <svg
            className="w-8 h-8"
            fill="blue"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file"  name="file" className="hidden" onChange={(e) => {setFile(e.target.files[0]); handleFileUpload(e) }}/>
          <p></p>
        </label>
      </div>
      <span className="text-white">File Uploaded : {filename}</span>
  
      

      <div className="flex items-center justify-center">
        <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5" type="submit">
          PREDICT
        </button>
      </div>
      </form>

      <div className=" mt-[5rem] mb-4 text-2xl">
        <span className="medtext">
          Detected Image is : {val}
        </span>
        <br></br><br></br><br></br>
        <span className="description">
          <p className="transparent-bg">{des}
          </p>
          
        </span>
      </div>
    </>
  );
}

export default App;

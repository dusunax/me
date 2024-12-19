"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BusinessNameCard() {
  const [dirty, setDirty] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 border-2 pb-10 relative z-100">
      <p className="text-gray-700 px-6 py-4 break-keep">
        안녕하세요. 명함 QR 코드를 통해서 접속해주셔서 감사드립니다. <br />
        퇴사 후 이직 준비를 하면서 하고 싶은 걸 다 하고 있는 개발자
        두선아입니다. 참고로 명함은 전부 집에서 하나하나 잘라서 만들었답니다.😎
      </p>

      <div className="h-4">
        {!dirty && (
          <p className="text-xs text-gray-500">명함을 드래그해보세요</p>
        )}
      </div>
      <div
        className="h-[200px] relative w-full flex items-center justify-center"
        onPointerDown={() => setDirty(true)}
      >
        <div className="w-[80%] pb-[40%] bg-black opacity-10 rounded-xl absolute blur-sm"></div>
        <NameCard />
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <Link
          href="https://github.com/dusunax"
          className="bg-black text-white p-2 rounded-md"
        >
          깃허브 바로가기
        </Link>
        <Link
          href="https://www.linkedin.com/in/dusunax/"
          className="bg-black text-white p-2 rounded-md"
        >
          링크드인 바로가기
        </Link>
      </div>
    </div>
  );
}

function NameCard() {
  return (
    <motion.div
      className="absolute w-[80%] pb-[40%] flex flex-col items-center justify-center border-2 border-black shadow-xl rounded-xl"
      drag
      whileHover={{ y: -5, rotate: "10deg" }}
      whileDrag={{ y: -10, scale: 1.1, rotate: 0 }}
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
        <h1 className="text-4xl font-bold">두선아</h1>
        <p>dusunax@gmail.com</p>
        <p>github.com/dusunax</p>
      </div>
    </motion.div>
  );
}

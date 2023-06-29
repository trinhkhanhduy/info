"use client";
import React from "react";
import Image from "next/image";
import pament from "../image/payment.png";
import { VscCopy } from "react-icons/vsc";
import momo from '../image/momo.svg'
interface propsModal {
	isOpen: boolean;
	onClose: (modalOpen: boolean) => void;
}

const Modal = ({ isOpen, onClose }: propsModal) => {
	const [isOpenCp, setIsOpenCp] = React.useState(false);
    const handleSave = async () => {
        
		const textToCopy = "070116901674";
        try {
            setIsOpenCp(true);
			await navigator.clipboard.writeText(textToCopy);
		} catch (error) {
			console.error("Lỗi khi lưu vào clipboard:", error);
		}
	};
	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setIsOpenCp(false);
		}, 5000);
		return () => {
			clearTimeout(timeout);
		};
	}, [isOpenCp]);
	if (!isOpen) return null;

	return (
		<div className="fixed right-0 bottom-0 top-0 left-0 bg-[rgba(100,100,100,0.5)]">
			<div className="bg-white overflow-hidden max-w-[400px] w-[90%] rounded-lg p-4 absolute opacity-1 text-black top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
				<div style={{ border: "2px solid rgb(0,191,255)" }}>
					<Image src={pament} alt="Image" className="" width={400} height={400} />
					<p className="text-center font-semibold">( Sacombank ) Trịnh Khánh Duy</p>
					<div className="flex items-center justify-center">
						<p className="text-center font-bold">070116901674</p>
						<VscCopy
							opacity={isOpenCp ? 0.3 : 1}
							onClick={() => {
								
								handleSave();
							}}
						/>
					</div>
				</div>
				<p style={{borderBottom:"1px solid rgb(100,100,100)"}} className="before:content-['Hoặc'] before:absolute before:left-[50%] before:translate-x-[-50%] before:mt-[-10px] before:w-[60px] before:text-[13px] before:text-center before:font-[300] before:bg-[#FFFF] mt-[11px] mb-[15px]"></p>
				<a href="https://me.momo.vn/trinhkhanhduy" className="flex justify-center items-center p-2 " style={{border:"2px solid rgb(0,191,255)"}}><Image src={momo} alt="momo"></Image></a>
				<button className="bg-blue-500 text-white px-4 py-1 mt-2 rounded block mx-auto" onClick={() => onClose(isOpen)}>
					Đóng
				</button>
			</div>
			{isOpenCp && <div className={`absolute bg-white bottom-0 left-[50%] translate-x-[-50%] text-black p-3 rounded`}>✔ Đã lưu vào bộ nhớ!</div>}
		</div>
	);
};

export default Modal;

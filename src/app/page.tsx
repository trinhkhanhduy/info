"use client";
import React from "react";
import { FaUserPlus, FaInstagram, FaArrowRightToBracket, FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import face from "../image/face.svg";
import ins from "../image/ins.svg";
import zalo from "../image/zalo.svg";
import card from "../image/card.gif";
import avatar from "../image/anhmeo.jpg"
import "./pagecss.css";
import Modal from "./modal";
export default function Home() {
	const [modalOpen, setModalOpen] = React.useState(false);

	const handleOpenModal = (isModal: boolean) => {
		setModalOpen(!isModal);
	};
	const clickAddDB = (e: any) => {
		var contact = {
			name: "Khánh Duy Trịnh",
			phone: "0964064694",
			email: "khanhduytrinh2608@gmail.com",
		};

		var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN;CHARSET=UTF-8:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
		var blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
		var url = URL.createObjectURL(blob);
		const newLink = document.createElement("a");
		newLink.download = contact.name + ".vcf";
		newLink.textContent = contact.name;
		newLink.href = url;
		newLink.click();
	};
	const onClickOn = (id: number) => {
		const urlPage = {
			face: "fb://facewebmodal/f?href={https://www.facebook.com/Dui.duy26}",
			ins: "instagram://user?username=khanhduy_ddd",
			zalo: "https://www.zalo.me/0964064694",
		};
		const url = id === 0 ? urlPage.ins : id === 1 ? urlPage.face : urlPage.zalo;
		const newLink = document.createElement("a");
		newLink.href = url;
		newLink.click();
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between pl-9 pr-9 pt-2 ">
			<div className="flex justify-center items-center w-[100%] h-[100%] flex-col ">
				<div className="w-[100%] h-[100%]  items-center flex-col flex mb-2">
					<div className="w-[200px] h-[200px] overflow-hidden rounded-[50%] border-solid bg-slate-500 text-center ">
						<Image className="max-w-[100%] max-h-[100%] " src={avatar} alt="avatar"></Image>
					</div>
					<div className="font-[600] text-[25px] text-center text-black">Trịnh Khánh Duy</div>
					<span>😉</span>
					<div onClick={(e) => clickAddDB(e)} className="bg-slate-950 w-[50%] max-w-[15rem] text-gray-50 flex justify-center items-center rounded-[5px] h-[45px]">
						<FaUserPlus style={{ marginRight: "5px" }} />
						Thêm danh bạ
					</div>
				</div>
				<div className="w-[100%] h-[100%] flex flex-col gap-5 items-center pb-3">
					<article className="cta" onClick={() => onClickOn(0)}>
						<div className="cta__text-column">
							<a>
								<Image src={ins} style={{ width: "100%", height: "100%" }} alt="ins" />
							</a>
							<p>Instagram</p>
							<a href="instagram://user?username=khanhduy_ddd">
								<FaArrowRightToBracket />
							</a>
						</div>
					</article>

					<article className="cta" onClick={() => onClickOn(1)}>
						<div className="cta__text-column">
							<a>
								<Image src={face} style={{ width: "100%", height: "100%" }} alt="face" />
							</a>
							<p>Facebook</p>
							<a href="fb://facewebmodal/f?href={https://www.facebook.com/Dui.duy26}">
								<FaArrowRightToBracket />
							</a>
						</div>
					</article>
					<article className="cta" onClick={() => onClickOn(2)}>
						<div className="cta__text-column">
							<a>
								<Image src={zalo} style={{ width: "100%", height: "100%" }} alt="zalo" />
							</a>
							<p>Zalo</p>
							<a href="https://www.zalo.me/0964064694">
								<FaArrowRightToBracket />
							</a>
						</div>
					</article>
					<article className="cta" onClick={() => handleOpenModal(modalOpen)}>
						<div className="cta__text-column">
							<a>
								<Image src={card} style={{ maxWidth: "100%", maxHeight: "100%" }} alt="zalo" />
							</a>
							<p>Payment</p>
							<a>
								<FaArrowRightToBracket />
							</a>
						</div>
					</article>
				</div>
			</div>
			<Modal isOpen={modalOpen} onClose={() => handleOpenModal(modalOpen)} />
		</main>
	);
}

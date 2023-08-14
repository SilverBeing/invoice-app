import { useTheme } from "@/context/theme";
import { logo, silver } from "@/images";
import Image from "next/image";
import { themes } from "@/context/theme";
import { BsFillCloudMoonFill, BsFillCloudSunFill } from "react-icons/bs";
import { useRef, useState } from "react";
import Modal from "./Modal";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { FaStaylinked } from "react-icons/fa";

export default function Navbar() {
	const [lightMode, setLight] = useState(true);
	const [view, setView] = useState(false);
	const modalRef = useRef();
	const [ref] = useOnClickOutside(modalRef, () => setView(false));

	const { changeTheme } = useTheme();
	const handleTheme = () => {
		setLight((curr) => !curr);
		changeTheme((lightMode) => (lightMode ? themes.light : themes.dark));
	};
	return (
		<div className="md:h-full h-[90px]  min-w-[100px] justify-between  flex md:block  z-30 bg-[#1e2139] w-[100%] md:w-[5%] md:rounded-tr-[20px] md:rounded-br-[20px] md:fixed top-0 left-0">
			<div className=" relative isolate z-30 w-[20%] md:w-full ">
				<div
					className="w-full md:w-full isolate before:z-[-1] before:contents-[''] 
				before:absolute before:w-full   before:md:w-full before:bottom-0 before:h-1/2
				before:rounded-tl-[30px]  before:bg-[#9277FF]
				bg-[#7C5DFA] flex justify-center items-center h-[90px]
				rounded-tr-[20px] rounded-br-[20px]">
					<Image src={logo} alt="logo" />
				</div>
			</div>
			<div className=" flex gap-5 md:block items-center relative w-[40%]  md:w-full h-full ">
				<div className="md:absolute left-0 z-30 w-[45%] md:w-[100%]  text-black md:bottom-[200px]">
					<button
						className="text-center mx-auto md:border-b border-b-[#494E6E] py-[30px] w-full"
						onClick={handleTheme}>
						{lightMode ? (
							<BsFillCloudSunFill
								style={{ margin: "auto", fontSize: "25px", color: "#858BB2" }}
							/>
						) : (
							<BsFillCloudMoonFill
								style={{ margin: "auto", fontSize: "25px", color: "#858BB2" }}
							/>
						)}
					</button>
				</div>
				<div className="md:w-[50px] w-[20%]  md:absolute md:bottom-[120px] md:left-[50%] md:translate-x-[-50%]">
					<button className="w-full" onClick={() => setView(true)}>
						<Image
							src={silver}
							alt=""
							style={{ width: "100%", borderRadius: "50%", margin: "auto" }}
						/>
					</button>
				</div>
			</div>
			<Modal
				isShowing={view}
				hide={() => setView(!view)}
				render={(hide) => (
					<div className="w-full h-full backdrop-blur-[5px] bg-gradient-r from-[rgba(0, 0, 0, 0.7)] to-[rgba(0, 0, 0, 0.7)]">
						<div
							ref={ref}
							className="w-[60%] mx-auto flex items-center justify-center flex-col h-full my-auto text-center">
							<div>
								<Image
									src={silver}
									alt=""
									style={{
										width: "170px",
										borderRadius: "50%",
										margin: "auto",
									}}
								/>
							</div>
							<a
								className="text-white inline-flex gap-2 items-center font-bold text-[20px] my-4 underline"
								href="https://twitter.com/IdahosaSilver"
								target="_blank">
								Twitter{" "}
								<span>
									<FaStaylinked />
								</span>
							</a>
							<a
								className="text-white font-bold gap-2 inline-flex items-center text-[20px] underline"
								href="https://www.linkedin.com/in/silver-idahosa/"
								target="_blank">
								LinkedIn{" "}
								<span>
									<FaStaylinked />
								</span>
							</a>
						</div>
					</div>
				)}
			/>
		</div>
	);
}

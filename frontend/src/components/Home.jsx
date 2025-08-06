import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ComingSoon01Icon } from "@hugeicons/core-free-icons";
const Home = () => {
	return (
		<div className="w-[800px]  h-full flex flex-col items-center  ">
			<div className="w-full flex items-center  mt-10">
				<img src={Logo} alt="logo" className="w-14 h-14" />
				<span className="font-black text-5xl">
					{/* Intra Departmental Coding Contest */}
					IDCC
				</span>
			</div>
			<div className="w-full  mt-6">
				<span className="w-max-fit bg-accent  px-4 py-2 rounded-md">
					Current Contest
				</span>
			</div>

			{/* <div className="flex flex-col font-bold text-center">
				<span className="text-6xl">INTRA DEPARTMENTAL</span>
				<span className="text-5xl">CODING CONTEST</span>
			</div> */}
			<div className="w-full m-4 flex items-center justify-center">
				{/* <p className="text-lg bg-red-900 rounded-md">
					IDCC is a coding competition organized by the Department of
					Information Technology. The contest aims to foster a spirit of
					innovation, sharpen problem-solving skills, and promote coding
					excellence among students.border-yellow-300bg-yellow-100 text-yellow-800
				</p> */}
				<div className="flex items-center gap-2  justify-center border border-yellow-300 bg-yellow-50 text-yellow-800 flex-col  mt-4 w-full  font-semibold p-4 rounded-md   shadow-sm">
					<HugeiconsIcon icon={ComingSoon01Icon} size={90} />
					<span>
						Solutions to the coding problems are uploaded shortly after the
						contest.
					</span>
				</div>
			</div>

			<div className="w-full  flex flex-col mt-4 gap-4 py-4">
				<span className="max-w-max underline  underline-offset-4 font-bold py-2 rounded-md">
					Previous contest problems:
				</span>

				<div className="w-full h-auto">
					<div className="w-full flex flex-col gap-2 border border-black/40 rounded-md shadow-md p-2">
						<span className="font-bold">Contest #1</span>

						<div className="w-full flex  gap-1 justify-between items-center  border border-black/30 p-4 rounded-md">
							<div className=" gap-2 flex items-center">
								<span>1.</span>
								<p className="font-semibold">
									Longest Substring Without Repeating Characters
								</p>
								<span className="ml-1 px-2  py-1 text-sm rounded-md bg-red-200 font-bold text-red-900">
									Hard
								</span>
							</div>
							<div className="flex  gap-2">
								<span className="py-1 px-2 border border-black/30 text-[12px] rounded-full">
									Array
								</span>
								<span className="py-1  px-2 border border-black/30 text-[12px] rounded-full">
									Strings
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

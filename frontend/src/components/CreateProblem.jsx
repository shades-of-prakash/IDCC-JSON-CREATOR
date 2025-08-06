import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft04Icon } from "@hugeicons/core-free-icons";
import TiptapEditor from "./TiptapEditor";

const CreateProblem = () => {
	const [form, setForm] = useState({
		contestName: "",
		studentName: "",
		rollNo: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};
	const navigate = useNavigate();
	const handleClick = () => navigate(-1);

	return (
		<div className=" w-full h-full flex flex-col p-6 gap-6 items-center justify-center">
			<div className="flex flex-col w-180">
				<div className="w-full mb-6 flex items-center justify-between">
					<div
						style={{}}
						className="flex gap-2 items-center text-2xl font-bold  text-gray-800"
					>
						<div
							onClick={handleClick}
							className="w-10 h-10 rounded-md text-secondary hover:bg-secondary hover:text-primary flex items-center justify-center cursor-pointer"
						>
							<HugeiconsIcon icon={ArrowLeft04Icon} />
						</div>
						<span>Create Problem</span>
					</div>
					<div className="flex gap-2">
						<Link
							to="/view-problems"
							className="bg-accent px-4 py-2 rounded-md"
						>
							View Problems
						</Link>
					</div>
				</div>

				<div className="w-full flex flex-col gap-4">
					<input
						type="text"
						name="studentName"
						placeholder="Student Name"
						value={form.studentName}
						onChange={handleChange}
						className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
					/>

					<input
						type="text"
						name="rollNo"
						placeholder="Roll Number"
						value={form.rollNo}
						onChange={handleChange}
						className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-secondary"
					/>
					<TiptapEditor />
				</div>
			</div>
		</div>
	);
};

export default CreateProblem;

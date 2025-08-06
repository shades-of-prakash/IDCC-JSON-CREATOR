import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Placeholder } from "@tiptap/extension-placeholder";

const TiptapEditor = () => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				bulletList: {
					HTMLAttributes: {
						class: "list-disc ml-10",
					},
				},
				orderedList: {
					HTMLAttributes: {
						class: "list-decimal ml-10",
					},
				},
			}),
			Image,
			TextStyle,
			Color,
			Placeholder.configure({
				placeholder: "Describe your problem here...",
			}),
		],
		content: "",
		editorProps: {
			attributes: {
				class: "prose max-w-none min-h-64 overflow-y-auto rounded outline-none",
			},
		},
	});

	const [showDialog, setShowDialog] = useState(false);
	const [imageFile, setImageFile] = useState(null);
	const [imageLink, setImageLink] = useState("");
	const [generating, setGenerating] = useState(false);
	const [linkGenerated, setLinkGenerated] = useState(false);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			setLinkGenerated(false);
		}
	};

	const handleGenerateLink = () => {
		if (!imageFile) return;
		setGenerating(true);
		setTimeout(() => {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImageLink(reader.result);
				setLinkGenerated(true);
				setGenerating(false);
			};
			reader.readAsDataURL(imageFile);
		}, 1500);
	};

	const handleAddImage = () => {
		if (editor && imageLink) {
			editor.chain().focus().setImage({ src: imageLink }).run();
			setShowDialog(false);
			setImageFile(null);
			setImageLink("");
			setLinkGenerated(false);
		}
	};

	const formatButtons = [
		{
			label: "Bold",
			action: () => editor.chain().focus().toggleBold().run(),
			isActive: () => editor.isActive("bold"),
		},
		{
			label: "Italic",
			action: () => editor.chain().focus().toggleItalic().run(),
			isActive: () => editor.isActive("italic"),
		},
		{
			label: "Underline",
			action: () => editor.chain().focus().toggleUnderline().run(),
			isActive: () => editor.isActive("underline"),
		},
		{
			label: "Highlight",
			action: () => editor.chain().focus().toggleHighlight().run(),
			isActive: () => editor.isActive("highlight"),
		},
		{
			label: "Bullet List",
			action: () => editor.chain().focus().toggleBulletList().run(),
			isActive: () => editor.isActive("bulletList"),
		},
		{
			label: "Ordered List",
			action: () => editor.chain().focus().toggleOrderedList().run(),
			isActive: () => editor.isActive("orderedList"),
		},
		{
			label: "H1",
			action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
			isActive: () => editor.isActive("heading", { level: 1 }),
		},
		{
			label: "H2",
			action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
			isActive: () => editor.isActive("heading", { level: 2 }),
		},
		{
			label: "Divider",
			action: () => editor.chain().focus().setHorizontalRule().run(),
			isActive: () => false,
		},
	];

	return (
		<div className="border rounded-md p-4 shadow-sm bg-white relative">
			{/* Formatting Toolbar */}
			{editor && (
				<div className="mb-4 flex flex-wrap gap-2">
					{formatButtons.map((btn) => (
						<button
							key={btn.label}
							onClick={btn.action}
							className={`text-sm px-3 py-1 border rounded ${
								btn.isActive()
									? "bg-black text-white"
									: "border-gray-300 hover:bg-gray-100"
							}`}
						>
							{btn.label}
						</button>
					))}

					<button
						onClick={() => setShowDialog(true)}
						className="text-sm px-3 py-1 border border-gray-300 rounded bg-secondary text-white hover:opacity-90"
					>
						Add Image Link
					</button>
				</div>
			)}

			{/* Editor */}
			<div className="prose max-w-none min-h-64 overflow-y-auto border border-gray-200 rounded">
				<EditorContent editor={editor} />
			</div>

			{/* Image Upload Dialog */}
			{showDialog && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-96 shadow-xl">
						<h2 className="text-lg font-semibold mb-4">Upload Image</h2>

						<input
							type="file"
							accept="image/*"
							onChange={handleFileChange}
							className="mb-4"
						/>

						{imageFile && !linkGenerated && (
							<button
								onClick={handleGenerateLink}
								disabled={generating}
								className="w-full bg-blue-600 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700 disabled:opacity-50"
							>
								{generating ? "Generating..." : "Generate Link"}
							</button>
						)}

						{linkGenerated && (
							<>
								<p className="text-green-600 mb-2 text-sm">
									✅ Link generated!
								</p>
								<button
									onClick={handleAddImage}
									className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
								>
									Add Image to Editor
								</button>
							</>
						)}

						<button
							onClick={() => {
								setShowDialog(false);
								setImageFile(null);
								setImageLink("");
								setLinkGenerated(false);
							}}
							className="mt-4 w-full text-gray-600 text-sm underline hover:text-gray-800"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TiptapEditor;

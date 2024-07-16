import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		emailjs
			.send(
				import.meta.env.NEXT_PUBLIC_SERVICE_ID,
				import.meta.env.NEXT_PUBLIC_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Hejin",
					from_email: form.email,
					to_email: "Hejin0-0@google.com",
					message: form.message,
				},
				import.meta.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(() => {
				setIsLoading(false);
				// TODO: Show success message
				// TODO: Hide an alert

				setForm({ name: "", email: "", message: "" });
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
				// TODO: Show error message
			});
	};
	const handleFocus = () => {};
	const handleBlur = () => {};

	return (
		<section className="relative flex lg:flex-row flex-col max-container">
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">Get in Touch</h1>

				<from
					className="w-full flex flex-col gap-7 mt-14"
					onSubmit={handleSubmit}
				>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Hejin"
							required
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="hejin@example.com"
							required
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Your Message
						<textarea
							name="message"
							rows={4}
							className="textarea"
							placeholder="Let me know how I can help you!"
							required
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<button
						type="submit"
						className="btn"
						disabled={isLoading}
						onChange={handleChange}
						onFocus={handleFocus}
					>
						{isLoading ? "Sending..." : "Send Message"}
					</button>
				</from>
			</div>
		</section>
	);
};

export default Contact;

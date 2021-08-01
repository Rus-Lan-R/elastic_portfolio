import React from "react";
// import githubLogo from "../../../pictures/github.svg";
// import linkedinLogo from "../../../pictures/linkedin.svg";

import { EuiListGroup } from "@elastic/eui";

const myContent = [
	{
		label: "+7 (916) 975-72-44",
		iconType: "user",
		size: "s",
	},
	{
		label: "ruslan.rodionow98@gmail.com",
		iconType: "email",
		size: "s",
	},
	{
		label: "GitHUB",
		href: "https://github.com/Rus-Lan-R",
		iconType: "heart",
		size: "s",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/ruslan-rodionov/",
		iconType: "link",
		size: "s",
	},
	{
		label: "HeadHunter",
		href: "https://hh.ru/resume/c3137271ff091e22980039ed1f6451556f4e51",
		iconType: "crosshairs",
		size: "s",
	},
];

const Contacts = () => {
	return (
		<>
			<p>Контакты:</p>
			<EuiListGroup listItems={myContent} />
		</>
	);
};

export default Contacts;

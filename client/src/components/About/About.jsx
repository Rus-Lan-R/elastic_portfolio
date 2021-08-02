import React from "react";

import { EuiFlexItem, EuiFlexGroup, EuiPanel, EuiText } from "@elastic/eui";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contcts";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";

const About = () => (
	<EuiFlexGroup style={{ margin: "5px" }}>
		<EuiFlexItem>
			<Profile />
		</EuiFlexItem>

		<EuiFlexItem>
			<EuiPanel>
				<Experience />
			</EuiPanel>
		</EuiFlexItem>

		<EuiFlexItem>
			<EuiPanel>
				<EuiText>
					<Projects />

					<Contacts />
				</EuiText>
			</EuiPanel>
		</EuiFlexItem>
	</EuiFlexGroup>
);

export default About;

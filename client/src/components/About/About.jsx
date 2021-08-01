import React from "react";
import picture from "../../pictures/photo.jpg";

import { EuiFlexItem, EuiFlexGroup, EuiPanel, EuiText, EuiImage } from "@elastic/eui";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contcts";

const About = () => (
	<EuiFlexGroup style={{ margin: "5px" }}>
		<EuiFlexItem>
			<EuiText>
				<EuiImage
					style={{ alignItems: "center" }}
					size="m"
					hasShadow
					allowFullScreen
					alt="img"
					src={picture}
				/>
				<h2>Руслан Родионов</h2>
				<p>JavaScript Developer</p>
				<h3>О себе </h3>
				<p>
					Я — JavaScript разработчик, работаю на стеке MERN (MongoDB, Express, ReactJS, Node.JS)
				</p>
				<h3>Навыки</h3>
				<ul>
					<li>ReactJS, Redux+Thunk MVC, REST API Material Ui, Bootstrap Visual Studio</li>
					<li>AltiumDesigner, MATLAB, MatchCAD, SolidWorks</li>
				</ul>
			</EuiText>
		</EuiFlexItem>

		<EuiFlexItem>
			<EuiPanel>
				<EuiText>
					<h2>Опыт работы</h2>
					<ul style={{ listStyleType: "decimal" }}>
						<li>
							WEB - разработчик
							<ul>
								<li>Разработка SPA-приложений на React</li>
								<li>Разработка SPA-приложений на React</li>
							</ul>
						</li>
						<li>
							Инженер-электроник (програмист микроконтроллеров)
							<ul>
								<li>Написание программ для микроконтроллера (STM-32)</li>
								<li>Разработка и отладка оборудования для мониторинга холодильного оборудования</li>
								<li>
									Создание карт регистров для контроллеров управления холодильным оборудованием
								</li>
								<li>Трассировка печатных плат в Altium Designer</li>
								<li>Разработка корпусов и 3D моделирование</li>
								<li>Разработка оборудования для тестирования преобразователей частоты</li>
							</ul>
						</li>
					</ul>
					<h2>Образование:</h2>
					<p>Национальный Исследовательский Университет "Московский Энергетический Университет"</p>
					<p style={{ fontSize: "10pt" }}>
						Диплом бакалавра по специальности «Электрооборудование летательных аппаратов»{" "}
					</p>
				</EuiText>
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

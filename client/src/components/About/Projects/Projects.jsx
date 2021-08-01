import React from "react";

import { EuiAccordion, EuiText, EuiSpacer, EuiPanel } from "@elastic/eui";

const Projects = () => (
	<div>
		<p>Мои проекты:</p>
		<EuiAccordion id="accordion3" buttonContent="Smart Home" paddingSize="s">
			<EuiText size="s">
				<p>
					Приложение для управления умными устройствами, а также мониторинга различных сенсоров,
					таких как (датчик температуры, давления и влажности)
				</p>
				<p>
					В данном проекте в качестве умного устройства был микроконтроллер esp-8266, а в качестве
					хаба для объединения "умных устройств" в одну сеть выступала Raspberry Pi 4
				</p>
				<p>
					Я работал над созданием универсального алгоритма подключения к умным устройствам (был
					написан алгоритм сканирования всех IP адресов устройств, подключенных к локальной сети,
					сканирование открытых портов выбранного IP устройства), и над функционалом управления ими
					через API данного "умного устройства"
				</p>
				<EuiAccordion id="accordion6" buttonContent="Были использованы следующие технологии">
					<EuiPanel color="subdued">
						<ul>
							<li>Node.js</li>
							<li>Express</li>
							<li>React</li>
							<li>Redux+Thunk</li>
							<li>MongoDB</li>
							<li>Material UI</li>
							<li>Raspberry Pi4</li>
						</ul>
						<p>
							Также реализован функционал регистрации, аутентификации с использованием сессий и
							cookie и хешированием пароля в базе.
						</p>
					</EuiPanel>
				</EuiAccordion>
				<p>
					Ссылка на GitHUB репозитрий:
					<a href="https://github.com/Rus-Lan-R/smart_home"> Smart Home</a>
				</p>
			</EuiText>
		</EuiAccordion>

		<EuiSpacer />

		<EuiAccordion
			id="accordion4"
			buttonContent="Kitchen Helper"
			buttonContentClassName="eui-textTruncate"
			paddingSize="s"
		>
			<EuiText size="s">
				<p>Телеграм бот для поиска рецептов, который выдает все рецепты выбранного вами блюда,</p>
				<p>В данном проекте я работал с API сервиса edamam и с API телеграм бота</p>
				<EuiAccordion id="accordion6" buttonContent="Были использованы следующие технологии">
					<EuiPanel color="subdued">
						<ul>
							<li>Node.js</li>
							<li>Express</li>
							<li>MongoDB</li>
							<li>Bootstrap</li>
							<li>API Telegram</li>
						</ul>
					</EuiPanel>
				</EuiAccordion>
				<p>
					Ссылка на GitHUB репозитрий:
					<a href="https://github.com/Rus-Lan-R/kitchen_helper"> Kitchen Helper</a>
				</p>
				<p>
					Ссылка на Телешрам бот:
					<a href="https://t.me/Kitchen_helper_bot"> Telegram</a>
				</p>
				<p>
					Deploy сервера на Heroku:
					<a href="https://myapplicationtgbot.herokuapp.com/"> Server</a>
				</p>
			</EuiText>
		</EuiAccordion>
		<EuiSpacer />
	</div>
);

export default Projects;

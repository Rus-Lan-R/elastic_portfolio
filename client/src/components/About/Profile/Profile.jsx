import picture from "../../../pictures/photo.jpg";

import { EuiText, EuiImage } from "@elastic/eui";

const Profile = () => (
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
		<p>Я — JavaScript разработчик, работаю на стеке MERN (MongoDB, Express, ReactJS, Node.JS)</p>
		<h3>Навыки</h3>
		<ul>
			<li>ReactJS, Redux+Thunk MVC, REST API Material Ui, Bootstrap Visual Studio</li>
			<li>AltiumDesigner, MATLAB, MatchCAD, SolidWorks</li>
		</ul>
	</EuiText>
);

export default Profile;

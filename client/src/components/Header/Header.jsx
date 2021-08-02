import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_dark.css";

import {
	EuiAvatar,
	EuiFlexGroup,
	EuiFlexItem,
	EuiHeader,
	EuiHeaderBreadcrumbs,
	EuiHeaderLogo,
	EuiHeaderSection,
	EuiHeaderSectionItem,
	EuiHeaderSectionItemButton,
	EuiLink,
	EuiPopover,
	EuiSpacer,
	EuiText,
} from "@elastic/eui";
import { htmlIdGenerator } from "@elastic/eui/lib/services";

export default function Header() {
	let history = useHistory();
	const renderLogo = () => (
		<EuiHeaderLogo
			iconType="logoElastic"
			href="/home"
			onClick={(e) => {
				e.preventDefault();
				history.push("/");
			}}
			aria-label="Go to home page"
		/>
	);

	const renderBreadcrumbs = () => {
		const breadcrumbs = [
			{
				text: "About",
				href: "/",
				onClick: (e) => {
					e.preventDefault();
					history.push("/");
				},
			},
		];

		return (
			<EuiHeaderBreadcrumbs aria-label="Header breadcrumbs example" breadcrumbs={breadcrumbs} />
		);
	};

	return (
		<EuiHeader>
			<EuiHeaderSection grow={false}>
				<EuiHeaderSectionItem border="right">{renderLogo()}</EuiHeaderSectionItem>
			</EuiHeaderSection>

			{renderBreadcrumbs()}

			<EuiHeaderSection side="right">
				<EuiHeaderSectionItem>
					<HeaderUserMenu />
				</EuiHeaderSectionItem>
			</EuiHeaderSection>
		</EuiHeader>
	);
}

const HeaderUserMenu = () => {
	const id = htmlIdGenerator()();
	const [isOpen, setIsOpen] = useState(false);

	const onMenuButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const button = (
		<EuiHeaderSectionItemButton
			aria-controls={id}
			aria-expanded={isOpen}
			aria-haspopup="true"
			aria-label="Account menu"
			onClick={onMenuButtonClick}
		>
			<EuiAvatar name="Ruslan Rodionov" size="s" />
		</EuiHeaderSectionItemButton>
	);

	return (
		<EuiPopover
			id={id}
			button={button}
			isOpen={isOpen}
			anchorPosition="downRight"
			closePopover={closeMenu}
			panelPaddingSize="none"
		>
			<div style={{ width: 320 }}>
				<EuiFlexGroup gutterSize="m" className="euiHeaderProfile" responsive={false}>
					<EuiFlexItem grow={false}>
						<EuiAvatar name="John Username" size="xl" />
					</EuiFlexItem>

					<EuiFlexItem>
						<EuiText>
							<p>John Username</p>
						</EuiText>

						<EuiSpacer size="m" />

						<EuiFlexGroup>
							<EuiFlexItem>
								<EuiFlexGroup justifyContent="spaceBetween">
									<EuiFlexItem grow={false}>
										<EuiLink>Edit profile</EuiLink>
									</EuiFlexItem>

									<EuiFlexItem grow={false}>
										<EuiLink>Log out</EuiLink>
									</EuiFlexItem>
								</EuiFlexGroup>
							</EuiFlexItem>
						</EuiFlexGroup>
					</EuiFlexItem>
				</EuiFlexGroup>
			</div>
		</EuiPopover>
	);
};

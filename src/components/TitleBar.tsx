import { AppBar, styled, Toolbar, Typography } from "@mui/material";

interface TitleBarProps {
	text: string;
}

const TitleBar = ({ text }: TitleBarProps) => {
	const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

	return (
		<>
			<AppBar style={{ alignItems: "center" }}>
				<Toolbar>
					<Typography variant="h6" align="center">
						{text}
					</Typography>
				</Toolbar>
			</AppBar>
			<Offset />
		</>
	);
};

export default TitleBar;

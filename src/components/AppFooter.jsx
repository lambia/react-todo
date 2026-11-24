function AppFooter(props) {

	const { message } = props;

	return (
		<>
			<div>{message}</div>
			<div>&copy; 2026</div>
		</>
	);

}

export default AppFooter;

const BlueButton = ({ children, type, disabled, addClass, onClick }) => {
	return (
		<button

			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default BlueButton
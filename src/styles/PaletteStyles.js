export default {
	Palette : {
		height        : '100vh',
		display       : 'flex',
		flexDirection : 'column',
		overflow      : 'hidden'
	},
	colors  : {
		height : '90%'
	},
	goBack  : {
		width           : '20%',
		height          : (props) => (props.showingFullPalette ? '25%' : '50%'),
		margin          : '0 auto',
		display         : 'inline-block',
		position        : 'relative',
		cursor          : 'pointer',
		marginBottom    : '-3.5px',
		opacity         : 1,
		backgroundColor : 'black',
		'& a'           : {
			color          : 'white',
			width          : '100px',
			height         : '30px',
			position       : 'absolute',
			display        : 'inline-block',
			top            : '50%',
			left           : '50%',
			/* adjust by negative half of its width and height */
			marginLeft     : '-50px',
			marginTop      : '-15px',
			textAlign      : 'center',
			outline        : 'none',
			background     : 'rgba(255, 255, 255, 0.3)',
			fontSize       : '1rem',
			lineHeight     : '30px',
			textTransform  : 'uppercase',
			border         : 'none',
			textDecoration : 'none'
		}
	}
}
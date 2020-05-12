import sizes from './sizes'
import bg from './bg.svg'

export default {
	// JSS offers a syntax to declare global variables which will be escaped from the JSS protocol of adding a prefix.  this way it can work in harmony with React Transition Group. we could declare global variables with normal syntax in App.js (which is not using withStyles) but this allows you to work in the same Styles file
	'@global' : {
		'.fade-exit'        : {
			opacity : 1
		},
		'.fade-exit-active' : {
			opacity    : 0,
			transition : 'opacity 500ms ease-out'
		}
	},
	root      : {
		height          : '100vh',
		display         : 'flex',
		alignItems      : 'flex-start',
		justifyContent  : 'center',
		/* background by SVGBackgrounds.com */
		backgroundColor : '#0300aa',
		backgroundImage : `url(${bg})`,
		overflow        : 'scroll'
	},
	heading   : {
		fontSize : '2rem'
	},
	container : {
		width              : '50%',
		display            : 'flex',
		alignItems         : 'flex-start',
		flexDirection      : 'column',
		flexWrap           : 'wrap',
		// border: '1px solid white'
		[sizes.down('xl')]: {
			width : '80%'
		},
		[sizes.down('xs')]: {
			width : '75%'
		}
	},
	nav       : {
		display        : 'flex',
		width          : '100%',
		justifyContent : 'space-between',
		alignItems     : 'center',
		color          : 'white',
		'& a'          : {
			// textDecoration : 'none',
			color : 'white'
		}
	},
	palettes  : {
		boxSizing           : 'border-box',
		width               : '100%',
		display             : 'grid',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns : 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns : 'repeat(1, 100%)',
			gridGap             : '1.4rem'
		}
	}
}

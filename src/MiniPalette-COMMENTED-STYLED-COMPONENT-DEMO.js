//This file is to demonstrate the use of JSS or CSS in JS using Higher Order Component.  Material UI not only gives us prebuilt components to use but a style library API that allows us to write styled components.  With this library we can write SASS style css rules in our JS with nested style rules and functions. these style rules are scoped to the particular component (though it is possible to write global styles with this tool) so we can avoid conflicts in the global scope.

// 1. first install with npm

// $ npm install --save @material-ui/styles

import React from 'react'
// 2. import withStyles
import { withStyles } from '@material-ui/styles'

// 4. define a styles const as an object whose keys are the class names and values are objects of style rules.
const styles = {
	main      : {
		backgroundColor : 'purple',
		border          : '3px solid teal'
	},
	secondary : {
		backgroundColor : 'pink',
		// 5. you can nest rules with the & syntax so here the color would be applied only to h1's within the secondary class, but nowhere else
		'& h1'          : {
			color    : 'white',
			'& span' : {
				backgroundColor : 'yellow'
			}
		}
	}
}

function MiniPalette(props) {
	// 6. pull your classes property off of props
	const { classes } = props
	console.log(classes)
	return (
		// 7. apply your class names using classes.main syntax (props.classes.main)
		<div className={classes.main}>
			<h1>Mini Palette</h1>
			<section className={classes.secondary}>
				<h1>
					Mini Palette <span>fasd;lkfjasd</span>
				</h1>
			</section>
			<span>;sdakfj</span>
		</div>
	)
}

// Higher Order Component
// 3.  export your component by calling the withStyles method on your component.  this passes styles down with props so we now have a classes attribute on MiniPalette which is available inside of props and only on this component.
export default withStyles(styles)(MiniPalette)

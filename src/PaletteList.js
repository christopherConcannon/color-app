import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteListStyles'

export class PaletteList extends Component {
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const { palettes, classes, deletePalette } = this.props
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.heading}>React Colors</h1>
						<Link to="/palette/new">Create Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							// we could use links but not best practice to have interactive content within an a tag.  also a tag styling sux
							// <Link to={`/palette/${palette.id}`}>
							// 	<MiniPalette {...palette} />
							// </Link>
							// instead we will use the history object in the handler function to perform a 'redirect'.  file:///C:/Users/cmcon/Desktop/local_web/udemy/udemy%20modern%20react%20bootcamp--colt%20steele/react-bootcamp-materials/22-react-router-patterns/router-patterns-handout/router-patterns-handout/index.html   we'll need to pass routeProps from the parent App component
							<MiniPalette
								{...palette}
								handleClick={() => this.goToPalette(palette.id)}
								handleDelete={deletePalette}
								key={palette.id}
								id={palette.id}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList)

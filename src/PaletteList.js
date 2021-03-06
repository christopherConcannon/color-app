import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'

import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import styles from './styles/PaletteListStyles'

export class PaletteList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			openDeleteDialog : false,
			deletingId       : ''
		}
		this.openDialog = this.openDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.goToPalette = this.goToPalette.bind(this)
	}
	openDialog(id) {
		this.setState({ openDeleteDialog: true, deletingId: id })
	}

	closeDialog() {
		this.setState({ openDeleteDialog: false, deletingId: '' })
	}

	handleDelete() {
		this.props.deletePalette(this.state.deletingId)
		this.closeDialog()
	}
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const { palettes, classes } = this.props
		const { openDeleteDialog } = this.state
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.heading}>Color Palette Customizer</h1>
						<Link to="/palette/new">Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							// we could use links but not best practice to have interactive content within an a tag.  also a tag styling sux
							// <Link to={`/palette/${palette.id}`}>
							// 	<MiniPalette {...palette} />
							// </Link>
							// instead we will use the history object in the handler function to perform a 'redirect'.  file:///C:/Users/cmcon/Desktop/local_web/udemy/udemy%20modern%20react%20bootcamp--colt%20steele/react-bootcamp-materials/22-react-router-patterns/router-patterns-handout/router-patterns-handout/index.html   we'll need to pass routeProps from the parent App component
							<CSSTransition
								key={palette.id}
								classNames="fade"
								timeout={500}
							>
								<MiniPalette
									{...palette}
									goToPalette={this.goToPalette}
									// handleDelete={deletePalette}
									openDialog={this.openDialog}
									key={palette.id}
									id={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog
					open={openDeleteDialog}
					aria-labelledby="delete-dialog-title"
					onClose={this.closeDialog}
				>
					<DialogTitle id="delete-dialog-title">
						Delete This Palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor : blue[100],
										color           : blue[600]
									}}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
							{/* Also can be written like this */}
							{/* <ListItemText primary='Delete' /> */}
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor : red[100],
										color           : red[600]
									}}
								>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList)

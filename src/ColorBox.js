import React, { Component } from 'react'
import CopytoClipboard from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import styles from './styles/ColorBoxStyles'
import classNames from 'classnames'
import { withStyles } from '@material-ui/styles'

export class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = { copied: false }
		this.changeCopyState = this.changeCopyState.bind(this)
	}
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500)
		})
	}
	render() {
		const { name, background, moreUrl, showingFullPalette, classes } = this.props
		const { copied } = this.state
		return (
			<CopytoClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className={classes.ColorBox}>
					{/* seperate div for overlay so all the content doesn't grow with scale() */}
					<div
						style={{ background }}
						className={classNames(classes.copyOverlay, {
							[classes.showOverlay]: copied
						})}
					/>
					<div
						className={classNames(classes.copyMessage, {
							[classes.showMessage]: copied
						})}
					>
						<h1>copied!</h1>
						<p className={classes.copyText}>{this.props.background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</CopytoClipboard>
		)
	}
}

export default withStyles(styles)(ColorBox)

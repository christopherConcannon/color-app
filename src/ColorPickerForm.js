import React, { Component } from 'react'
import Button from '@material-ui/core/button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ChromePicker } from 'react-color'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/ColorPickerFormStyles'

export class ColorPickerForm extends Component {
	constructor(props) {
		super(props)
		this.state = { currentColor: 'teal', newColorName: '' }
		this.updateCurrentColor = this.updateCurrentColor.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		)
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		)
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex })
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit() {
		const newColor = { color: this.state.currentColor, name: this.state.newColorName }
		this.props.addNewColor(newColor)
		this.setState({ newColorName: '' })
	}

	render() {
		const { paletteIsFull, classes } = this.props
		const { currentColor, newColorName } = this.state
		return (
			<div>
				<ChromePicker
					color={this.state.currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
					<TextValidator
						variant="filled"
						margin="normal"
						value={newColorName}
						placeholder="Color Name"
						className={classes.colorNameInput}
						name="newColorName"
						onChange={this.handleChange}
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[
							'Enter a color name',
							'Color name must be unique',
							'Color already used'
						]}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						disabled={paletteIsFull}
						className={classes.addColor}
						style={{
							backgroundColor : paletteIsFull ? 'grey' : currentColor
						}}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		)
	}
}

export default withStyles(styles)(ColorPickerForm)
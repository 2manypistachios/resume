import React, { Component } from "react";
const _ = require("lodash");
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import "./Carousel.less";

import {
	Container,
	Grid,
	Header,
	Segment,
	Image,
	Button,
  } from 'semantic-ui-react'

class Carousel extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.data);
		this.state = {
			activeID: 1,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[0].node.Background[0].url}')`
			},
			color: this.props.data[0].colour,
			buttonHover: false,
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[id].node.Background[0].url}')`
			},
		});
	}
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
			});
		} else {
			this.setState({
				buttonHover: false,
			});
		}
	}
	render() {
		const nodes = this.props.data;
		return (
			<ErrorBoundary>
			<section className="wrapper" style={this.state.wrapperStyle}>
				<Grid verticalAlign='middle' className="wrapper-padding">
					<Grid.Row centered>
						<Grid.Column width={10}>
							<Panel
								data={nodes[this.state.activeID]}
								panelStyle={this.state.panelStyle}
								children={this.props.children}
							/>
						</Grid.Column>
						<Grid.Column width={4}>
							<Selectors 
								data={nodes}
								activeID={this.state.activeID}
								_changeActive={this._changeActive.bind(this)}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</section>
			</ErrorBoundary>
		);
	}
}
class Panel extends React.Component {
	render() {
		const childWithProp = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {data:this.props.data});
		});
		return (
			<Segment className="panel" color={this.props.data.node.Color}>
				<Grid stackable reversed='mobile' columns={2}>
					<Grid.Column>
					<Header as="h2">{this.props.data.node.Title}</Header>
					{childWithProp}
					<Button className="panel-button" 
						color={this.props.data.node.Color}>
						Learn more!
					</Button>
					</Grid.Column>
					<Grid.Column>
						<Image src={this.props.data.node.Cover[0].url} fluid/>
					</Grid.Column>
				</Grid>
			</Segment>
		);
	}
}
class Selectors extends React.Component {
	_handleClick(e) {
		console.log("Selectors",this.props.id);
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		function arrayLoop(array,startIndex) {
			//console.log(array);
			var i = 0, emptyArray = [];
			for (let i=0; i < array.length; i++) {
				emptyArray.push(array[(startIndex+i)%array.length]); 
			}
			emptyArray.unshift(_.last(emptyArray));
			console.log(emptyArray);
			emptyArray = _.take(emptyArray,3)
			console.log(emptyArray);
			return emptyArray;
		}
		return (
			<Grid className="selectors" centered columns={1}>
				{arrayLoop(this.props.data,this.props.activeID).map((item) => 
					<Selector 
						key={item.node.Id}
						id={item.node.Id}
						title={item.node.Title}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</Grid>
		);
	}
}
class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<Grid.Row>
				<Button className={componentClass} onClick={this.props._handleClick.bind(this)}>{this.props.title}</Button>
			</Grid.Row>
		);
	}
}

export default Carousel;

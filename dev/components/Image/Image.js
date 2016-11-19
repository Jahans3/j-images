/**
 * Created by jahansj on 19/11/2016.
 */
import React, { Component } from 'react';
import s from './Image.css';

export default class Image extends Component {
  constructor() {
    super();

    this.extractID = this.extractID.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);

    this.state = {
      selected: {
        isSelected: false,
        className: 'selected',
        id: this.extractID()
      }
    };
  }

  extractID() {
    if (!this.props) return;

    let src = this.props.src;

    src = src.split('/');
    src = src[src.length - 1];

    return src.split('.')[0];
  }

  toggleSelected() {
    const ls = window.localStorage;
    const existing = JSON.parse(localStorage.getItem('flickrImages')) || [];
    const index = existing.indexOf(`imageK${this.props.idKey}`);

    if (index !== -1) {
      existing.splice(index, 1);
      this.setState({ isSelected: false });
    } else {
      existing.push(`imageK${this.props.idKey}`);
      this.setState({ isSelected: true });
    }

    console.log('toggley toggley');
    console.log(ls.getItem('flickrImages'));

    ls.setItem('flickrImages', JSON.stringify(existing));
  }
  
  componentWillMount() {
    // if ID exists in localStorage set state.isSelected to true
    const selectedimages = window.localStorage.getItem('')
  }

  componentDidMount() {
    document.getElementById(`imageK${this.props.idKey}`).addEventListener('click', this.toggleSelected);
  }

  render() {

    return (
        <li className={ s.listItem }>
          <div id={ `imageK${this.props.idKey}` } className={ `${s.innerWrap} ${this.state.isSelected ? 'selected' : ''}` }>
            <h4 className={ s.title }>
              {
                this.props.title
              }
            </h4>
            
            <img src={ this.props.src } alt={ this.props.alt } />
          </div>
        </li>
    )
  }
}
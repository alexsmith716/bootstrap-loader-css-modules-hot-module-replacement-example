import React from 'react';

import css from './Jumbotron.scss';
import style from './style.css';

export default class Jumbotron extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">
            Hello, world!
          </h1>
          <p className="lead">
            This is a simple hero unit,
            a simple jumbotron-style component
            for calling extra attention
            to featured content or information.
          </p>
          <hr className="m-y-md" />
          <p className={css.grayText}>
            It uses utility classes for typography
            and spacing to space content out
            within the larger container.
          </p>
          <p className={style.colorMarginStyle}>
            Test here CSS styles.colorMarginStyle.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#deadlink">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }

}

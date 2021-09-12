import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CoursesStyle } from './Course.module.scss';

const style = bemCssModules(CoursesStyle);

const Course = ({ authors, img, price, title }) => {
	let allAuthors = authors.join(', ');

	return (
		<article className={style()}>
			<h3 className={style('title')}> </h3>
			<img alt={title} className={style('image')} src={img} />
			<p className={style('price')}> {`Koszt kursu: ${price}zł`}</p>
			<p className={style('authors')}> {`Autorzy kursu: ${allAuthors}`} </p>
		</article>
	);
};

export default Course;

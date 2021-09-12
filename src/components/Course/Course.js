import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CoursesStyle } from './Course.module.scss';
import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';

const style = bemCssModules(CoursesStyle);

const Course = ({ authors, id, img, isUserContext = false, price, title }) => {
	const { user, setUser } = useContext(StoreContext);
	const history = useHistory();

	let allAuthors = authors.join(', ');
	const isUserLogged = Boolean(user);

	const handleOnClick = async () => {
		try {
			const { data, status } = await request.patch('/users', {
				login: user.login,
				courseId: id
			});

			if (status === 202) {
				setUser(data.user);
				history.push('/my-courses');
			}
		} catch (error) {
			console.warn(error);
		}
	};

	const shouldBeBuyButtonVisible = isUserLogged && !isUserContext;

	return (
		<article className={style()}>
			<h3 className={style('title')}> </h3>
			<img alt={title} className={style('image')} src={img} />
			<p className={style('price')}> {`Koszt kursu: ${price}zł`}</p>
			<p className={style('authors')}> {`Autorzy kursu: ${allAuthors}`} </p>
			{shouldBeBuyButtonVisible && <button onClick={handleOnClick}> Zakup ten kurs </button>}
		</article>
	);
};

export default Course;

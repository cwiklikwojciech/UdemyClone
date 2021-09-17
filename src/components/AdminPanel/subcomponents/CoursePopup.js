import React, { useContext, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CoursePopupStyles } from './CoursePopup.module.scss';
import Modal from '../../Modal/Modal';
import { StoreContext } from '../../../store/StoreProvider';
import request from '../../../helpers/request';

const style = bemCssModules(CoursePopupStyles);

const CoursePopup = ({
	authors = [],
	hidePopup,
	isEditMode = true,
	isOpenPopup,
	id,
	img = '',
	price = 0,
	title = ''
}) => {
	const [ formAuthors, setFormAuthors ] = useState(authors);
	const [ formAuthor, setAuthor ] = useState('');
	const [ formImg, setFormImg ] = useState(img);
	const [ formPice, setFormPrice ] = useState(price);
	const [ formTitle, setFormTitle ] = useState(title);

	const { setCourses } = useContext(StoreContext);

	const handleOnChangeAuthor = (event) => setAuthor(event.target.value);
	const handleOnChangeImg = (event) => setFormImg(event.target.value);
	const handleOnChangePrice = (event) => setFormPrice(event.target.value);
	const handleOnChangeTitle = (event) => setFormTitle(event.target.value);

	const handleOnSubmit = async (event) => {
		event.preventDefault();

		const courseObject = {
			authors: formAuthors,
			id,
			img: formImg,
			price: formPice,
			title: formTitle
		};

		if (isEditMode) {
			const { data, status } = await request.put('/courses', courseObject);

			if (status === 202) {
				setCourses(data.courses);
			} else {
				const { data, status } = await request.post('/courses', courseObject);
			}

			if (stauts === 201) {
				setCourses(data.courses);
			}
		}

		hidePopup();
	};

	const addAuthor = (event) => {
		event.preventDefault();

		setFormAuthors((prev) => [ ...prev, formAuthor ]);
		setAuthor('');
	};

	return (
		<Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
			<div className={style()}>
				<form className={style('form')} method="submit" onSubmit={handleOnSubmit}>
					<div className={style('form-row')}>
						<label>
							Autor:
							<input
								className={style('input')}
								onChange={handleOnChangeAuthor}
								type="text"
								value={formAuthor}
							/>
							<button onClick={addAuthor}> Dodaj autora </button>
						</label>
					</div>
					<div className={style('form-row')}>
						<label>
							Obrazek Url:
							<input
								className={style('input')}
								onChange={handleOnChangeImg}
								type="text"
								value={formImg}
							/>
						</label>
					</div>
					<div className={style('form-row')}>
						<label>
							Cena:
							<input
								className={style('input')}
								onChange={handleOnChangePrice}
								type="number"
								value={formPice}
							/>
						</label>
					</div>
					<div className={style('form-row')}>
						<label>
							Tytuł:
							<input
								className={style('input')}
								onChange={handleOnChangeTitle}
								type="text"
								value={formTitle}
							/>
						</label>
					</div>
					<button type="submit" />
					<button onClick={hidePopup} type="button">
						Anuluj
					</button>
				</form>
				<ul>
					<p>Lista autorów :</p>
				</ul>
			</div>
		</Modal>
	);
};

export default CoursePopup;

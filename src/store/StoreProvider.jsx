import React, { createContext, useState, useEffect } from 'react';

import request from '../helpers/request';

('use strict');

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
	const [ courses, SetCourses ] = useState([]);
	const [ user, SetUser ] = useState(null);

	const fetchData = async () => {
		const { data } = await request.get('/courses');

		SetCourses(data.courses);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <StoreContext.Provider value={(courses, SetCourses, user, SetUser)}>{children}</StoreContext.Provider>;
};

export default StoreProvider;

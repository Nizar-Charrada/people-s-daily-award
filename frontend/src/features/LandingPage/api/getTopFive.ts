import { axios } from '../../../lib/axios';
import { NominationEntity } from 'types';

export const getYesterdaysTopFive = async () => {
	const date = new Date();
	date.setDate(date.getDate());
	const response = await axios.get<NominationEntity[]>('/nominations', {
		params: {
			date: date.toISOString(),
		},
	});
	console.log(response.data);
	return response.data
		.sort((a, b) => b.vote.length - a.vote.length)
		.slice(0, 5);
};

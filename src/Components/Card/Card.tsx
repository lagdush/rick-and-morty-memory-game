// import { Container } from './Card.styled';

import { useEffect, useState } from 'react';
import { Flex } from '../Flex/Flex.styled';

type ImagesFromApi = {
	name: string;
	image: string;
	id: number;
};

type URLNameApi = { name: string; url: string };

type DataFromAPI = {
	id: number;
	name: string;
	status: string;
	type: string;
	gender: string;
	origin: URLNameApi;
	location: URLNameApi;
	image: string;
	episode: string[];
	url: string;
	created: string;
};

export const Card = () => {
	const [images, setImages] = useState<ImagesFromApi[]>([]);

	useEffect(() => {
		const fetchDataFromAPI = async () => {
			try {
				const data = await fetch('https://rickandmortyapi.com/api/character');
				const json: { info: unknown; results: DataFromAPI[] } =
					await data.json();
				const { results } = json;
				const imagesAndNames: ImagesFromApi[] = [];

				results.forEach((rickAndMortyElement) => {
					imagesAndNames.push({
						name: rickAndMortyElement.name,
						image: rickAndMortyElement.image,
						id: rickAndMortyElement.id,
					});
				});
				setImages(imagesAndNames);
			} catch (error) {
				throw new Error('There is problem with API');
			}
		};

		fetchDataFromAPI();
	}, []);

	return (
		<Flex direction="column">
			{images.length
				? images.map((rickAndMotyElement) => (
						<img
							key={rickAndMotyElement.id}
							src={rickAndMotyElement.image}
							alt={rickAndMotyElement.name}
						/>
				  ))
				: 'Loading...'}
		</Flex>
	);
};

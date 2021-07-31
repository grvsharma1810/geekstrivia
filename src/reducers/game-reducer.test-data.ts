import { Questions } from "../components/Playzone/Playzone.types";

export const QuestionsData: Questions = [
	{
		_id: "1",
		questionSetId: "1",
		question: "Who wrote and sang the song 'Killer' ?",
		options: [
			{
				_id: "1",
				value: "Eminem",
				isCorrect: true,
			},
			{
				_id: "2",
				value: "Kanye",
				isCorrect: false,
			},
			{
				_id: "3",
				value: "Divine",
				isCorrect: false,
			},
			{
				_id: "4",
				value: "Raftaar",
				isCorrect: false,
			},
		],
		skipped: false,
		selectedOption: null,
	},
];

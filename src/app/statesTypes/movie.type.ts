export interface IMovie  {
    id: number;
    title: string;
    price: number;
    type: string;
    image: string;
}

export interface MovieState {
	movies: IMovie[];
	message: any;
} 
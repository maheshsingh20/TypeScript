interface Point{
   Id: number;
   movieName: string;
   rating: number;
   releaseYear: number;
};

interface Point{//interface is reformable we can update and make changes in its property even after defining it ones
   costOfProduction: number;
}


function getDetail(pt: Point) {
   console.log("Id is : ", pt.Id);
   console.log("Movie Name is : ", pt.movieName);
   console.log("Rating is: ", pt.rating);
   console.log("Release Year is: ", pt.releaseYear);
   console.log("Cost of Production is: ", pt.costOfProduction);
}

getDetail({ Id:1, movieName:"Kalki", rating:9, releaseYear:2024,costOfProduction:34567});

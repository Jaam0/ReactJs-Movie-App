const URL = "https://api.themoviedb.org/3";

const  get = async(path) => {
  return await fetch(`${URL}${path}`, {
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2Q4MzdkNmE0NGM2OWM0NjVjZWQ3MWY0ZDhlYTNjOSIsInN1YiI6IjYzN2NlOTJlYmNmOGM5MDA3YzA2YWZjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CcVHUIW4eEbm5-mNJgJZN1S_gUNFhZADMRCOjaQjGns",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json()).catch((e)=>console.log(e));
};

export { get };

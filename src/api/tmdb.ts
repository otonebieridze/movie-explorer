export async function getPopularMovies(apiKey: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

export async function getMovieDetails(apiKey: string, id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

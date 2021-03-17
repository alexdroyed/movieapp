import React from "react"
import ContentLoader from "react-content-loader"

const MovieLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={248}
    height={422}
    viewBox="0 0 248 422"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="16" rx="2" ry="2" width="246" height="420" />
  </ContentLoader>
)

export default function ListOfMoviesLoader() {
    return (
        <>
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
            <MovieLoader />
        </>
    )
}


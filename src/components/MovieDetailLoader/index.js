import React from "react"
import ContentLoader from "react-content-loader"

const MovieDetailLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="166" y="64" rx="2" ry="2" width="190" height="14" /> 
    <rect x="168" y="97" rx="2" ry="2" width="140" height="10" /> 
    <rect x="12" y="64" rx="2" ry="2" width="136" height="164" /> 
    <rect x="166" y="129" rx="2" ry="2" width="140" height="10" /> 
    <rect x="34" y="242" rx="2" ry="2" width="267" height="42" /> 
    <rect x="167" y="159" rx="2" ry="2" width="140" height="10" />
  </ContentLoader>
)

export default MovieDetailLoader


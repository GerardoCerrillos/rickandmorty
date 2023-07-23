
const LocationInfo = ({location}) => {

  console.log(location)

  return (
    <article className="info">
      <h2 className="info__location">{location?.name}</h2>
      <ul className="info__second">
        <li className="info__li"><span>Type</span><span><br />{location?.type}</span></li>
        <li className="info__li"><span>Dimension</span><span><br />{location?.dimension}</span></li>
        <li className="info__li"><span>Population:</span><span><br />{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationInfo
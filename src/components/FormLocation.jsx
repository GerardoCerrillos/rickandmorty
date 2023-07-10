import getRandomNumber from "../Utils/getRandomNumber"

const FormLocation = ({setIdLocation}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const inputvalue = e.target.inputId.value.trim()
    if (inputvalue !== '' || inputvalue === '0') {
      setIdLocation(e.target.inputId.value.trim(126))
    }
    else {
      setIdLocation(getRandomNumber(126))
    }
    e.target.inputId.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
        <input id="inputId" style={{boxShadow: '1px 1px 10pz'}} type="text" />
        <button style={{background: 'rgb(17, 216, 17)', color: 'white'}}>Search</button>
    </form>
  )
}

export default FormLocation
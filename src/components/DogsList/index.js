import React,{ useEffect,useState } from 'react'
//redux
import { fetchDogsList } from '../../store/slices/dogs'
import {useDispatch,useSelector} from 'react-redux'

const DogsList = (props) => {
    const {breedSelection} = props
  const [selected,setSelected] = useState('')
  let dogListArray = []
    const { list: dogs } = useSelector(state => state.dogs)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDogsList())
    }, [])

    dogs.forEach(element => {
        if(element[1].length===0)
        dogListArray.push(element[0])
        else{
            element[1].forEach(dat =>{
                dogListArray.push(element[0].replace(' ', '')+" "+dat.replace(' ', ''))
            })
        } 
    }) 
    const handleChange = (e) => {
        e.preventDefault()
        breedSelection(e.target.value)
        setSelected(e.target.value)
    }
    return (
        <div className="container">
            <div className="row">
            <select onChange={e => handleChange(e)}>
             {dogListArray.map(data => (
                 <option value={data}>{data}</option>
             ))}
               
            </select>
            </div>
            
        </div>
    )
}

export default DogsList

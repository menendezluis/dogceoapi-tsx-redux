import React,{ useEffect } from 'react'
//redux
import { fetchDogsList } from '../../store/slices/dogs'
import {useDispatch,useSelector} from 'react-redux'

const DogsList = () => {
  
    const { list: dogs } = useSelector(state => state.dogs)
console.log("hola")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDogsList())
    }, [])
    return (
        <div className="container">
            <div className="row">
            <select>
                {dogs.map(data => (
                    <option value={data}>
                    {data}
                    </option>
                ))}
               
            </select>
            </div>
            
        </div>
    )
}

export default DogsList

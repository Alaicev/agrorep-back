import React from 'react';
import"./selMach.css"
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMachines } from '../../store/mach';
import { NavLink } from 'react-router-dom';

function SelectMachine(props) {
  const dispatch = useDispatch()
  const {items, status} = useSelector((state) => state.Mach.mach.machData)
  console.log(items)
  React.useEffect(()=> {
    dispatch(GetAllMachines())
  }, [dispatch])
  return (
    <div>
      {status == "loading"? (
        <p>Подождите</p>
    ) : (
      items.map((a,i) => <ElemMah key={i} id={a.id} name={a.name}/>)
      )}
    </div>
  );
}

export const ElemMah =(props) => {
  console.log(props)
  return (
    <div>
      <NavLink to={`/rep/${props.id}`}>{props.name}</NavLink>
    </div>
  )
} 

export default SelectMachine;
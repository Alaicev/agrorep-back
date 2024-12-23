import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllRep } from '../../store/rep';
import { useParams } from 'react-router-dom';
import "./selRep.css"

function SelectReport(props) {
  const id = useParams()
  const dispatch = useDispatch()
  const {items, status} = useSelector((state) => state.Rep.rep.repData)
  console.log(items)
  React.useEffect(()=> {
    dispatch(GetAllRep(id))
  }, [dispatch])
  return (
    <div>
      <table>
        <tr>
          <th>Ч.Н.</th>
          <th>Отчет</th>
        </tr>

      {status == "loading"? (
              <p>Подождите</p>
          ) : (
            items.map((a,i) => <Row key={i} hourse={a.hourse} message={a.message}/>)
            )}
      </table>
    </div>
  );
  
}
export const Row = (props) => {
  return (
    <tr>
      <td>{props.hourse}</td>
      <td>{props.message}</td>
    </tr>
  )
}

export default SelectReport;
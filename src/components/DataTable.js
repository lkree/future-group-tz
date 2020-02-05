import React, {useEffect} from "react";
import {Table} from 'reactstrap';
import {Spinner} from "reactstrap";
import useFetch from "../hooks/useFetch";
import useData from "../hooks/useData";
import useSort from "../hooks/useSort";

const DataTable = ({tableType}) => {
  const getUrl = (type) => type === 'full' ?
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}' :
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const [data] = useFetch(getUrl(tableType));
  const [state, setState] = useData(data, tableType);
  const [sort, setSort] = useSort();
  const onThClick = (columnName) => {
    setSort(columnName, state);
  };

  useEffect(() => setState(data, tableType), [data]);
  useEffect(() => setState(sort), [sort]);

  const renderTable = (data) => {
    return (
      <Table dark>
        <thead>
          <tr>
            <th onClick={() => onThClick('id')}>id</th>
            <th onClick={() => onThClick('firstName')}>firstName</th>
            <th onClick={() => onThClick('lastName')}>lastName</th>
            <th onClick={() => onThClick('email')}>email</th>
            <th onClick={() => onThClick('phone')}>phone</th>
          </tr>
        </thead>
        <tbody>
        {data.map(({id, firstName, lastName, email, phone}) => (
          <tr key={phone}>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    )
  };

  return (
    state ?
      renderTable(state.data) :
      <Spinner color={'primary'}/>
  );
};

export default DataTable;
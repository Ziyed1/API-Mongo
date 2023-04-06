import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../../logged_in/dummy_data/persons';


  const PlayerList=()=>{

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        getPlayers();
    }, [])

    const getPlayers = async ()=>{
        let result = await fetch('http://localhost:27017/PLdata/');
        result = await result.json();
        setPlayers(result)
    }
  

  return (
    <>
      <h1>Matches</h1>
      <div className="card mt-4">
        <div className="card-header">
          <h4 className="card-title">Premier League</h4>
        </div>
        <div className="card-body">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Nationalité</th>
                  <th>Date de naissance</th>
                  <th>Position</th>
                  <th>Club</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, i) => (
                  <tr key={i}>
                    <td>{player.name}</td>
                    <td>{player.nationality}</td>
                    <td>{player.name}</td>
                    <td>{player.name}</td>
                    <td>{player.name}</td>   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>
        {`
        .btn.btn-primary.btn-sm.pull-right {
          float: right;
        }
        .card-title {
          float: left;
        }
        .card {
          border: none !important;
          box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03),
 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
        }
        .card-header {
          padding: .50rem 1.25rem !important;
        }
        .table-bordered td, .table-bordered th {
          padding: 5px 10px !important;
        }
        th {
          font-weight: 500;
        }
        thead {
          background: #f5f5f5;
        }
        .table-bordered thead td, .table-bordered thead th {
          border-bottom-width: 1px !important;
        }

        .card mt-4 {
          margin-top: 900px;
          margin-left: 600px;
        }
        `}
      </style>
    </>
  );
}

export default PlayerList;

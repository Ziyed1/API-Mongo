import React, { useState } from 'react';

function Form() {
  const [clubs, setClubs] = useState([    {Nom: 'Liverpool', Rang : "10e", ButInscrit : "42", ButConcédé : "39", DifférenceBut : '2'},    {Nom: 'Chelsea', Rang : "8e", ButInscrit : "52", ButConcédé : "29", DifférenceBut : '30'},    {Nom: 'Man.city', Rang : "2e", ButInscrit : "62", ButConcédé : "15", DifférenceBut : '42'},  ]);

  const [editClubs, setEditClubs] = useState({});

  const handleEditUser = id => {
    // do something with id
    console.log(`Editing club with id ${id}`);
  };

  const handleDeleteUser = index => {
    const updatedClubs = [...clubs]; // Copy the clubs array
    updatedClubs.splice(index, 1); // Remove the club at the given index
    setClubs(updatedClubs); // Update the clubs array
    console.log('Deleting club with index ${index}');
  };

  return (
    <>
      <h1>CRUD - READ</h1>
      <div className="card mt-4">
			    <div className="card-header">
			        <h4 className="card-title"> CLUB </h4>
			    </div>
			    <div className="card-body">
			        <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th> Nom </th>
                                    <th> Rang </th>
                                    <th> But inscrit </th>
                                    <th> But concédé </th>
                                    <th> Différence de but </th>
                                </tr>
                            </thead>
                            <tbody>
                            {clubs.map((club, i) => (
                                <tr key={i}>
                                    <td> {club.Nom} </td>
                                    <td> {club.Rang} </td>
                                    <td> {club.ButInscrit} </td>
                                    <td> {club.ButConcédé} </td>
                                    <td> {club.DifférenceBut} </td>
                                    <td>
                                    <button type="button" onClick={() => handleDeleteUser(i)}>Delete</button>
                                    </td>
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
            box-shadow: 0 0.46875rem 2.1875rem rgba(4,9,20,0.03), 0 0.9375rem 1.40625rem rgba(4,9,20,0.03), 0 0.25rem 0.53125rem rgba(4,9,20,0.05), 0 0.125rem 0.1875rem rgba(4,9,20,0.03);
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

export default Form;
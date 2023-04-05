import React, { useState } from 'react';

function Form() {
  const [clubs, setClubs] = useState([
    { Nom: 'Liverpool', Rang: '10e', ButInscrit: '42', ButConcédé: '39', DifférenceBut: '2' },
    { Nom: 'Chelsea', Rang: '8e', ButInscrit: '52', ButConcédé: '29', DifférenceBut: '30' },
    { Nom: 'Man.city', Rang: '2e', ButInscrit: '62', ButConcédé: '15', DifférenceBut: '42' },
  ]);

  const [editClubs, setEditClubs] = useState({});

  const [nom, setNom] = useState('');
  const [rang, setRang] = useState('');
  const [butInscrit, setButInscrit] = useState('');
  const [butConcede, setButConcede] = useState('');
  const [differenceBut, setDifferenceBut] = useState('');

  const handleEditUser = (name) => {
    console.log(`Editing club with name ${name}`);
    const clubToEdit = clubs.find((club) => club.Nom === name);
    setEditClubs(clubToEdit);
    setNom(clubToEdit.Nom);
    setRang(clubToEdit.Rang);
    setButInscrit(clubToEdit.ButInscrit);
    setButConcede(clubToEdit.ButConcédé);
    setDifferenceBut(clubToEdit.DifférenceBut);
  };

  const handleDeleteUser = (index) => {
    // do something with index
    console.log(`Deleting club with index ${index}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedClubs = clubs.map((club) => {
      if (club.Nom === editClubs.Nom) {
        return {
          Nom: nom,
          Rang: rang,
          ButInscrit: butInscrit,
          ButConcédé: butConcede,
          DifférenceBut: differenceBut,
        };
      } else {
        return club;
      }
    });
    setClubs(updatedClubs);
    setNom('');
    setRang('');
    setButInscrit('');
    setButConcede('');
    setDifferenceBut('');
  };

  return (
    <>
      <h1>CRUD - UPDATE</h1>

            <h2>Clubs</h2>
      <ul>
        {clubs.map((club, index) => (
          <li key={club.Nom}>
            {club.Nom} ({club.Rang}){' '}
            <button onClick={() => handleEditUser(club.Nom)}>Edit</button>{' '}
          </li>
        ))}
      </ul>

      <h2>Edit Club</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Rang:
          <input type="text" value={rang} onChange={(e) => setRang(e.target.value)} />
        </label>
        <br />
        <label>
          But Inscrit:
          <input type="text" value={butInscrit} onChange={(e) => setButInscrit(e.target.value)} />
        </label>
        <br />
        <label>
          But Concédé:
          <input type="text" value={butInscrit} onChange={(e) => setButConcede(e.target.value)} />
        </label>
        <br />
        <label>
          Différence But:
          <input type="text" value={butInscrit} onChange={(e) => setDifferenceBut(e.target.value)} />
        </label>
        <button type="submit">Editer</button>
    </form>
    
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
import React, {useState} from 'react';

function ExcelSimulation({onAddRow}) {
    const [montant1, setMontant1] = useState(0);
    const [montant2, setMontant2] = useState(0);

    const calculateTotal = (m1, m2) => {
        return parseFloat(m1) + parseFloat(m2);
    }

    const addRow = () => {
        const newRow = {montant1, montant2};
        onAddRow(newRow);
        setMontant1(0);
        setMontant2(0);
    }

    return (<>
            <h1>Simulation Excel</h1>
            <table>
                <thead>
                <tr>
                    <th>Montant 1</th>
                    <th>Montant 2</th>
                    <th>Montant 3 (Total)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input type="number" value={montant1} onChange={(e) => setMontant1(e.target.value)}/></td>
                    <td><input type="number" value={montant2} onChange={(e) => setMontant2(e.target.value)}/></td>
                    <td><h1>{calculateTotal(montant1, montant2)}</h1></td>
                </tr>
                </tbody>
            </table>
            <button onClick={addRow}>Ajouter une ligne</button>
        </>);
}

export default ExcelSimulation;

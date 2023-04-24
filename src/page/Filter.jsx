import Nav from "../component/Nav";
import { useState } from 'react';
import ZaliheTbl from "../component/ZaliheTbl";

function Filter() {

    const [zalihe, setZalihe] = useState([
        { id: 1, naziv: 'Plazma', sifra: 'P1', cena: 250, mernaJedinica: 'g', kolicina: 5000 },
        { id: 2, naziv: 'Jafa', sifra: 'J1', cena: 220, mernaJedinica: 'g', kolicina: 10000 },
    ]);

    const [arr, setArr] = useState(zalihe)

    const filter = (e) => {
        var filter = []

        if (e.target.value == 1) {
            zalihe.forEach(zaliha => {
                if (zaliha.kolicina <= 5000)
                    filter.push(zaliha)
            });
        }
        else
            if (e.target.value == 2) {
                zalihe.forEach(zaliha => {
                    if (zaliha.kolicina > 5000)
                        filter.push(zaliha)
                });
            }
            else
                zalihe.forEach(zaliha => {
                    filter.push(zaliha)
                });

        setArr(filter)
    }


    return (
        <div>
            <Nav />
            <h1 className="mt-3 text-center">React - Domaći zadatak</h1>

            <select onChange={(e) => filter(e)} className="form-select mt-4" id="select">
                <option value="0">Izaberi</option>
                <option value="1">Manje od 5000</option>
                <option value="2">Više od 5000</option>
            </select>

            <ZaliheTbl zalihe={arr} />

        </div>
    )
}

export default Filter;
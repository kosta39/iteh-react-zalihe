import { useState } from 'react';
import ZaliheTbl from '../component/ZaliheTbl';
import Nav from '../component/Nav';

function Home() {

    const [zalihe, setZalihe] = useState([
        { id: 1, naziv: 'Plazma', sifra: 'P1', cena: 250, mernaJedinica: 'g', kolicina: 5000 },
        { id: 2, naziv: 'Jafa', sifra: 'J1', cena: 220, mernaJedinica: 'g', kolicina: 10000 },
    ]);

    const [naziv, setNaziv] = useState('');
    const [sifra, setSifra] = useState('');
    const [cena, setCena] = useState(0);
    const [mernaJedinica, setMernaJedinica] = useState('');
    const [kolicina, setKolicina] = useState(0);

    function handleNaziv(e) {
        setNaziv(e.target.value)
    }

    function handleSifra(e) {
        setSifra(e.target.value)
    }

    function handleCena(e) {
        setCena(e.target.value)
    }

    function handleMernaJedinica(e) {
        setMernaJedinica(e.target.value)
    }

    function handleKolicina(e) {
        setKolicina(e.target.value)
    }

    const novaZaliha = {
        id: 0,
        naziv: naziv,
        sifra: sifra,
        cena: cena,
        mernaJedinica: mernaJedinica,
        kolicina: kolicina,
    }


    const unesiZalihu = () => {
        var last = zalihe[zalihe.length - 1].id
        novaZaliha.id = ++last
        setZalihe(zalihe => [...zalihe, novaZaliha]);
    }

    return (
        <div>

            <Nav />

            <h1 className="mt-3 text-center">React - Domaći zadatak</h1>

            <div className="row mt-5">
                <div className="zaliha-div offset-1 col-2">
                    <label>Naziv proizvoda: </label>
                    <input type="text" className="form-control mt-2 mb-2" value={naziv} onChange={handleNaziv} />
                </div>
                <div className="zaliha-div col-2">
                    <label>Šifra: </label>
                    <input type="text" className="form-control mt-2 mb-2" value={sifra} onChange={handleSifra} />
                </div>
                <div className="zaliha-div col-2">
                    <label>Cena: </label>
                    <input type="number" className="form-control mt-2 mb-2" value={cena} onChange={handleCena} />
                </div>
                <div className="zaliha-div col-2">
                    <label>Merna jedinica: </label>
                    <input type="text" className="form-control mt-2 mb-2" value={mernaJedinica} onChange={handleMernaJedinica} />
                </div>
                <div className="zaliha-div col-2">
                    <label>Količina: </label>
                    <input type="number" className="form-control mt-2 mb-2" value={kolicina} onChange={handleKolicina} />
                </div>
            </div>
            <button onClick={unesiZalihu} className="btn btn-primary btn-lg offset-5 mt-3 mb-4" id="btnadd">Unesi</button>
            <hr />

            <ZaliheTbl zalihe={zalihe} />

        </div>
    )
}

export default Home;
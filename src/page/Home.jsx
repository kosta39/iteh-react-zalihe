function Home() {
    return (
        <div>
            <h1 className="mt-3 text-center">React - Domaći zadatak</h1>

            <div className="row mt-5">
                <div className="zaliha-div offset-1 col-2">
                    <label>Naziv proizvoda: </label>
                    <input type="text" className="form-control mt-2 mb-2" />
                </div>
                <div className="zaliha-div col-2">
                    <label>Šifra: </label>
                    <input type="text" className="form-control mt-2 mb-2" />
                </div>
                <div className="zaliha-div col-2">
                    <label>Cena: </label>
                    <input type="number" className="form-control mt-2 mb-2" />
                </div>
                <div className="zaliha-div col-2">
                    <label>Merna jedinica: </label>
                    <input type="text" className="form-control mt-2 mb-2" />
                </div>
                <div className="zaliha-div col-2">
                    <label>Količina: </label>
                    <input type="number" className="form-control mt-2 mb-2" />
                </div>
            </div>
            <button className="btn btn-primary btn-lg offset-5 mt-3 mb-4" id="btnadd">Unesi</button>

            <hr />
        </div>
    )
}

export default Home;
function ZaliheTbl(props) {
    return (
        <div>
            <table id="zaliheTable" className="table mt-5 table-bordered">
                <thead>
                    <tr className="table-primary">
                        <th>ID</th>
                        <th>Naziv proizvoda</th>
                        <th>Šifra</th>
                        <th>Cena</th>
                        <th>Merna jedinica</th>
                        <th>Količina</th>
                    </tr>
                </thead>

                <tbody>
                    {props.zalihe.map(zaliha => {
                        return (
                            <tr key={zaliha.id}>
                                <td>{zaliha.id}</td>
                                <td>{zaliha.naziv}</td>
                                <td>{zaliha.sifra}</td>
                                <td>{zaliha.cena}</td>
                                <td>{zaliha.mernaJedinica}</td>
                                <td>{zaliha.kolicina}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ZaliheTbl;
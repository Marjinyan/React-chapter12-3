import css from './table.module.css'

    const Table = ({users}) => {
    return <div>
        <table className={css.items}>
            <thead>
                <tr>
                    <th>name</th>
                    <th>surname</th>
                    <th>picture</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(({name, picture},i) => {
                        return <tr key={i}>
                            <td>{name.first}</td>
                            <td>{name.last}</td>
                            <td>
                                <img src={picture.large}/>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}
export default Table
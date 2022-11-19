export const NameList = () => {
    const names = ['Allan', 'Sejin', 'Isaac']

    return <div>
        {
            names.map((name) => {
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>

}
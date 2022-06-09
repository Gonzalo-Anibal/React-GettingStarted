interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    numberHouse: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Gonzalo',
        edad: 26,
        direccion: {
            pais: 'Chile',
            numberHouse: 2180
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )

}
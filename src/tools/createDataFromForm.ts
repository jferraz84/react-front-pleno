const createDataFromForm = ( form: HTMLFormElement ): any => Object.fromEntries( new FormData( form ) )

export default createDataFromForm
import '../../../index.css'

export const SuccessMessage = ({ newContact }) => {
    const { name } = newContact

    return (
        <div className='success'>
            <h2 className='success-title'>Added  {name } </h2>
        </div>
    )
}
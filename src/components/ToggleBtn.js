export const ToggleBtn = ({onClick}) => {
    return (
        <div className='toggle-wrapper'>
            <input type="checkbox" className="toggle" onClick={onClick} />
        </div>
    )
}
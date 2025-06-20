import '../../styles/cellText.css'

export function CellText ({message}: { message: string }) {
    return (
        <div id="cellText">
            <p>
                {message}
            </p>
        </div>
    )
}